go.app = function() {
    var vumigo = require('vumigo_v02');
    var App = vumigo.App;
    var Choice = vumigo.states.Choice;
    var ChoiceState = vumigo.states.ChoiceState;
    var EndState = vumigo.states.EndState;
    var FreeText = vumigo.states.FreeText;
    var JsonApi = vumigo.http.api.JsonApi;
    var PaginatedChoiceState = vumigo.states.PaginatedChoiceState;
    var _ = require("lodash");

    var GoApp = App.extend(function(self) {
        App.call(self, 'states:start');

        self.init = function() {            
            self.http = new JsonApi(self.im);       
        };

        function capitaliseLocation(string) {
            return string.replace(/\w\S*/g, function(s){
                return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
            });
        }
        
        self.states.add('states:start', function(name) {
            return new ChoiceState(name, {
                question: 'Welcome to Wazimap! What would you like to do?',
        
                choices: [
                    new Choice('states:location', 'Enter a location to query'),
                    new Choice ('states:provincial-data', 'Query Provincial Data'),
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
                        if (response.data.results.length === 0) {
                            return 'states:incorrect_location';
                        } else {
                            return {
                                name: 'states:results',
                                creator_opts: {
                                    locations: response.data.results,
                                    location_input: content
                                } 
                            };
                        }
                    }); 
                }   
            });
        });

        self.states.add('states:incorrect_location', function(name) {
            return new ChoiceState(name, {
                question: 'Location not found. Would you like to:',

                choices: [
                    new Choice('states:location', 'Enter a different location'),
                    new Choice('states:start', 'Go to Main Menu'),
                    new Choice('states:end', 'Exit')],

                next: function(choice) {
                    return choice.value;
                }   
            });
        });      

        self.states.add('states:results', function(name, opts) {
            var location_choices = _.map(opts.locations, function(d) {
                return new Choice(d.full_geoid, d.full_name);
            });

            return new PaginatedChoiceState(name, {
                question: 'Select the location you would like to query:',
                choices: location_choices,                             
                characters_per_page: 160,
                options_per_page : null,
                more: 'Next',
                back: 'Back',
                next: function(choice) {
                    return { 
                        name: 'states:retrieve-location',
                        creator_opts : {
                            full_geoid : choice.value,
                            full_name : choice.label,
                            location_input: opts.location_input
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
                        'states:select-section', opts, opts.location_input);
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
                            location_name : opts.full_name,
                            location_id : opts.full_geoid,
                            location_input: opts.location_input
                        }
                    };
                }
            });
        });

        function sub_section(data, section_id) {
            return sub_section[section_id](data);
        }

        sub_section.elections = function(data) {
            var provincial_parties =_(data.provincial_2014.party_distribution)
              .omit('metadata')
              .sortBy(function(o) { return -o.values.this; })
              .slice(0, 3)
              .value();

            var provincial_party_results = _.map(provincial_parties, function(s) {
                return (" " + s.name + " " + s.values.this + "%").toString();
            });

            var national_parties =_(data.national_2014.party_distribution)
              .omit('metadata')
              .sortBy(function(o) { return -o.values.this; })
              .slice(0, 3)
              .value();

            var national_party_results = _.map(national_parties, function(s) {
                return (" " + s.name + " " + s.values.this + "%").toString();
            });  
                     
            return [ 
                data.provincial_2014.name + ":",
                "Registered voters = " + data.provincial_2014.registered_voters.values.this, 
                data.provincial_2014.average_turnout.values.this + "% cast their vote",
                "Results:" + provincial_party_results,
                data.national_2014.name + ":",
                "Registered voters = " + data.national_2014.registered_voters.values.this, 
                data.national_2014.average_turnout.values.this + "% cast their vote",
                "Results:" + national_party_results 
            ].join("\n");
        };

        sub_section.demographics = function(data) {
            return [
                "Area population: " + data.total_population.values.this,
                "People/square km: " + data.population_density.values.this,
                "RSA Citizens: " + data.citizenship_south_african.values.this + "%",
                "Female (" + data.sex_ratio.Female.values.this + "%) Male (" + data.sex_ratio.Male.values.this + "%)",
                "Black African (" + data.population_group_distribution['Black African'].values.this + "%) Coloured (" + data.population_group_distribution.Coloured.values.this + "%) Indian/Asian (" + data.population_group_distribution['Indian or Asian'].values.this + "%) White (" + data.population_group_distribution.White.values.this + "%)", 
                //"Most spoken language: " + data.language_most_spoken.name,
                "Afrikaans (" + data.language_distribution.Afrikaans.values.this + "%) English (" + data.language_distribution.English.values.this + "%) IsiXhosa (" + data.language_distribution.IsiXhosa.values.this + "%) IsiZulu (" + data.language_distribution.IsiZulu.values.this + "%)",
                "Age: <18 (" + data.age_category_distribution['Under 18'].values.this + "%) 18-64 (" + data.age_category_distribution["18 to 64"].values.this + "%) 65+ (" + data.age_category_distribution["65 and over"].values.this + "%)",
                "Born in RSA: " + data.born_in_south_africa.values.this + "%"
            ].join("\n");
        };

        sub_section.households = function(data) {
            return [
                "Informal Dwellings: " + data.informal.values.this + "%",
                "Owned and paid off: " + data.tenure_distribution["Owned and fully paid off"].values.this + "%",
                "Rented: " + data.tenure_distribution.Rented.values.this + "%",
                "Median Annual Income: R" + data.median_annual_income.values.this,
                "Total Households: " + data.total_households.values.this,
                "Head of Household: <18 (" + data.head_of_household.under_18.values.this + "%) Female (" + data.head_of_household.female.values.this + "%)",
                "Own car: " + data.household_goods.Car.values.this + "%"
            ].join("\n");
        };

        sub_section.service_delivery = function(data) {
            return [
                "Flush toilet access: " + data.percentage_flush_toilet_access.values.this + "%",
                "Electricity access: " + data.percentage_electricity_access.values.this + "%",
                "Refuse disposal: " + data.percentage_ref_disp_from_service_provider.values.this + "%"
            ].join("\n");
        };

        sub_section.economics = function(data) {
            return [
                "Median individual income: R" + data.median_individual_income.values.this,
                "Home internet access: " + data.internet_access.values.this + "%",
                "Work in formal sector: " + data.sector_type_distribution["In the formal sector"].values.this + "%",
                "Work in informal sector: " + data.sector_type_distribution["In the informal sector"].values.this + "%",
                "Discouraged work seeker: " + data.employment_status["Discouraged work-seeker"].values.this + "%",
                "Employed: " + data.employment_status.Employed.values.this + "%",
                "Not economically active: " + data.employment_status["Other not economically active"].values.this + "%",
                "Unemployed: " + data.employment_status.Unemployed.values.this + "%"
            ].join("\n");
        };

        sub_section.education = function(data) {
            return [
                "None: " + data.educational_attainment_distribution.None.values.this + "%",
                "Primary: " + data.educational_attainment_distribution.Primary.values.this + "%",
                "Some secondary: " + data.educational_attainment_distribution['Some secondary'].values.this + "%",
                "Grade 12 (Matric): " + data.educational_attainment_distribution['Grade 12 (Matric)'].values.this + "%",
                "Undergrad: " + data.educational_attainment_distribution.Undergrad.values.this + "%",
                "Post-grad: " + data.educational_attainment_distribution['Post-grad'].values.this + "%"
            ].join("\n");
        };

        sub_section.children = function(data) {
            return [
                "Child population: " + data.demographics.total_children.values.this,
                "Children (<18): " + data.demographics.child_adult_distribution['Children (< 18)'].values.this + "%",
                "Female (" + data.demographics.gender_distribution.Female.values.this + "%) Male (" + data.demographics.gender_distribution.Male.values.this + "%)",
                "<14 with no living biological parents: " + data.demographics.percent_no_parent.values.this + "%",
                "Ages 5-17 in school: " + data.school.percent_school_attendance.values.this + "%",
                "Ages 15-17 in labour force: " + data.employment.percent_in_labour_force.values.this + "%",
                "Ave monthly income of employed: R" + data.employment.median_income.values.this
            ].join("\n");
        };

        sub_section.child_households = function(data) {
            return [
                "Total households: " + data.total_households.values.this,
                "In informal dwellings: " + data.informal.values.this + "%",
                "Women as head: " + data.head_of_household.female.values.this + "%",
                "Ave annual household income: R" + data.median_annual_income.values.this
            ].join("\n");
        };

        self.states.add('states:display-data', function(name, opts) {
            var section_data = opts.opts_data[opts.section_id]; 
            var return_text = sub_section(section_data, opts.section_id);
            
            return new ChoiceState(name, {
                question: 'You have chosen to query ' + opts.section_name + ' in ' + capitaliseLocation(opts.location_input),

                choices: [
                    new Choice('states:sms', 'SMS details to me'),
                    new Choice('states:select-section', 'Query another section'),
                    new Choice('states:start', 'Main Menu'),
                    new Choice('states:end', 'Exit')],

                next: function(choice) {
                    if (choice.value == 'states:start' || choice.value == 'states:end') {
                        return choice.value;
                    } else if (choice.value == 'states:select-section'){
                        return {
                            name: choice.value,
                            creator_opts: {
                                section_id : opts.section_id,
                                section_data : section_data
                            }
                        };
                    } else if (choice.value == "states:sms") {
                        return {
                            name: choice.value,
                            creator_opts: {
                                location_input: opts.location_input,
                                return_text : return_text,
                                section_name : opts.section_name,
                                location_id : opts.location_id 
                            }
                        };
                    }
                }
            });
        });

        self.states.add('states:sms', function(name, opts) {
            return self.im
                .outbound.send_to_user({
                endpoint: 'sms',
                content: [
                    capitaliseLocation(opts.location_input) + " " + opts.section_name + ":",
                    opts.return_text,
                    'Wazimap USSD: *120*8864*1601#',
                    'www.wazimap.co.za'
                ].join('\n'),
            })
            .then(function() {
                return self.states.create(
                    'states:end');
            });
        });

        self.states.add('states:provincial-data', function(name) {
            return new PaginatedChoiceState(name, {
                question: 'Provincial Data on:',
                choices: [
                    new Choice('population', 'Population'),
                    new Choice('p_voting_results', 'Provincial Voting Results'),
                    new Choice('n_voting_results', 'National Voting Results'),
                    new Choice('employed', '% Employed'),
                    new Choice('education', 'Education'),
                    new Choice('language', 'Most Spoken Language'),
                    new Choice('services', 'Water, Toilet Access and Electricity'),
                    new Choice('house_income', 'Annual Household Income'),
                ],
                options_per_page : null,
                more: 'More',
                back: 'Back',
                next: function(choice) {
                    return {
                        name: 'states:display-province-data',
                        creator_opts : {
                            section_name : choice.label,
                        }
                    };
                }
            });
        });

        self.states.add('states:display-province-data', function(name, opts) {
            return new ChoiceState(name, {
                question: 'You have chosen to query provincial data on ' + opts.section_name,

                choices: [
                    new Choice('states:sms', 'SMS details to me'),
                    new Choice('states:provincial-data', 'Query another section'),
                    new Choice('states:start', 'Main Menu'),                        new Choice('states:end', 'Exit')],

                next: function(choice) {
                    if (choice.value == 'states:start' || choice.value == 'states:end') {
                        return choice.value;
                    } else if (choice.value == 'states:provincial-data'){
                        return {
                            name: choice.value,
                            creator_opts: {
                                section_id : opts.section_id,
                                section_data : section_data
                            }
                        };
                    } else if (choice.value == "states:provincial-sms") {
                        return {
                            name: choice.value,
                            creator_opts: {
                                section_name : opts.section_name,
                            }
                        };
                    }
                }
            });
        });

        self.states.add('states:provincial-sms', function(name, opts) {
            return self.im
                .outbound.send_to_user({
                endpoint: 'sms',
                content: [
                    opts.section_name + ":",
                    'Wazimap USSD: *120*8864*1601#',
                    'www.wazimap.co.za'
                ].join('\n'),
            })
            .then(function() {
                return self.states.create(
                    'states:end');
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
