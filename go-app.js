// WARNING: This is a generated file.
//          If you edit it you will be sad.
//          Edit src/app.js instead.

var go = {};
go;

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
                        name: 'states:select-section',
                        creator_opts : {
                            full_geoid : choice.value,
                            full_name : choice.label
                        }
                    };
                }   
            });
        });

        self.states.add('states:select-section', function(name, opts) {
            return self
                .http.get('http://wazimap.co.za/profiles/' + opts.full_geoid + '.json')
                .then(function(resp) {
                    return new ChoiceState(name, {
                        question: 'Please select which information you would like to query:',
                        choices: [
                            new Choice('elections', 'Elections'),
                            new Choice ('demographics', 'Demographics'),
                            new Choice('households', 'Households')
                        ],
                        next: function(choice) {
                            return {
                                name: 'states:display-data',
                                creator_opts : {
                                    choice_data : response.data[choice.value],
                                    location_name : opts.full_name
                                }
                            };
                        }
                    });
                });
        });

        self.states.add('states:display-data', function(name, opts) {
            return {
                text: 'You are receiving data on ' + opts.location_name + 'for ' + opts.choice_data,
                next : 'states:end'
            };            
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
go.init = function() {
    var vumigo = require('vumigo_v02');
    var InteractionMachine = vumigo.InteractionMachine;
    var GoApp = go.app.GoApp;


    return {
        im: new InteractionMachine(api, new GoApp())
    };
}();
