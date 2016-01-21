var vumigo = require('vumigo_v02');
var fixtures = require('./fixtures');
var AppTester = vumigo.AppTester;



describe("app", function() {
    describe("GoApp", function() {
        var app;
        var tester;

        beforeEach(function() {
            app = new go.app.GoApp();

            tester = new AppTester(app);

            tester
                .setup.config.app({
                    name: 'test_app'
                })
                .setup(function(api) {
                    fixtures().forEach(api.http.fixtures.add);
                });
        });

        describe("when the user starts a session", function() {
            it("should ask them what they want to do", function() {
                return tester
                    .start()
                    .check.interaction({
                        state: 'states:start',
                        reply: [
                            'Welcome to Wazimap! What would you like to do?',
                            '1. Enter a location to query',
                            '2. Query a random location',
                            '3. Exit'
                        ].join('\n')
                    })
                    .run();
            });
        });

        describe("when the user asks to query a location", function() {
            it("should ask them to enter a location", function() {
                return tester
                    .setup.user.state('states:start')
                    .input('1')
                    .check.interaction({
                        state: 'states:location',
                        reply: 'Please enter a location on National, Provincial or Ward level to query:'                       
                    })
                    .run();
            });
        });

        describe("when the user submits a location", function() {
            it("should return a list of location results", function() {
                return tester
                    .setup.user.state('states:location')
                    .input('Claremont')
                    .check.interaction({
                        state: 'states:results',
                        reply: [
                            'Please select the location you would like to query:',
                            '1. Ward 58 (19100058), City of Cape Town, Western Cape',
                            '2. Ward 7 (52502007), Newcastle, KwaZulu-Natal',
                            // '3. Ward 82 (79800082), City of Johannesburg, Gauteng',
                            // '4. Ward 55 (79900055), City of Tshwane, Gauteng' 
                        ].join('\n')
                    })
                    .run();
            });
        });

        describe("when the user selects a location to query", function() {
            it("should return a list of data to query", function() {
                return tester
                    .setup.user.state('states:location', {creator_opts: {

                    }})
                    .inputs('Claremont', '1')
                    .check.interaction({
                        state: 'states:select-section',
                        reply: [
                            'I would like to query:',
                            '1. Elections',
                            '2. Demographics',
                            '3. Households',
                            '4. Service Delivery',
                            '5. Economics',
                            '6. Education',
                            '7. Children',
                            '8. Child-headed Households'
                        ].join('\n')
                    })
           //         .check.user.state(function(state) {
                        //assert
             //       })
                    .run();
            });
        });

        describe("when the user selects a type of data to query", function() {
            it("should display the data", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '1')
                    .check.interaction({
                        state: 'states:display-data',
                        reply: [
                            'ward-19100058',
                            'Elections:',
                            'Provincial 2014:',
                            'Registered voters = 19234',
                            '1. SMS details',
                            '2. Query another section',
                            '3. Exit'
                        ].join('\n')
                    })
                    .run();
            });
        });

        describe("when the user chooses to query another section for the same location", function() {
            it("should return back to the select-section state ", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '1', '2')
                    .check.interaction({
                        state: 'states:select-section',
                        reply: [
                            'I would like to query:',
                            '1. Elections',
                            '2. Demographics',
                            '3. Households',
                            '4. Service Delivery',
                            '5. Economics',
                            '6. Education',
                            '7. Children',
                            '8. Child-headed Households'
                        ].join('\n')                     
                    })
                    .run();
            });
        });

        describe("when the user chooses to exit", function() {
            it("should say good bye and end the session", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '1', '3')
                    .check.interaction({
                        state: 'states:end',
                        reply: 'Thank you for using Wazimap! Find more information on www.wazimap.co.za'
                    })
                    .check.reply.ends_session()                    
                    .run();
            });
        });

     describe("when the user asks to query a random location", function() {
            it("should return a random location with query data", function() {
                return tester
                    .setup.user.state('states:start')
                    .input('2')
                    .check.interaction({
                        state: 'states:randomLocation',
                        reply: 'Random locations coming soon!'
                        
                    })
                    .run();
            });
        });

        describe("when the user asks to exit", function() {
            it("should say good bye and end the session", function() {
                return tester
                    .setup.user.state('states:start')
                    .input('3')
                    .check.interaction({
                        state: 'states:end',
                        reply: 'Thank you for using Wazimap! Find more information on www.wazimap.co.za'
                    })
                    .check.reply.ends_session()
                    .run();
            });
        });
    });
});
