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
    var Q = require("q");

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
                    new Choice ('states:provincial-data', 'Query provincial data'),
                    new Choice('states:end', 'Exit')],

                next: function(choice) {
                   return choice.value;
                }
            });
        });

        self.states.add('states:location', function(name) {
            return new FreeText(name, {
                question: 'Please enter a location in South Africa to query:',
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

        self.states.add('states:display-data', function(name, opts) {
            var section_data = opts.opts_data[opts.section_id]; 
            var return_text = sub_section(section_data, opts.section_id);
            
            return new ChoiceState(name, {
                question: 'You have chosen to query ' + opts.section_name + ' in ' + capitaliseLocation(opts.location_input),

                choices: [
                    new Choice('states:location-sms', 'SMS details to me'),
                    new Choice('states:retrieve-location', 'Query another section'),
                    new Choice('states:start', 'Main Menu'),
                    new Choice('states:end', 'Exit')],

                next: function(choice) {
                    if (choice.value == 'states:start' || choice.value == 'states:end') {
                        return choice.value;
                    } else if (choice.value == 'states:retrieve-location'){
                        return {
                            name: choice.value,
                            creator_opts: {
                                full_geoid : opts.location_id,
                                full_name: opts.location_name,
                                location_input : opts.location_input
                            }
                        };
                    } else if (choice.value == "states:location-sms") {
                        return {
                            name: choice.value,
                            creator_opts: {
                                location_input: opts.location_input,
                                return_text : return_text,
                                section_name : opts.section_name,
                            }
                        };
                    }
                }
            });
        });

        self.states.add('states:provincial-data', function(name) {
            return new PaginatedChoiceState(name, {
                question: 'Provincial Data on:',
                choices: [
                    new Choice('demographics', 'Population'),
                    new Choice('elections', 'Provincial Voting Results'),
                    new Choice('elections', 'National Voting Results'),
                    new Choice('economics', '% Employed'),
                    new Choice('education', 'Education (Matric)'),
                    new Choice('demographics', 'Most Spoken Language'),
                    new Choice('demographics', 'RSA Citizenship'),
                    new Choice('service_delivery', 'Water Access'),
                    new Choice('service_delivery', 'Electricity Access'),
                    new Choice('service_delivery', 'Flush/Chemical Toilet Access'),
                    new Choice('economics', 'Household Internet Access'),
                    new Choice('economics', 'Average Monthly Individual Income'),
                    new Choice('households', 'Average Annual Household Income'),
                    new Choice('households', 'Woman Head of Household'),
                    new Choice('child_households', 'Total Child-headed Households'),
                    new Choice('households', '% Informal Dwellings')
                ],
                options_per_page : null,
                more: 'More',
                back: 'Back',
                next: function(choice) {
                    return {
                        name: 'states:display-province-data',
                        creator_opts : {
                            section_name : choice.label,
                            section_id : choice.value,
                        }
                    };
                }
            });
        });

        self.states.add('states:display-province-data', function(name, opts) {
            return new ChoiceState(name, {
                question: 'You have chosen to query provincial data on ' + opts.section_name,

                choices: [
                    new Choice('states:provincial-sms', 'SMS details to me'),
                    new Choice('states:provincial-data', 'Query another section'),
                    new Choice('states:start', 'Main Menu'),                        
                    new Choice('states:end', 'Exit')],

                next: function(choice) {
                    if (choice.value == 'states:start' || choice.value == 'states:end' || choice.value == 'states:provincial-data') {
                        return choice.value;
                    } else if (choice.value == "states:provincial-sms") {
                        return {
                            name: choice.value,
                            creator_opts: {
                                section_name : opts.section_name,
                                section_id : opts.section_id,
                            }
                        };
                    }
                }
            });
        });

        self.states.add('states:provincial-sms', function(name, opts) {
            return getProvinceData(opts.section_id, opts.section_name)
            .then(function(prov_result) {
                return self.im
                    .outbound.send_to_user({
                        endpoint: 'sms',
                        content: [
                            opts.section_name + ":",
                            prov_result,
                            'Wazimap USSD: *120*8864*1601#',
                            'www.wazimap.co.za'
                        ].join('\n'),
                    })
            .then(function() {
                return self.states.create(
                    'states:end');
            });
            });
        });

        self.states.add('states:location-sms', function(name, opts) {
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

        self.states.add('states:end', function(name) {
            return new EndState(name, {
                text: 'Thank you for using Wazimap! Find more information on www.wazimap.co.za',
                next: 'states:start'
            });
        });

//function for capitalising location names

        function capitaliseLocation(string) {
            return string.replace(/\w\S*/g, function(s){
                return s.charAt(0).toUpperCase() + s.substr(1).toLowerCase();
            });
        }

//functions for accessing data per sub-section

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
                "RSA Citizens: " + data.citizenship_south_african.values.this + "%",
                "Female (" + data.sex_ratio.Female.values.this + "%) Male (" + data.sex_ratio.Male.values.this + "%)",
                "Black African (" + data.population_group_distribution['Black African'].values.this + "%) Coloured (" + data.population_group_distribution.Coloured.values.this + "%) Indian/Asian (" + data.population_group_distribution['Indian or Asian'].values.this + "%) White (" + data.population_group_distribution.White.values.this + "%)", 
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
                "Water Access: " + data.percentage_water_from_service_provider.values.this + "%",
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

//function for getting provincial results

        function getHttp(province_code, section_id) {
            return self
                .http.get('http://wazimap.co.za/profiles/' + province_code + '.json')
                .then(function(response) {
                    return response.data[section_id];
                });
        }

//function for looping through provinces to return section data

        function getProvinceData(section_id, section_name) {
            var province_codes = ['province-GT', 'province-MP', 'province-LIM', 'province-NW', 'province-KZN', 'province-FS', 'province-EC', 'province-NC', 'province-WC'];
            var provinces = ['Gauteng', 'Mpumalanga', 'Limpopo', 'North-West', 'Kwazulu-Natal', 'Free State', 'Eastern Cape', 'Northern Cape', 'Western Cape'];
            
            var requests = _.map(province_codes, function(code) {
                return getHttp(code, section_id);
            });

            return Q.all(requests)
                .then(function (results) {
                    var texts = _.map(results, function(result, i) {
                        section_text = provincial_section(result, section_id, section_name);
                        return provinces[i] + ": " + section_text;
                    });
                    return texts.join("\n");
                });
        }

//functions for fetching specific section data

        function provincial_section(data, section_id, section_name) {
            return provincial_section[section_id](data, section_name);
        }

        provincial_section.demographics = function(data, section_name) {
            if (section_name === 'Population') {
                return data.total_population.values.this;
            }
            else if (section_name === 'Most Spoken Language') {
                return data.language_most_spoken.name;
            }
            else if (section_name === 'RSA Citizenship') {
                return data.citizenship_south_african.values.this + "%";
            }
        };
        
        provincial_section.elections = function(data, section_name) {
            if (section_name === 'Provincial Voting Results') {
                var provincial_parties =_(data.provincial_2014.party_distribution)
                .omit('metadata')
                .sortBy(function(o) { return -o.values.this; })
                .slice(0, 1)
                .value();
                var provincial_party_results = _.map(provincial_parties, function(s) {
                    return (" " + s.name + " " + s.values.this + "%").toString();
                });
                return provincial_party_results;
            } else if (section_name === 'National Voting Results') {
                var national_parties =_(data.national_2014.party_distribution)
                .omit('metadata')
                .sortBy(function(o) { return -o.values.this; })
                .slice(0, 1)
                .value();
                var national_party_results = _.map(national_parties, function(s) {
                    return (" " + s.name + " " + s.values.this + "%").toString();
                });
                return national_party_results; 
            } 
        };

        provincial_section.economics = function(data, section_name) {
            if (section_name === '% Employed') {
                return data.employment_status.Employed.values.this + "%";
            } else if (section_name === 'Household Internet Access') {
                return data.internet_access.values.this + "%";
            } else if (section_name === 'Average Monthly Individual Income') {
                return "R" + data.median_individual_income.values.this;
            }
        };

        provincial_section.education = function(data, section_name) {
            return data.educational_attainment_distribution['Grade 12 (Matric)'].values.this + "%";
        };

        provincial_section.service_delivery = function(data, section_name) {
            if (section_name === 'Water Access') {
                return data.percentage_water_from_service_provider.values.this + "%";
            } else if (section_name === "Electricity Access") {
                return data.percentage_electricity_access.values.this + "%";
            } else if (section_name === "Flush/Chemical Toilet Access") {
                return data.percentage_flush_toilet_access.values.this + "%";
            }
        };

        provincial_section.households = function(data, section_name) {
            if (section_name === 'Average Annual Household Income') {
                return "R" + data.median_annual_income.values.this; 
            } else if (section_name === 'Woman Head of Household') {
                return  data.head_of_household.female.values.this + "%";
            } else if (section_name === '% Informal Dwellings') {
                return data.informal.values.this + "%";
            }
        };

        provincial_section.child_households = function(data, section_name) {
            return data.total_households.values.this;
        };  
    });

    return {
        GoApp: GoApp
    };
}();
