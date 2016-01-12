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
