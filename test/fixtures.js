module.exports = function() {
    return [{
        "request": {
            "method": "GET",
            "url": "http://wazimap.co.za/place-search/json/",
            "params": {
                "q": "Claremont"
            }
        },
        "response": {
            "code": 200,
            "data": {
                "results": [
            {
                "geo_code": "19100058", 
                "full_name": "Ward 58 (19100058), City of Cape Town, Western Cape", 
                "full_geoid": "ward-19100058", 
                "geo_level": "ward"
            }, 
            {
                "geo_code": "52502007", 
                "full_name": "Ward 7 (52502007), Newcastle, KwaZulu-Natal", 
                "full_geoid": "ward-52502007", 
                "geo_level": "ward"
            }, 
            {
                "geo_code": "79800082", 
                "full_name": "Ward 82 (79800082), City of Johannesburg, Gauteng", 
                "full_geoid": "ward-79800082", 
                "geo_level": "ward"
            }, 
            {
                "geo_code": "79900055", 
                "full_name": "Ward 55 (79900055), City of Tshwane, Gauteng", 
                "full_geoid": "ward-79900055", 
                "geo_level": "ward"
            }]}
        }
    },
    {
        "request" : {
            "method": "GET",
            "url": "http://wazimap.co.za/profiles/ward-19100058.json"
        },
        "response": {
            "code": 300,
            "data": {
            "elections": {
            "provincial_2014": {
              "registered_voters": {
                "error_ratio": {
                  "this": null,
                  "province": null,
                  "country": null
                },
                "values": {
                  "this": 19234,
                  "province": 2941333,
                  "country": 25381293
                },
                "index": {
                  "this": 100,
                  "province": 1,
                  "country": null
                },
                "error": {
                  "this": 0,
                  "province": 0,
                  "country": 0
                },
                "name": "Number of registered voters",
                "numerator_errors": {
                  "this": 0,
                  "province": 0,
                  "country": 0
                },
                "numerators": {
                  "this": 0,
                  "province": 0,
                  "country": 0
                }
              },
              "party_distribution": {
                "DA": {
                  "name": "DA",
                  "numerators": {
                    "this": 12620,
                    "province": 1259645,
                    "country": 4089215
                  },
                  "values": {
                    "this": 89.54,
                    "province": 59.38,
                    "country": 23.03
                  },
                  "index": {
                    "this": 100,
                    "province": 151,
                    "country": 389
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "ANC": {
                  "name": "ANC",
                  "numerators": {
                    "this": 807,
                    "province": 697664,
                    "country": 10958634
                  },
                  "values": {
                    "this": 5.73,
                    "province": 32.89,
                    "country": 61.71
                  },
                  "index": {
                    "this": 100,
                    "province": 17,
                    "country": 9
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "AGANG": {
                  "name": "AGANG",
                  "numerators": {
                    "this": 158,
                    "province": 6398,
                    "country": 40731
                  },
                  "values": {
                    "this": 1.12,
                    "province": 0.3,
                    "country": 0.23
                  },
                  "index": {
                    "this": 100,
                    "province": 373,
                    "country": 487
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "ACDP": {
                  "name": "ACDP",
                  "numerators": {
                    "this": 134,
                    "province": 21696,
                    "country": 98597
                  },
                  "values": {
                    "this": 0.95,
                    "province": 1.02,
                    "country": 0.56
                  },
                  "index": {
                    "this": 100,
                    "province": 93,
                    "country": 170
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "EFF": {
                  "name": "EFF",
                  "numerators": {
                    "this": 112,
                    "province": 44762,
                    "country": 1130640
                  },
                  "values": {
                    "this": 0.79,
                    "province": 2.11,
                    "country": 6.37
                  },
                  "index": {
                    "this": 100,
                    "province": 37,
                    "country": 12
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "AJ": {
                  "name": "AJ",
                  "numerators": {
                    "this": 68,
                    "province": 13182,
                    "country": 13182
                  },
                  "values": {
                    "this": 0.48,
                    "province": 0.62,
                    "country": 0.07
                  },
                  "index": {
                    "this": 100,
                    "province": 77,
                    "country": 686
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "UDM": {
                  "name": "UDM",
                  "numerators": {
                    "this": 68,
                    "province": 10199,
                    "country": 188326
                  },
                  "values": {
                    "this": 0.48,
                    "province": 0.48,
                    "country": 1.06
                  },
                  "index": {
                    "this": 100,
                    "province": 100,
                    "country": 45
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "COPE": {
                  "name": "COPE",
                  "numerators": {
                    "this": 39,
                    "province": 12520,
                    "country": 123552
                  },
                  "values": {
                    "this": 0.28,
                    "province": 0.59,
                    "country": 0.7
                  },
                  "index": {
                    "this": 100,
                    "province": 47,
                    "country": 40
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "metadata": {
                  "universe": "Votes",
                  "year": "2014",
                  "table_id": "PARTY_VOTES_PROVINCIAL_2014"
                },
                "Other": {
                  "error_ratio": {
                    "this": null
                  },
                  "values": {
                    "this": 0.62,
                    "province": 2.6,
                    "country": 6.28
                  },
                  "index": {
                    "this": 100,
                    "province": 24,
                    "country": 10
                  },
                  "error": {
                    "this": 0
                  },
                  "name": "Other",
                  "numerator_errors": {
                    "this": 0
                  },
                  "numerators": {
                    "this": 88,
                    "province": 55087,
                    "country": 1115764
                  }
                }
              },
              "average_turnout": {
                "error_ratio": {
                  "this": null,
                  "province": null,
                  "country": null
                },
                "values": {
                  "this": 73.59,
                  "province": 72.76,
                  "country": 71.18
                },
                "index": {
                  "this": 100,
                  "province": 101,
                  "country": 103
                },
                "error": {
                  "this": 0,
                  "province": 0,
                  "country": 0
                },
                "name": "Of registered voters cast their vote",
                "numerator_errors": {
                  "this": 0,
                  "province": 0,
                  "country": 0
                },
                "numerators": {
                  "this": 14154,
                  "province": 2140090,
                  "country": 18066575
                }
              },
              "name": "Provincial 2014"
            },
            "national_2014": {
              "registered_voters": {
                "error_ratio": {
                  "this": null,
                  "province": null,
                  "country": null
                },
                "values": {
                  "this": 19234,
                  "province": 2941333,
                  "country": 25388082
                },
                "index": {
                  "this": 100,
                  "province": 1,
                  "country": null
                },
                "error": {
                  "this": 0,
                  "province": 0,
                  "country": 0
                },
                "name": "Number of registered voters",
                "numerator_errors": {
                  "this": 0,
                  "province": 0,
                  "country": 0
                },
                "numerators": {
                  "this": 0,
                  "province": 0,
                  "country": 0
                }
              },
              "party_distribution": {
                "DA": {
                  "name": "DA",
                  "numerators": {
                    "this": 12265,
                    "province": 1241424,
                    "country": 4091584
                  },
                  "values": {
                    "this": 85.22,
                    "province": 57.26,
                    "country": 22.23
                  },
                  "index": {
                    "this": 100,
                    "province": 149,
                    "country": 383
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "ANC": {
                  "name": "ANC",
                  "numerators": {
                    "this": 832,
                    "province": 737219,
                    "country": 11436921
                  },
                  "values": {
                    "this": 5.78,
                    "province": 34,
                    "country": 62.15
                  },
                  "index": {
                    "this": 100,
                    "province": 17,
                    "country": 9
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "AGANG": {
                  "name": "AGANG",
                  "numerators": {
                    "this": 399,
                    "province": 9927,
                    "country": 52350
                  },
                  "values": {
                    "this": 2.77,
                    "province": 0.46,
                    "country": 0.28
                  },
                  "index": {
                    "this": 100,
                    "province": 602,
                    "country": 989
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "ACDP": {
                  "name": "ACDP",
                  "numerators": {
                    "this": 208,
                    "province": 25318,
                    "country": 104039
                  },
                  "values": {
                    "this": 1.45,
                    "province": 1.17,
                    "country": 0.57
                  },
                  "index": {
                    "this": 100,
                    "province": 124,
                    "country": 254
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "UDM": {
                  "name": "UDM",
                  "numerators": {
                    "this": 153,
                    "province": 13052,
                    "country": 184636
                  },
                  "values": {
                    "this": 1.06,
                    "province": 0.6,
                    "country": 1
                  },
                  "index": {
                    "this": 100,
                    "province": 177,
                    "country": 106
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "EFF": {
                  "name": "EFF",
                  "numerators": {
                    "this": 153,
                    "province": 50280,
                    "country": 1169259
                  },
                  "values": {
                    "this": 1.06,
                    "province": 2.32,
                    "country": 6.35
                  },
                  "index": {
                    "this": 100,
                    "province": 46,
                    "country": 17
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "UP": {
                  "name": "UP",
                  "numerators": {
                    "this": 98,
                    "province": 2211,
                    "country": 8234
                  },
                  "values": {
                    "this": 0.68,
                    "province": 0.1,
                    "country": 0.04
                  },
                  "index": {
                    "this": 100,
                    "province": 680,
                    "country": 1700
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "COPE": {
                  "name": "COPE",
                  "numerators": {
                    "this": 62,
                    "province": 13833,
                    "country": 123235
                  },
                  "values": {
                    "this": 0.43,
                    "province": 0.64,
                    "country": 0.67
                  },
                  "index": {
                    "this": 100,
                    "province": 67,
                    "country": 64
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  }
                },
                "metadata": {
                  "universe": "Votes",
                  "year": "2014",
                  "table_id": "PARTY_VOTES_NATIONAL_2014"
                },
                "Other": {
                  "error_ratio": {
                    "this": null
                  },
                  "values": {
                    "this": 1.55,
                    "province": 3.45,
                    "country": 6.7
                  },
                  "index": {
                    "this": 100,
                    "province": 45,
                    "country": 23
                  },
                  "error": {
                    "this": 0
                  },
                  "name": "Other",
                  "numerator_errors": {
                    "this": 0
                  },
                  "numerators": {
                    "this": 223,
                    "province": 74883,
                    "country": 1232239
                  }
                }
              },
              "average_turnout": {
                "error_ratio": {
                  "this": null,
                  "province": null,
                  "country": null
                },
                "values": {
                  "this": 75.2,
                  "province": 74.4,
                  "country": 73.48
                },
                "index": {
                  "this": 100,
                  "province": 101,
                  "country": 102
                },
                "error": {
                  "this": 0,
                  "province": 0,
                  "country": 0
                },
                "name": "Of registered voters cast their vote",
                "numerator_errors": {
                  "this": 0,
                  "province": 0,
                  "country": 0
                },
                "numerators": {
                  "this": 14464,
                  "province": 2188236,
                  "country": 18654771
                }
              },
              "name": "National 2014"
                }
            }
        }
    }
    }];
};
