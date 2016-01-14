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
    //var _ = require("lodash");

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
                                locations: response.results
                            } 
                        };
                    }); 
                }   
            });
        });


        self.states.add('states:results', function(name, opts) {
			var loc = opts.locations
				.map(function(d) {
					return new Choice(d.full_name);
				});
				
			return new MenuChoiceState(name, {
				question: 'Please select the location you would like to query:',
				choices: loc,
				characters_per_page: 160,
				options_per_page : 3,
				next: function(choice) {
					return choice.value;
					}	
				});
			});



			//return new ChoiceState(name, {
			//question: 'Please select the location you would like to query:',
			//_.foreach(locations[1], function(value) {
			//choices: [ 
			//new Choice(console.log(value)) ],
			//next: function(choice) {
		//		return choice.value;
		//		}
			//next: function(content) {
                  //  return 'states:end'
          //    });
           //}); 
        //});
              
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
