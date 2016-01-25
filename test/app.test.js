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
                .setup.char_limit(400)
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
                            'Select the location you would like to query:',
                            '1. Ward 58 (19100058), City of Cape Town, Western Cape',
                            '2. Ward 7 (52502007), Newcastle, KwaZulu-Natal',
                            '3. Next',
                            //'3. Ward 82 (79800082), City of Johannesburg, Gauteng',
                            //'4. Ward 55 (79900055), City of Tshwane, Gauteng' 
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
                    .run();
            });
        });

        describe("PaginatedState testing for Election data query", function() {
            describe("Display data for Election query", function() {
                it("should display page 1 of Election results", function() {
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
                                '73.59% cast their vote',
                                'DA 89.54%,ANC 5.73%,AGANG',
                                '1. Next',
                                '2. SMS Details'
                            ].join('\n')
                        })
                        .run();
                });

                it("should display choices on page 2", function() {
                    return tester
                        .setup.user.state('states:location')
                        .inputs('Claremont', '1', '1', '1')
                        .check.interaction({
                            state: 'states:display-data',
                            reply: [
                                '1.12%',
                                'National 2014:',
                                'Registered voters = 19234',
                                '75.2% cast their vote',
                                'DA 85.22%,ANC 5.78%,AGANG 2.77%',
                                '1. Back',
                                '2. SMS Details'
                            ].join('\n')
                        })
                        .run();
                });
            });
        });

        describe("PaginatedState testing for Demographics query", function() {
            describe("Display data for Demographics query", function() {
                it("should display page 1 of Demographics results", function() {
                    return tester
                        .setup.user.state('states:location')
                        .inputs('Claremont', '1', '2')
                        .check.interaction({
                            state: 'states:display-data',
                            reply: [
                                'ward-19100058',
                                'Demographics:',
                                'Area population: 28624',
                                'People/square km: 2588.3459326509205',
                                'RSA Citizens: 81.04%',
                                'Female (51.62%) Male',
                                '1. Next',
                                '2. SMS Details'
                            ].join('\n')
                        })
                        .run();
                });

                it("should display page 2 of Demographics results", function() {
                    return tester
                        .setup.user.state('states:location')
                        .inputs('Claremont', '1', '2', '1')
                        .check.interaction({
                            state: 'states:display-data',
                            reply: [
                                '(48.38%)',
                                'Black African (19.19%) Coloured (13.39%) Indian/Asian (4.8%) White (58.43%)',
                                'Afrikaans (6.87%) English (76.06%) IsiXhosa',
                                '1. Next',
                                '2. Back',
                                '3. SMS Details'
                            ].join('\n')
                        })
                        .run();
                });

                it("should display page 3 of Demographics results", function() {
                    return tester
                        .setup.user.state('states:location')
                        .inputs('Claremont', '1', '2', '1', '1')
                        .check.interaction({
                            state: 'states:display-data',
                            reply: [
                                '(2.61%) IsiZulu (0.57%)', 
                                'Age: <18 (20.14%) 18-64 (69.26%) 65+ (10.6%)',
                                'Born in RSA: 73.19%',
                                '1. Back',
                                '2. SMS Details'
                            ].join('\n')
                        })
                        .run();
                });
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
                            'ward-19100058',
                            'Households:',
                            'Informal Dwellings: 0.28%',
                            'Owned and paid off: 29.66%',
                            'Rented: 35.45%',
                            'Median Annual Income: R230700',
                            'Total Households: 10854',
                            'Head of Household: <18 (9%) Female (40.4%)',
                            'Own car: 88.34%',
                            '1. SMS details',
                            '2. Query another section',
                            '3. Exit'
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
                            'ward-19100058',
                            'Service Delivery:',
                            'Flush toilet access: 99%',
                            'Electricity access: 99.86%',
                            'Refuse disposal: 98.78%',
                            '1. SMS details',
                            '2. Query another section',
                            '3. Exit'
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
                            'ward-19100058',
                            'Economics:',
                            'Median individual income: R19200',
                            'Home internet access: 86.96%',
                            'Work in formal sector: 84.34%',
                            'Work in informal sector: 4.74%',
                            'Discouraged work seeker: 0.44%',
                            'Employed: 65.03%',
                            'Not economically active: 31.82%',
                            'Unemployed: 2.71%',
                            '1. SMS details',
                            '2. Query another section',
                            '3. Exit'
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
                            'ward-19100058',
                            'Education:',
                            'None: 0.27%',
                            'Primary: 0.57%',
                            'Some secondary: 7.05%',
                            'Grade 12 (Matric): 33.7%',
                            'Undergrad: 23.57%',
                            'Post-grad: 24.53%', 
                            '1. SMS details',
                            '2. Query another section',
                            '3. Exit'
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
                            'ward-19100058',
                            'Children:',
                            'Child population: 5765',
                            'Children (<18): 20.14%',
                            'Female (44.13%) Male (55.87%)',
                            '<14 with no living biological parents: 9.07%',
                            'Ages 5-17 in school: 85.99%',
                            'Ages 15-17 in labour force: 6.76%',
                            'Ave monthly income of employed: R0',
                            '1. SMS details',
                            '2. Query another section',
                            '3. Exit'
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
                            'ward-19100058',
                            'Child-headed Households:',
                            'Total households: 9',
                            'In informal dwellings: 0%',
                            'Women as head: 33.33%',
                            'Ave annual household income: R0',
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
