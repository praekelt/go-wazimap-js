var vumigo = require('vumigo_v02');
var fixtures = require('./fixtures');
var AppTester = vumigo.AppTester;
var assert = require('assert');
var _ = require('lodash');

describe("app", function() {
    describe("GoApp", function() {
        var app;
        var tester;

        beforeEach(function() {
            app = new go.app.GoApp();

            tester = new AppTester(app);

            tester
                .setup.config.app({
                    name: 'test_app',
                    endpoints: {sms: {delivery_class: 'sms'}}
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

        describe("when the user submits a location that does not exist", function() {
            it("should ask them how they would like to proceed", function() {
                return tester
                    .setup.user.state('states:location')
                    .input('Claremnt')
                    .check.interaction({
                        state: 'states:incorrect_location',
                        reply: [
                        'Location not found. Would you like to:',
                        '1. Enter a different location',
                        '2. Go to Main Menu',
                        '3. Exit'
                        ].join('\n')                       
                    })
                    .run();
            });
        });

        describe("when a user enters an incorrect location, and then a valid location", function() {
            describe(" we should return the list of location results of the valid location", function() {
                it("should display page 1 of the correct location results", function() {
                    return tester
                        .setup.user.state('states:location')
                        .inputs('Claremnt', '1', 'Claremont')
                        .check.interaction({
                            state: 'states:results',
                            reply: [
                                'Select the location you would like to query:',
                                '1. Ward 58 (19100058), City of Cape Town, Western Cape',
                                '2. Ward 7 (52502007), Newcastle, KwaZulu-Natal',
                                '3. Next'
                            ].join('\n')
                        })
                        .run(); 
                });

                it("should display page 2 of the correct location results", function() {
                    return tester
                        .setup.user.state('states:location')
                        .inputs('Claremnt', '1', 'Claremont', '3')
                        .check.interaction({
                            state: 'states:results',
                            reply: [
                                'Select the location you would like to query:',
                                '1. Ward 82 (79800082), City of Johannesburg, Gauteng',
                                '2. Ward 55 (79900055), City of Tshwane, Gauteng',
                                '3. Back'
                            ].join('\n')
                        })
                        .run();
                });                

            });
        });

        describe("when the user submits a valid location", function() {
            describe("we want to show the results on multiple pages", function() {
                it("should display page 1 of location results", function() {
                    return tester
                        .setup.user.state('states:location')
                        .input('Claremont')
                        .check.interaction({
                            state: 'states:results',
                            reply: [
                                'Select the location you would like to query:',
                                '1. Ward 58 (19100058), City of Cape Town, Western Cape',
                                '2. Ward 7 (52502007), Newcastle, KwaZulu-Natal',
                                '3. Next'
                            ].join('\n')
                        })
                        .run();
                });

                it("should display page 2 of location results", function() {
                    return tester
                        .setup.user.state('states:location')
                        .inputs('Claremont', '3')
                        .check.interaction({
                            state: 'states:results',
                            reply: [
                                'Select the location you would like to query:',
                                '1. Ward 82 (79800082), City of Johannesburg, Gauteng',
                                '2. Ward 55 (79900055), City of Tshwane, Gauteng',
                                '3. Back'
                            ].join('\n')
                        })
                        .run();
                });
            });
        });

        describe("when the user submits a location that does not exist", function() {
            it("should ask them how they would like to proceed", function() {
                return tester
                    .setup.user.state('states:location')
                    .input('Claremnt')
                    .check.interaction({
                        state: 'states:incorrect_location',
                        reply: [
                        'Location not found. Would you like to:',
                        '1. Enter a different location',
                        '2. Go to Main Menu',
                        '3. Exit'
                        ].join('\n')                       
                    })
                    .run();
            });
        });

        describe("when a user enters an incorrect location, and then a valid location", function() {
            describe("we want to show the results on multiple pages", function() {
                it("should display page 1 of location results of the valid location", function() {
                    return tester
                        .setup.user.state('states:location')
                        .inputs('Claremnt', '1', 'Claremont')
                        .check.interaction({
                            state: 'states:results',
                                reply: [
                                    'Select the location you would like to query:',
                                    '1. Ward 58 (19100058), City of Cape Town, Western Cape',
                                    '2. Ward 7 (52502007), Newcastle, KwaZulu-Natal',
                                    '3. Next'
                                ].join('\n')
                            })
                            .run();
                    });

                it("should display page 2 of location results", function() {
                    return tester
                        .setup.user.state('states:location')
                        .inputs('Claremont', '3')
                        .check.interaction({
                            state: 'states:results',
                            reply: [
                                'Select the location you would like to query:',
                                '1. Ward 82 (79800082), City of Johannesburg, Gauteng',
                                '2. Ward 55 (79900055), City of Tshwane, Gauteng',
                                '3. Back'
                            ].join('\n')
                        })
                        .run();
                });
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
                    .run();
            });
        });

        describe("when the user selects to query Elections", function() {
            it("should display the Election data", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '1')
                    .check.interaction({
                        state: 'states:display-data',
                        reply: [
                            'You have chosen to query Elections in Claremont',
                            '1. SMS details to me',
                            '2. Query another section',
                            '3. Main Menu',
                            '4. Exit'
                        ].join('\n')
                    })
                    .run();
            });
        });

        describe("when the user selects to query Demographics", function() {
            it("should display the Demographic data", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '2')
                    .check.interaction({
                        state: 'states:display-data',
                        reply: [
                            'You have chosen to query Demographics in Claremont',
                            '1. SMS details to me',
                            '2. Query another section',
                            '3. Main Menu',
                            '4. Exit'
                        ].join('\n')
                    })
                    .run();
            });
        });

        describe("when the user selects to query Households", function() {
            it("should display the Household data", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '3')
                    .check.interaction({
                        state: 'states:display-data',
                        reply: [
                            'You have chosen to query Households in Claremont',
                            '1. SMS details to me',
                            '2. Query another section',
                            '3. Main Menu',
                            '4. Exit'
                        ].join('\n')
                    })
                    .run();
            });
        });

        describe("when the user selects to query Service Delivery", function() {
            it("should display the Service Delivery data", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '4')
                    .check.interaction({
                        state: 'states:display-data',
                        reply: [
                            'You have chosen to query Service Delivery in Claremont',
                            '1. SMS details to me',
                            '2. Query another section',
                            '3. Main Menu',
                            '4. Exit'
                        ].join('\n')
                    })
                    .run();
            });
        });

        describe("when the user selects to query Economics", function() {
            it("should display the Econmics data", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '5')
                    .check.interaction({
                        state: 'states:display-data',
                        reply: [
                            'You have chosen to query Economics in Claremont',
                            '1. SMS details to me',
                            '2. Query another section',
                            '3. Main Menu',
                            '4. Exit'
                        ].join('\n')
                    })
                    .run();
            });
        });

        describe("when the user selects to query Education", function() {
            it("should display the Education data", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '6')
                    .check.interaction({
                        state: 'states:display-data',
                        reply: [
                            'You have chosen to query Education in Claremont',
                            '1. SMS details to me',
                            '2. Query another section',
                            '3. Main Menu',
                            '4. Exit'
                        ].join('\n')
                    })
                    .run();
            });
        });

        describe("when the user selects to query Children", function() {
            it("should display the Children data", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '7')
                    .check.interaction({
                        state: 'states:display-data',
                        reply: [
                            'You have chosen to query Children in Claremont',
                            '1. SMS details to me',
                            '2. Query another section',
                            '3. Main Menu',
                            '4. Exit'
                        ].join('\n')
                    })
                    .run();
            });
        });

        describe("when the user selects to query Child-headed households", function() {
            it("should display the Child-headed households data", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '8')
                    .check.interaction({
                        state: 'states:display-data',
                        reply: [
                            'You have chosen to query Child-headed Households in Claremont',
                            '1. SMS details to me',
                            '2. Query another section',
                            '3. Main Menu',
                            '4. Exit'
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

        describe("when the user selects to receive Election data via sms", function() {
            it("should send the user the query via sms", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '1', '1')
                    .check.interaction({
                        state: 'states:end',
                        reply: 'Thank you for using Wazimap! Find more information on www.wazimap.co.za'
                    })
                    .check(function(api) {
                        var smses = _.where(api.outbound.store, {
                            endpoint: 'sms'
                        });
                        var sms = smses[0];
                        assert.equal(smses.length,1);
                        assert.equal(sms.content, [
                            'Claremont Elections:',
                            'Provincial 2014:',
                            'Registered voters = 19234',
                            '73.59% cast their vote',
                            'Results: DA 89.54%, ANC 5.73%, AGANG 1.12%',
                            'National 2014:',
                            'Registered voters = 19234',
                            '75.2% cast their vote',
                            'Results: DA 85.22%, ANC 5.78%, AGANG 2.77%',
                            'Wazimap USSD: *120*8864*1601#',
                            'www.wazimap.co.za'
                        ].join('\n'));
                    })
                    .run();
            });
        });

        describe("when the user chooses to exit", function() {
            it("should say good bye and end the session", function() {
                return tester
                    .setup.user.state('states:location')
                    .inputs('Claremont', '1', '1', '4')
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

        describe("when the user enters a location with without capitalising the first letter", function() {
            it("should capitalise each first letter of the location entered", function() {
                return tester 
                .setup.user.state('states:start')
                .inputs('1', 'fish hoek', '1', '1')
                .check.interaction({
                    state: 'states:display-data',
                    reply: [
                        'You have chosen to query Elections in Fish Hoek',
                        '1. SMS details to me',
                        '2. Query another section',
                        '3. Main Menu',
                        '4. Exit'
                    ].join('\n')
                })
                .run();
            });
        });
    });
});
