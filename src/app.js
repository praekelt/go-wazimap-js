go.app = function() {
    var vumigo = require('vumigo_v02');
    var App = vumigo.App;
    var Choice = vumigo.states.Choice;
    var ChoiceState = vumigo.states.ChoiceState;
    var EndState = vumigo.states.EndState;
    var FreeText = vumigo.states.FreeText;
    var JsonApi = vumigo.http.api.JsonApi;

    var _ = require("lodash");

    var GoApp = App.extend(function(self) {
        App.call(self, 'states:start');

        self.init = function() {            
            self.http = new JsonApi(self.im);       
        };
        
        self.states.add('states:start', function(name) {
            return new ChoiceState(name, {
                question: 'Welcome to Wazimap! What would you like to do?',
        
                choices: [
                    new Choice('states:location', 'Enter a location to query'),
                    new Choice ('states:randomLocation', 'Query a random location'),
                    new Choice('states:end', 'Exit')],

                next: function(choice) {
                   return choice.value;
                }
            });
        });

        self.states.add('states:location', function(name) {
            return new FreeText(name, {
                question: 'Please enter a location on National, Provincial or Ward level to query:',
                next: function(content) {
                    return self 
                    .http.get('http://wazimap.co.za/place-search/json/', {
                        params: {q : content}
                    })
                    .then (function(response) {  
                        return {
                            name: 'states:results',
                            creator_opts: {
                                locations: response.data.results
                            } 
                        };
                    }); 
                }   
            });
        });

        self.states.add('states:results', function(name, opts) {
            var location_choices = _.map(opts.locations.slice(0, 2), function(d) {
                return new Choice(d.full_geoid, d.full_name);
            });

            return new ChoiceState(name, {
                question: 'Please select the location you would like to query:',
                choices: location_choices,
                characters_per_page: 160,
                options_per_page : 3,
                next: function(choice) {
                    return { 
                        name: 'states:retrieve-location',
                        creator_opts : {
                            full_geoid : choice.value,
                            full_name : choice.label
                        }
                    };
                }   
            });
        });

        self.states.add('states:retrieve-location', function(name, opts) {
            return self
                .http.get('http://wazimap.co.za/profiles/' + opts.full_geoid + '.json')
                .then(function(response) {
                    opts.data = response.data;
                    return  self.states.create(
                        'states:select-section', opts);
                });
        });

        self.states.add('states:select-section', function(name, opts) {
            return new ChoiceState(name, {
                question: 'I would like to query:',
                choices: [
                    new Choice('elections', 'Elections'),
                    new Choice('demographics', 'Demographics'),
                    new Choice('households', 'Households'),
                    new Choice('service_delivery', 'Service Delivery'),
                    new Choice('economics', 'Economics'),
                    new Choice('education', 'Education'),
                    new Choice('children', 'Children'),
                    new Choice('child_households', 'Child-headed Households')
                        ],
                next: function(choice) {
                    return {
                        name: 'states:display-data',
                        creator_opts : {
                            section_name : choice.label,
                            section_id : choice.value,
                            opts_data : opts.data,
                            location_name : opts.full_name
                        }
                    };
                }
            });
        });

        self.states.add('states:display-data', function(name, opts) {
            var section_data = opts.opts_data[opts.section_id]; 
            var return_text;

            switch (opts.section_id) { 
                case "elections" : 
                    return_text = get_election_data(section_data);
                    break;

                case "demographics" :
                    return_text = get_demographics_data(section_data);
                    break;

                case "households" : 
                    return_text = get_households_data(section_data);
                    break; 

                case "service_delivery" :
                    return_text = get_service_delivery_data(section_data); 
                    break;

                case "economics" : 
                    return_text = get_economics_data(section_data);
                    break;

                case "education" :
                    return_text = get_education_data(section_data);
                    break; 

                case "children" : 
                    return_text = get_children_data(section_data);
                    break; 

                case "child_households" : 
                    return_text = get_child_headed_households_data(section_data);
                    break; 
            }

            return new ChoiceState(name, {
                question: [
                opts.location_name,
                opts.section_name + ':',
                return_text.slice(0,1)
                ].join('\n'),

                choices: [
                    new Choice('states:sms', 'SMS details'),
                    new Choice('states:select-section', 'Query another section'),
                    new Choice('states:end', 'Exit')],

                next: function(choice) {
                    if (choice.value == 'states:start' || choice.value == 'states:end') {
                        return choice.value;
                    } else {
                        return {
                            name: choice.value,
                            creator_opts: {
                                section_id : opts.section_id,
                                section_data : section_data
                            }
                        };
                    }
                }
            });
        });

        self.states.add('states:sms', function(name, opts) {
            return new EndState(name, {
                text: 'Sms coming soon!'
            });
        });

        self.states.add('states:randomLocation', function(name) {
            return new EndState(name, {
                text: 'Random locations coming soon!'
            });
        });

        self.states.add('states:end', function(name) {
            return new EndState(name, {
                text: 'Thank you for using Wazimap! Find more information on www.wazimap.co.za',
                next: 'states:start'
            });
        });
    });

get_election_data = function(section_data) {
    var sub_section_data = _.map(section_data, function(d) {
        return (d.name + ":"); // + d.registered_voters.name + " = " + d.registered_voters.values.this + " " + d.party_distribution.DA.name + ": " + d.party_distribution.DA.values. this + "% " + d.party_distribution.ANC.name + ": " + d.party_distribution.ANC.values.this + "%");
    });
    return sub_section_data;
};

get_demographics_data = function(section_data) {
    var sub_section_data = _.map(section_data, function(d) {
        return (d.name + ": " + d.citizenship_south_african.name + " = " + d.citizenship_south_african.values.this + "%, " + d.language_most_spoken.name + " = " + d.language_most_spoken.values.this + "%");
    });
    return sub_section_data;
};

get_households_data = function(section_data) {
    var sub_section_data = _.map(section_data, function(d) {
        return (d.name + ": " + d.informal.name + ' = ' + d.informal.values.this + "%");
    });
    return sub_section_data;
};

get_service_delivery_data = function(section_data) {
    var sub_section_data = _.map(section_data, function(d) {
        return (d.name + ": " + d.electricity_access_distribution.name + " = " + d.electricity_access_distribution.values.this + "%");
    });
    return sub_section_data;
};

get_economics_data = function(section_data) {
    var sub_section_data = _.map(section_data, function(d) {
        return (d.name); 
    });
    return sub_section_data;
};

get_education_data = function(section_data) {
    var sub_section_data = _.map(section_data, function(d) {
        return (d.name + ": " + d.percent_fet_or_higher.name + " : " + d.percent_fet_or_higher.values.this + "%");
    });
    return sub_section_data;
};

get_children_data = function(section_data) {
    var sub_section_data = _.map(section_data, function(d) {
        return (d.name + ": " + d.parental_survival_distribution.name + " = " + d.parental_survival_distribution.values.this + "%" );
    });
    return sub_section_data;
};

get_child_headed_households_data = function(section_data) {
    var sub_section_data = _.map(section_data, function(d) {
        return (d.name);
    });
    return sub_section_data;
};

    return {
        GoApp: GoApp
    };


}();
