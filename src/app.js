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
                    new Choice ('demographics', 'Demographics'),
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
                            choice_name : choice.label,
                            choice_data : opts.data[choice.value],
                            location_name : opts.full_name
                            }
                        };
                    }
            });
        });

        self.states.add('states:display-data', function(name, opts) {
            //var choice_data = _.map(opts.choice_data, function(d) {
            //return new Choice(d); 
            //});
            //console.log(choice_data);
            return new ChoiceState(name, {
                question: [
                //data from json file here
                // '++++++++++++++++++++',
                opts.location_name,
                opts.choice_name + ':'
                //choice_data
                // '++++++++++++++++++++'
                ].join('\n'),

                choices: [
                    new Choice('states:sms', 'SMS details'),
                    new Choice('states:select-section', 'Query another section'),
                    new Choice('states:location', 'Change location to query'),
                    new Choice('states:start', 'Main Menu'),
                    new Choice('states:end', 'Exit')],

                characters_per_page: 160,

                next: function(choice) {
                    if (choice.value == 'states:start' || choice.value == 'states:end') {
                        return choice.value;
                    } else {
                        return {
                            name: choice.value,
                            creator_opts: {
                                choice_data : opts.choice_data
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

    return {
        GoApp: GoApp
    };
}();