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
        "request": {
            "method": "GET",
            "url": "http://wazimap.co.za/place-search/json/",
            "params": {
                "q": "Claremnt"
            }
        },
        "response": {
            "code": 200,
            "data": {
                "results": []
            }
        }
    },
    {
        "request" : {
            "method": "GET",
            "url": "http://wazimap.co.za/profiles/ward-19100058.json"
        },
        "response": {
            "code": 200,
            "data": {
           
              "education": {
                "educational_attainment": {
                  "percent_fet_or_higher": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 81.82,
                      "province": 40.79,
                      "country": 39.34
                    },
                    "index": {
                      "this": 100,
                      "province": 201,
                      "country": 208
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Completed Matric or higher",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 18033,
                      "province": 1582041,
                      "country": 12458733
                    }
                  },
                  "metadata": {
                    "universe": "Invididuals aged 20 and older"
                  },
                  "percent_get_or_higher": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 87.94,
                      "province": 69.5,
                      "country": 65.83
                    },
                    "index": {
                      "this": 100,
                      "province": 127,
                      "country": 134
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Completed Grade 9 or higher",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 19383,
                      "province": 2695770,
                      "country": 20846058
                    }
                  }
                },
                "educational_attainment_distribution": {
                  "None": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 0.27,
                      "province": 2.64,
                      "country": 8.42
                    },
                    "index": {
                      "this": 100,
                      "province": 10,
                      "country": 3
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "None",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 60,
                      "province": 102243,
                      "country": 2665875
                    }
                  },
                  "Other": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 1.21,
                      "province": 0.47,
                      "country": 0.36
                    },
                    "index": {
                      "this": 100,
                      "province": 257,
                      "country": 336
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Other",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 267,
                      "province": 18303,
                      "country": 113586
                    }
                  },
                  "Some primary": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 0.98,
                      "province": 10.35,
                      "country": 11.97
                    },
                    "index": {
                      "this": 100,
                      "province": 9,
                      "country": 8
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Some primary",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 216,
                      "province": 401361,
                      "country": 3790137
                    }
                  },
                  "Primary": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 0.57,
                      "province": 5.38,
                      "country": 4.46
                    },
                    "index": {
                      "this": 100,
                      "province": 11,
                      "country": 13
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Primary",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 126,
                      "province": 208800,
                      "country": 1413894
                    }
                  },
                  "Some secondary": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 7.05,
                      "province": 36.89,
                      "country": 33.1
                    },
                    "index": {
                      "this": 100,
                      "province": 19,
                      "country": 21
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Some secondary",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 1554,
                      "province": 1430913,
                      "country": 10481580
                    }
                  },
                  "Grade 12 (Matric)": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 33.7,
                      "province": 31.53,
                      "country": 32.19
                    },
                    "index": {
                      "this": 100,
                      "province": 107,
                      "country": 105
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Grade 12 (Matric)",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 7428,
                      "province": 1222833,
                      "country": 10193388
                    }
                  },
                  "Undergrad": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 23.57,
                      "province": 5.71,
                      "country": 4.49
                    },
                    "index": {
                      "this": 100,
                      "province": 413,
                      "country": 525
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Undergrad",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 5196,
                      "province": 221631,
                      "country": 1423179
                    }
                  },
                  "Post-grad": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 24.53,
                      "province": 3.48,
                      "country": 2.53
                    },
                    "index": {
                      "this": 100,
                      "province": 705,
                      "country": 970
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Post-grad",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 5406,
                      "province": 134913,
                      "country": 801450
                    }
                  },
                  "N/A": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 8.11,
                      "province": 3.55,
                      "country": 2.48
                    },
                    "index": {
                      "this": 100,
                      "province": 228,
                      "country": 327
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "N/A",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 1788,
                      "province": 137817,
                      "country": 783912
                    }
                  },
                  "metadata": {
                    "universe": "Individuals 20 and older",
                    "year": "2011",
                    "table_id": "HIGHESTEDUCATIONALLEVEL20ANDOLDER"
                  }
                }
              },
              "households": {
                "informal": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 0.28,
                    "province": 18.17,
                    "country": 13.58
                  },
                  "index": {
                    "this": 100,
                    "province": 2,
                    "country": 2
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Households that are informal dwellings (shacks)",
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "numerators": {
                    "this": 30,
                    "province": 296949,
                    "country": 1962732
                  }
                },
                "tenure_distribution": {
                  "Occupied rent-free": {
                    "name": "Occupied rent-free",
                    "numerators": {
                      "this": 178,
                      "province": 248679,
                      "country": 2682392
                    },
                    "values": {
                      "this": 1.64,
                      "province": 15.22,
                      "country": 18.56
                    },
                    "index": {
                      "this": 100,
                      "province": 11,
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
                  "Other": {
                    "name": "Other",
                    "numerators": {
                      "this": 126,
                      "province": 56623,
                      "country": 485208
                    },
                    "values": {
                      "this": 1.16,
                      "province": 3.47,
                      "country": 3.36
                    },
                    "index": {
                      "this": 100,
                      "province": 33,
                      "country": 35
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
                  "Owned and fully paid off": {
                    "name": "Owned and fully paid off",
                    "numerators": {
                      "this": 3219,
                      "province": 576368,
                      "country": 5970872
                    },
                    "values": {
                      "this": 29.66,
                      "province": 35.27,
                      "country": 41.32
                    },
                    "index": {
                      "this": 100,
                      "province": 84,
                      "country": 72
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
                  "Owned but not yet paid off": {
                    "name": "Owned but not yet paid off",
                    "numerators": {
                      "this": 3483,
                      "province": 280413,
                      "country": 1701467
                    },
                    "values": {
                      "this": 32.09,
                      "province": 17.16,
                      "country": 11.77
                    },
                    "index": {
                      "this": 100,
                      "province": 187,
                      "country": 273
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
                  "Rented": {
                    "name": "Rented",
                    "numerators": {
                      "this": 3848,
                      "province": 471917,
                      "country": 3610222
                    },
                    "values": {
                      "this": 35.45,
                      "province": 28.88,
                      "country": 24.98
                    },
                    "index": {
                      "this": 100,
                      "province": 123,
                      "country": 142
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
                    "universe": "Households",
                    "year": "2011",
                    "table_id": "TENURESTATUS"
                  }
                },
                "median_annual_income": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 230700,
                    "province": 57300,
                    "country": 29400
                  },
                  "index": {
                    "this": 100,
                    "province": 403,
                    "country": 785
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Average annual household income",
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
                "total_households": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 10854,
                    "province": 1633998,
                    "country": 14450132
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
                  "name": "Households",
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
                "type_of_dwelling_distribution": {
                  "House": {
                    "name": "House",
                    "numerators": {
                      "this": 6390,
                      "province": 1021164,
                      "country": 9384030
                    },
                    "values": {
                      "this": 58.87,
                      "province": 62.49,
                      "country": 64.94
                    },
                    "index": {
                      "this": 100,
                      "province": 94,
                      "country": 91
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
                  "Apartment": {
                    "name": "Apartment",
                    "numerators": {
                      "this": 2538,
                      "province": 125373,
                      "country": 720327
                    },
                    "values": {
                      "this": 23.38,
                      "province": 7.67,
                      "country": 4.98
                    },
                    "index": {
                      "this": 100,
                      "province": 305,
                      "country": 469
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
                  "Semi-detached house": {
                    "name": "Semi-detached house",
                    "numerators": {
                      "this": 885,
                      "province": 95403,
                      "country": 213561
                    },
                    "values": {
                      "this": 8.15,
                      "province": 5.84,
                      "country": 1.48
                    },
                    "index": {
                      "this": 100,
                      "province": 140,
                      "country": 551
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
                  "Townhouse": {
                    "name": "Townhouse",
                    "numerators": {
                      "this": 504,
                      "province": 18330,
                      "country": 213105
                    },
                    "values": {
                      "this": 4.64,
                      "province": 1.12,
                      "country": 1.47
                    },
                    "index": {
                      "this": 100,
                      "province": 414,
                      "country": 316
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
                    "universe": "Households",
                    "year": "2011",
                    "table_id": "TYPEOFDWELLING"
                  },
                  "Other": {
                    "error_ratio": {
                      "this": null
                    },
                    "values": {
                      "this": 4.95,
                      "province": 22.87,
                      "country": 27.12
                    },
                    "index": {
                      "this": 100,
                      "province": 22,
                      "country": 18
                    },
                    "error": {
                      "this": 0
                    },
                    "name": "Other",
                    "numerator_errors": {
                      "this": 0
                    },
                    "numerators": {
                      "this": 537,
                      "province": 373731,
                      "country": 3919137
                    }
                  }
                },
                "owned": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 61.75,
                    "province": 52.43,
                    "country": 53.1
                  },
                  "index": {
                    "this": 100,
                    "province": 118,
                    "country": 116
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Households fully owned or being paid off",
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "numerators": {
                    "this": 6702,
                    "province": 856781,
                    "country": 7672339
                  }
                },
                "annual_income_distribution": {
                  "R0": {
                    "name": "R0",
                    "numerators": {
                      "this": 860,
                      "province": 216960,
                      "country": 2177533
                    },
                    "values": {
                      "this": 7.92,
                      "province": 13.28,
                      "country": 15.07
                    },
                    "index": {
                      "this": 100,
                      "province": 60,
                      "country": 53
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
                  "Under R4800": {
                    "name": "Under R4800",
                    "numerators": {
                      "this": 57,
                      "province": 41997,
                      "country": 648752
                    },
                    "values": {
                      "this": 0.53,
                      "province": 2.57,
                      "country": 4.49
                    },
                    "index": {
                      "this": 100,
                      "province": 21,
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
                  "R5k - R10k": {
                    "name": "R5k - R10k",
                    "numerators": {
                      "this": 65,
                      "province": 63347,
                      "country": 1066352
                    },
                    "values": {
                      "this": 0.6,
                      "province": 3.88,
                      "country": 7.38
                    },
                    "index": {
                      "this": 100,
                      "province": 15,
                      "country": 8
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
                  "R10k - R20k": {
                    "name": "R10k - R20k",
                    "numerators": {
                      "this": 226,
                      "province": 193020,
                      "country": 2475232
                    },
                    "values": {
                      "this": 2.08,
                      "province": 11.81,
                      "country": 17.13
                    },
                    "index": {
                      "this": 100,
                      "province": 18,
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
                  "R20k - R40k": {
                    "name": "R20k - R40k",
                    "numerators": {
                      "this": 407,
                      "province": 287969,
                      "country": 2740595
                    },
                    "values": {
                      "this": 3.75,
                      "province": 17.62,
                      "country": 18.97
                    },
                    "index": {
                      "this": 100,
                      "province": 21,
                      "country": 20
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
                  "R40k - R75k": {
                    "name": "R40k - R75k",
                    "numerators": {
                      "this": 803,
                      "province": 256672,
                      "country": 1879235
                    },
                    "values": {
                      "this": 7.4,
                      "province": 15.71,
                      "country": 13.01
                    },
                    "index": {
                      "this": 100,
                      "province": 47,
                      "country": 57
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
                  "R75k - R150k": {
                    "name": "R75k - R150k",
                    "numerators": {
                      "this": 1549,
                      "province": 209313,
                      "country": 1335657
                    },
                    "values": {
                      "this": 14.27,
                      "province": 12.81,
                      "country": 9.24
                    },
                    "index": {
                      "this": 100,
                      "province": 111,
                      "country": 154
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
                  "R150k - R300k": {
                    "name": "R150k - R300k",
                    "numerators": {
                      "this": 2341,
                      "province": 177214,
                      "country": 1045292
                    },
                    "values": {
                      "this": 21.57,
                      "province": 10.85,
                      "country": 7.23
                    },
                    "index": {
                      "this": 100,
                      "province": 199,
                      "country": 298
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
                  "R300k - R600k": {
                    "name": "R300k - R600k",
                    "numerators": {
                      "this": 2375,
                      "province": 121763,
                      "country": 685363
                    },
                    "values": {
                      "this": 21.88,
                      "province": 7.45,
                      "country": 4.74
                    },
                    "index": {
                      "this": 100,
                      "province": 294,
                      "country": 462
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
                  "R600k - R1.2M": {
                    "name": "R600k - R1.2M",
                    "numerators": {
                      "this": 1570,
                      "province": 46602,
                      "country": 268934
                    },
                    "values": {
                      "this": 14.46,
                      "province": 2.85,
                      "country": 1.86
                    },
                    "index": {
                      "this": 100,
                      "province": 507,
                      "country": 777
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
                  "R1.2M - R2.5M": {
                    "name": "R1.2M - R2.5M",
                    "numerators": {
                      "this": 433,
                      "province": 12224,
                      "country": 79896
                    },
                    "values": {
                      "this": 3.99,
                      "province": 0.75,
                      "country": 0.55
                    },
                    "index": {
                      "this": 100,
                      "province": 532,
                      "country": 725
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
                  "Over R2.5M": {
                    "name": "Over R2.5M",
                    "numerators": {
                      "this": 168,
                      "province": 6830,
                      "country": 46592
                    },
                    "values": {
                      "this": 1.55,
                      "province": 0.42,
                      "country": 0.32
                    },
                    "index": {
                      "this": 100,
                      "province": 369,
                      "country": 484
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
                    "universe": "Households",
                    "year": "2011",
                    "table_id": "ANNUALHOUSEHOLDINCOME_GENDEROFHOUSEHOLDHEAD"
                  }
                },
                "head_of_household": {
                  "under_18": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 9,
                      "province": 3483,
                      "country": 92715
                    },
                    "index": {
                      "this": 100,
                      "province": null,
                      "country": null
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Households with heads under 18 years old",
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
                  "female": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 40.4,
                      "province": 36.28,
                      "country": 41.19
                    },
                    "index": {
                      "this": 100,
                      "province": 111,
                      "country": 98
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Households with women as their head",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 4385,
                      "province": 592835,
                      "country": 5951638
                    }
                  },
                  "gender_distribution": {
                    "Female": {
                      "name": "Female",
                      "numerators": {
                        "this": 4385,
                        "province": 592835,
                        "country": 5951638
                      },
                      "values": {
                        "this": 40.4,
                        "province": 36.28,
                        "country": 41.19
                      },
                      "index": {
                        "this": 100,
                        "province": 111,
                        "country": 98
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
                    "Male": {
                      "name": "Male",
                      "numerators": {
                        "this": 6469,
                        "province": 1041163,
                        "country": 8498494
                      },
                      "values": {
                        "this": 59.6,
                        "province": 63.72,
                        "country": 58.81
                      },
                      "index": {
                        "this": 100,
                        "province": 94,
                        "country": 101
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
                      "universe": "Households",
                      "year": "2011",
                      "table_id": "AGEOFHOUSEHOLDHEAD_GENDEROFHOUSEHOLDHEAD"
                    }
                  }
                },
                "household_goods": {
                  "Car": {
                    "name": "Car",
                    "numerators": {
                      "this": 9588,
                      "province": 711849,
                      "country": 4266081
                    },
                    "values": {
                      "this": 88.34,
                      "province": 43.56,
                      "country": 29.52
                    },
                    "index": {
                      "this": 100,
                      "province": 203,
                      "country": 299
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
                  "Cellphone": {
                    "name": "Cellphone",
                    "numerators": {
                      "this": 10524,
                      "province": 1452081,
                      "country": 12850875
                    },
                    "values": {
                      "this": 96.96,
                      "province": 88.87,
                      "country": 88.93
                    },
                    "index": {
                      "this": 100,
                      "province": 109,
                      "country": 109
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
                  "DVD player": {
                    "name": "DVD player",
                    "numerators": {
                      "this": 8898,
                      "province": 1117659,
                      "country": 8575221
                    },
                    "values": {
                      "this": 81.98,
                      "province": 68.4,
                      "country": 59.34
                    },
                    "index": {
                      "this": 100,
                      "province": 120,
                      "country": 138
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
                  "Fridge": {
                    "name": "Fridge",
                    "numerators": {
                      "this": 10731,
                      "province": 1315584,
                      "country": 9886239
                    },
                    "values": {
                      "this": 98.87,
                      "province": 80.51,
                      "country": 68.42
                    },
                    "index": {
                      "this": 100,
                      "province": 123,
                      "country": 145
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
                  "Radio": {
                    "name": "Radio",
                    "numerators": {
                      "this": 9351,
                      "province": 1130241,
                      "country": 9749898
                    },
                    "values": {
                      "this": 86.15,
                      "province": 69.17,
                      "country": 67.47
                    },
                    "index": {
                      "this": 100,
                      "province": 125,
                      "country": 128
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
                  "Satellite TV": {
                    "name": "Satellite TV",
                    "numerators": {
                      "this": 6615,
                      "province": 500883,
                      "country": 3721065
                    },
                    "values": {
                      "this": 60.95,
                      "province": 30.65,
                      "country": 25.75
                    },
                    "index": {
                      "this": 100,
                      "province": 199,
                      "country": 237
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
                  "Stove": {
                    "name": "Stove",
                    "numerators": {
                      "this": 10497,
                      "province": 1475433,
                      "country": 11129856
                    },
                    "values": {
                      "this": 96.71,
                      "province": 90.3,
                      "country": 77.02
                    },
                    "index": {
                      "this": 100,
                      "province": 107,
                      "country": 126
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
                  "TV": {
                    "name": "TV",
                    "numerators": {
                      "this": 10248,
                      "province": 1397712,
                      "country": 10761948
                    },
                    "values": {
                      "this": 94.42,
                      "province": 85.54,
                      "country": 74.48
                    },
                    "index": {
                      "this": 100,
                      "province": 110,
                      "country": 127
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
                  "Telephone": {
                    "name": "Telephone",
                    "numerators": {
                      "this": 7938,
                      "province": 503415,
                      "country": 2088147
                    },
                    "values": {
                      "this": 73.13,
                      "province": 30.81,
                      "country": 14.45
                    },
                    "index": {
                      "this": 100,
                      "province": 237,
                      "country": 506
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
                  "Vacuum cleaner": {
                    "name": "Vacuum cleaner",
                    "numerators": {
                      "this": 9054,
                      "province": 556944,
                      "country": 2521248
                    },
                    "values": {
                      "this": 83.42,
                      "province": 34.08,
                      "country": 17.45
                    },
                    "index": {
                      "this": 100,
                      "province": 245,
                      "country": 478
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
                  "Washing machine": {
                    "name": "Washing machine",
                    "numerators": {
                      "this": 9624,
                      "province": 941946,
                      "country": 4556457
                    },
                    "values": {
                      "this": 88.67,
                      "province": 57.65,
                      "country": 31.53
                    },
                    "index": {
                      "this": 100,
                      "province": 154,
                      "country": 281
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
                    "universe": "Households",
                    "year": "2011",
                    "table_id": "HOUSEHOLDGOODS"
                  }
                }
              },
              "service_delivery": {
                "electricity_access_distribution": {
                  "total_some_not_all_elec": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 31.48,
                      "province": 33.82,
                      "country": 29.38
                    },
                    "index": {
                      "this": 100,
                      "province": 93,
                      "country": 107
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Have electricity for some things",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 3417,
                      "province": 552619,
                      "country": 4246047
                    }
                  },
                  "total_no_elec": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 0.14,
                      "province": 6.09,
                      "country": 14.68
                    },
                    "index": {
                      "this": 100,
                      "province": 2,
                      "country": 1
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "No electricity",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 15,
                      "province": 99589,
                      "country": 2120974
                    }
                  },
                  "metadata": {
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "ELECTRICITYFORCOOKING_ELECTRICITYFORHEATING_ELECTR"
                  },
                  "total_all_elec": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 68.38,
                      "province": 60.09,
                      "country": 55.94
                    },
                    "index": {
                      "this": 100,
                      "province": 114,
                      "country": 122
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Have electricity for everything",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 7423,
                      "province": 981791,
                      "country": 8083139
                    }
                  }
                },
                "percentage_no_toilet_access": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 0.11,
                    "province": 2.68,
                    "country": 5.34
                  },
                  "index": {
                    "this": 100,
                    "province": 4,
                    "country": 2
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Have no access to any toilets",
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "numerators": {
                    "this": 32,
                    "province": 156080,
                    "country": 2763667
                  }
                },
                "percentage_water_from_service_provider": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 98.54,
                    "province": 91.15,
                    "country": 76.89
                  },
                  "index": {
                    "this": 100,
                    "province": 108,
                    "country": 128
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Are getting water from a regional or local service provider",
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "numerators": {
                    "this": 28206,
                    "province": 5307172,
                    "country": 39807757
                  }
                },
                "toilet_facilities_distribution": {
                  "Flush toilet": {
                    "name": "Flush toilet",
                    "numerators": {
                      "this": 28329,
                      "province": 5250734,
                      "country": 29257489
                    },
                    "values": {
                      "this": 98.98,
                      "province": 90.18,
                      "country": 56.51
                    },
                    "index": {
                      "this": 100,
                      "province": 110,
                      "country": 175
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
                  "Unspecified": {
                    "name": "Unspecified",
                    "numerators": {
                      "this": 208,
                      "province": 26433,
                      "country": 229169
                    },
                    "values": {
                      "this": 0.73,
                      "province": 0.45,
                      "country": 0.44
                    },
                    "index": {
                      "this": 100,
                      "province": 162,
                      "country": 166
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
                  "None": {
                    "name": "None",
                    "numerators": {
                      "this": 32,
                      "province": 156080,
                      "country": 2763667
                    },
                    "values": {
                      "this": 0.11,
                      "province": 2.68,
                      "country": 5.34
                    },
                    "index": {
                      "this": 100,
                      "province": 4,
                      "country": 2
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
                  "Pit toilet": {
                    "name": "Pit toilet",
                    "numerators": {
                      "this": 16,
                      "province": 71710,
                      "country": 15908467
                    },
                    "values": {
                      "this": 0.06,
                      "province": 1.23,
                      "country": 30.73
                    },
                    "index": {
                      "this": 100,
                      "province": 5,
                      "country": null
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
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "TOILETFACILITIES"
                  },
                  "Other": {
                    "error_ratio": {
                      "this": null
                    },
                    "values": {
                      "this": 0.13,
                      "province": 5.46,
                      "country": 6.98
                    },
                    "index": {
                      "this": 100,
                      "province": 2,
                      "country": 2
                    },
                    "error": {
                      "this": 0
                    },
                    "name": "Other",
                    "numerator_errors": {
                      "this": 0
                    },
                    "numerators": {
                      "this": 37,
                      "province": 317777,
                      "country": 3611769
                    }
                  }
                },
                "water_source_distribution": {
                  "Service provider": {
                    "name": "Service provider",
                    "numerators": {
                      "this": 28206,
                      "province": 5307172,
                      "country": 39807757
                    },
                    "values": {
                      "this": 98.54,
                      "province": 91.15,
                      "country": 76.89
                    },
                    "index": {
                      "this": 100,
                      "province": 108,
                      "country": 128
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
                  "Other": {
                    "name": "Other",
                    "numerators": {
                      "this": 272,
                      "province": 91776,
                      "country": 1298645
                    },
                    "values": {
                      "this": 0.95,
                      "province": 1.58,
                      "country": 2.51
                    },
                    "index": {
                      "this": 100,
                      "province": 60,
                      "country": 38
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
                  "Vendor": {
                    "name": "Vendor",
                    "numerators": {
                      "this": 44,
                      "province": 19001,
                      "country": 668149
                    },
                    "values": {
                      "this": 0.15,
                      "province": 0.33,
                      "country": 1.29
                    },
                    "index": {
                      "this": 100,
                      "province": 45,
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
                  "Tanker": {
                    "name": "Tanker",
                    "numerators": {
                      "this": 33,
                      "province": 38845,
                      "country": 1382835
                    },
                    "values": {
                      "this": 0.12,
                      "province": 0.67,
                      "country": 2.67
                    },
                    "index": {
                      "this": 100,
                      "province": 18,
                      "country": 4
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
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "SOURCEOFWATER"
                  }
                },
                "refuse_disposal_distribution": {
                  "Service provider (regularly)": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 98.53,
                      "province": 89.26,
                      "country": 57.97
                    },
                    "index": {
                      "this": 100,
                      "province": 110,
                      "country": 170
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Service provider (regularly)",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 28202,
                      "province": 5197550,
                      "country": 30013366
                    }
                  },
                  "Unspecified": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 0.73,
                      "province": 0.45,
                      "country": 0.44
                    },
                    "index": {
                      "this": 100,
                      "province": 162,
                      "country": 166
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Unspecified",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 208,
                      "province": 26433,
                      "country": 229169
                    }
                  },
                  "Communal dump": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 0.37,
                      "province": 2.61,
                      "country": 1.73
                    },
                    "index": {
                      "this": 100,
                      "province": 14,
                      "country": 21
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Communal dump",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 105,
                      "province": 152158,
                      "country": 894542
                    }
                  },
                  "Service provider (not regularly)": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 0.25,
                      "province": 1.32,
                      "country": 1.43
                    },
                    "index": {
                      "this": 100,
                      "province": 19,
                      "country": 17
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Service provider (not regularly)",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 71,
                      "province": 77139,
                      "country": 739359
                    }
                  },
                  "metadata": {
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "REFUSEDISPOSAL"
                  },
                  "Other": {
                    "error_ratio": {
                      "this": null
                    },
                    "values": {
                      "this": 0.13,
                      "province": 6.35,
                      "country": 38.43
                    },
                    "index": {
                      "this": 100,
                      "province": 2,
                      "country": null
                    },
                    "error": {
                      "this": 0
                    },
                    "name": "Other",
                    "numerator_errors": {
                      "this": 0
                    },
                    "numerators": {
                      "this": 36,
                      "province": 369454,
                      "country": 19894126
                    }
                  }
                },
                "percentage_flush_toilet_access": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 99,
                    "province": 90.89,
                    "country": 59.3
                  },
                  "index": {
                    "this": 100,
                    "province": 109,
                    "country": 167
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Have access to flush or chemical toilets",
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "numerators": {
                    "this": 28337,
                    "province": 5292136,
                    "country": 30698628
                  }
                },
                "percentage_electricity_access": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 99.86,
                    "province": 93.91,
                    "country": 85.32
                  },
                  "index": {
                    "this": 100,
                    "province": 106,
                    "country": 117
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Have electricity for at least one of cooking, heating or lighting",
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "numerators": {
                    "this": 10840,
                    "province": 1534410,
                    "country": 12329186
                  }
                },
                "percentage_ref_disp_from_service_provider": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 98.78,
                    "province": 90.59,
                    "country": 59.4
                  },
                  "index": {
                    "this": 100,
                    "province": 109,
                    "country": 166
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Are getting refuse disposal from a local authority or private company",
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "numerators": {
                    "this": 28273,
                    "province": 5274689,
                    "country": 30752725
                  }
                }
              },
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
              },
              "child_households": {
                "informal": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 0,
                    "province": 26.36,
                    "country": 10.76
                  },
                  "index": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Child-headed households that are informal dwellings (shacks)",
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "numerators": {
                    "this": 0,
                    "province": 918,
                    "country": 9975
                  }
                },
                "household_size_distribution": {
                  "1": {
                    "metadata": {
                      "name": "1"
                    },
                    ">= 18": {
                      "name": ">= 18",
                      "numerators": {
                        "this": 3501,
                        "province": 342327,
                        "country": 3815277
                      },
                      "values": {
                        "this": 32.3,
                        "province": 21,
                        "country": 26.57
                      },
                      "index": {
                        "this": 100,
                        "province": 154,
                        "country": 122
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
                    "< 18": {
                      "name": "< 18",
                      "numerators": {
                        "this": 6,
                        "province": 1311,
                        "country": 40155
                      },
                      "values": {
                        "this": 50,
                        "province": 37.64,
                        "country": 43.31
                      },
                      "index": {
                        "this": 100,
                        "province": 133,
                        "country": 115
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
                    }
                  },
                  "10+": {
                    "metadata": {
                      "name": "10+"
                    },
                    ">= 18": {
                      "name": ">= 18",
                      "numerators": {
                        "this": 3,
                        "province": 20103,
                        "country": 309252
                      },
                      "values": {
                        "this": 0.03,
                        "province": 1.23,
                        "country": 2.15
                      },
                      "index": {
                        "this": 100,
                        "province": 2,
                        "country": 1
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
                    "< 18": {
                      "name": "< 18",
                      "numerators": {
                        "this": 0,
                        "province": 45,
                        "country": 762
                      },
                      "values": {
                        "this": 0,
                        "province": 1.29,
                        "country": 0.82
                      },
                      "index": {
                        "this": null,
                        "province": null,
                        "country": null
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
                    }
                  },
                  "2": {
                    "metadata": {
                      "name": "2"
                    },
                    ">= 18": {
                      "name": ">= 18",
                      "numerators": {
                        "this": 3351,
                        "province": 374652,
                        "country": 2784885
                      },
                      "values": {
                        "this": 30.92,
                        "province": 22.98,
                        "country": 19.4
                      },
                      "index": {
                        "this": 100,
                        "province": 135,
                        "country": 159
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
                    "< 18": {
                      "name": "< 18",
                      "numerators": {
                        "this": 3,
                        "province": 765,
                        "country": 22353
                      },
                      "values": {
                        "this": 25,
                        "province": 21.96,
                        "country": 24.11
                      },
                      "index": {
                        "this": 100,
                        "province": 114,
                        "country": 104
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
                    }
                  },
                  "3": {
                    "metadata": {
                      "name": "3"
                    },
                    ">= 18": {
                      "name": ">= 18",
                      "numerators": {
                        "this": 1635,
                        "province": 268233,
                        "country": 2175996
                      },
                      "values": {
                        "this": 15.08,
                        "province": 16.45,
                        "country": 15.16
                      },
                      "index": {
                        "this": 100,
                        "province": 92,
                        "country": 99
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
                    "< 18": {
                      "name": "< 18",
                      "numerators": {
                        "this": 0,
                        "province": 477,
                        "country": 12540
                      },
                      "values": {
                        "this": 0,
                        "province": 13.7,
                        "country": 13.52
                      },
                      "index": {
                        "this": null,
                        "province": null,
                        "country": null
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
                    }
                  },
                  "4": {
                    "metadata": {
                      "name": "4"
                    },
                    ">= 18": {
                      "name": ">= 18",
                      "numerators": {
                        "this": 1533,
                        "province": 267987,
                        "country": 2033304
                      },
                      "values": {
                        "this": 14.14,
                        "province": 16.44,
                        "country": 14.16
                      },
                      "index": {
                        "this": 100,
                        "province": 86,
                        "country": 100
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
                    "< 18": {
                      "name": "< 18",
                      "numerators": {
                        "this": 3,
                        "province": 366,
                        "country": 7539
                      },
                      "values": {
                        "this": 25,
                        "province": 10.51,
                        "country": 8.13
                      },
                      "index": {
                        "this": 100,
                        "province": 238,
                        "country": 308
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
                    }
                  },
                  "5": {
                    "metadata": {
                      "name": "5"
                    },
                    "< 18": {
                      "name": "< 18",
                      "numerators": {
                        "this": 0,
                        "province": 261,
                        "country": 4299
                      },
                      "values": {
                        "this": 0,
                        "province": 7.49,
                        "country": 4.64
                      },
                      "index": {
                        "this": null,
                        "province": null,
                        "country": null
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
                    ">= 18": {
                      "name": ">= 18",
                      "numerators": {
                        "this": 567,
                        "province": 168867,
                        "country": 1346817
                      },
                      "values": {
                        "this": 5.23,
                        "province": 10.36,
                        "country": 9.38
                      },
                      "index": {
                        "this": 100,
                        "province": 50,
                        "country": 56
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
                    }
                  },
                  "6": {
                    "metadata": {
                      "name": "6"
                    },
                    ">= 18": {
                      "name": ">= 18",
                      "numerators": {
                        "this": 177,
                        "province": 96261,
                        "country": 859347
                      },
                      "values": {
                        "this": 1.63,
                        "province": 5.9,
                        "country": 5.99
                      },
                      "index": {
                        "this": 100,
                        "province": 28,
                        "country": 27
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
                    "< 18": {
                      "name": "< 18",
                      "numerators": {
                        "this": 0,
                        "province": 135,
                        "country": 2472
                      },
                      "values": {
                        "this": 0,
                        "province": 3.88,
                        "country": 2.67
                      },
                      "index": {
                        "this": null,
                        "province": null,
                        "country": null
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
                    }
                  },
                  "7": {
                    "metadata": {
                      "name": "7"
                    },
                    ">= 18": {
                      "name": ">= 18",
                      "numerators": {
                        "this": 45,
                        "province": 49329,
                        "country": 516249
                      },
                      "values": {
                        "this": 0.42,
                        "province": 3.03,
                        "country": 3.6
                      },
                      "index": {
                        "this": 100,
                        "province": 14,
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
                    "< 18": {
                      "name": "< 18",
                      "numerators": {
                        "this": 0,
                        "province": 75,
                        "country": 1353
                      },
                      "values": {
                        "this": 0,
                        "province": 2.15,
                        "country": 1.46
                      },
                      "index": {
                        "this": null,
                        "province": null,
                        "country": null
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
                    }
                  },
                  "8": {
                    "metadata": {
                      "name": "8"
                    },
                    ">= 18": {
                      "name": ">= 18",
                      "numerators": {
                        "this": 21,
                        "province": 27450,
                        "country": 320379
                      },
                      "values": {
                        "this": 0.19,
                        "province": 1.68,
                        "country": 2.23
                      },
                      "index": {
                        "this": 100,
                        "province": 11,
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
                    "< 18": {
                      "name": "< 18",
                      "numerators": {
                        "this": 0,
                        "province": 30,
                        "country": 789
                      },
                      "values": {
                        "this": 0,
                        "province": 0.86,
                        "country": 0.85
                      },
                      "index": {
                        "this": null,
                        "province": null,
                        "country": null
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
                    }
                  },
                  "9": {
                    "metadata": {
                      "name": "9"
                    },
                    ">= 18": {
                      "name": ">= 18",
                      "numerators": {
                        "this": 6,
                        "province": 15303,
                        "country": 195909
                      },
                      "values": {
                        "this": 0.06,
                        "province": 0.94,
                        "country": 1.36
                      },
                      "index": {
                        "this": 100,
                        "province": 6,
                        "country": 4
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
                    "< 18": {
                      "name": "< 18",
                      "numerators": {
                        "this": 0,
                        "province": 18,
                        "country": 456
                      },
                      "values": {
                        "this": 0,
                        "province": 0.52,
                        "country": 0.49
                      },
                      "index": {
                        "this": null,
                        "province": null,
                        "country": null
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
                    }
                  },
                  "metadata": {
                    "universe": "Households",
                    "year": "2011",
                    "table_id": "AGEOFHOUSEHOLDHEAD_HOUSEHOLDSIZE"
                  }
                },
                "annual_income_distribution": {
                  "R0": {
                    "name": "R0",
                    "numerators": {
                      "this": 6,
                      "province": 1458,
                      "country": 36561
                    },
                    "values": {
                      "this": 66.67,
                      "province": 41.93,
                      "country": 39.44
                    },
                    "index": {
                      "this": 100,
                      "province": 159,
                      "country": 169
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
                  "Under R4800": {
                    "name": "Under R4800",
                    "numerators": {
                      "this": 0,
                      "province": 261,
                      "country": 16434
                    },
                    "values": {
                      "this": 0,
                      "province": 7.51,
                      "country": 17.73
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                  "R5k - R10k": {
                    "name": "R5k - R10k",
                    "numerators": {
                      "this": 0,
                      "province": 267,
                      "country": 17895
                    },
                    "values": {
                      "this": 0,
                      "province": 7.68,
                      "country": 19.3
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                  "R10k - R20k": {
                    "name": "R10k - R20k",
                    "numerators": {
                      "this": 0,
                      "province": 375,
                      "country": 10359
                    },
                    "values": {
                      "this": 0,
                      "province": 10.79,
                      "country": 11.17
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                  "R20k - R40k": {
                    "name": "R20k - R40k",
                    "numerators": {
                      "this": 0,
                      "province": 375,
                      "country": 5439
                    },
                    "values": {
                      "this": 0,
                      "province": 10.79,
                      "country": 5.87
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                  "R40k - R75k": {
                    "name": "R40k - R75k",
                    "numerators": {
                      "this": 3,
                      "province": 282,
                      "country": 2289
                    },
                    "values": {
                      "this": 33.33,
                      "province": 8.11,
                      "country": 2.47
                    },
                    "index": {
                      "this": 100,
                      "province": 411,
                      "country": 1349
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
                  "R75k - R150k": {
                    "name": "R75k - R150k",
                    "numerators": {
                      "this": 0,
                      "province": 213,
                      "country": 1620
                    },
                    "values": {
                      "this": 0,
                      "province": 6.13,
                      "country": 1.75
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                  "R150k - R300k": {
                    "name": "R150k - R300k",
                    "numerators": {
                      "this": 0,
                      "province": 123,
                      "country": 1149
                    },
                    "values": {
                      "this": 0,
                      "province": 3.54,
                      "country": 1.24
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                  "R300k - R600k": {
                    "name": "R300k - R600k",
                    "numerators": {
                      "this": 0,
                      "province": 87,
                      "country": 612
                    },
                    "values": {
                      "this": 0,
                      "province": 2.5,
                      "country": 0.66
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                  "R600k - R1.2M": {
                    "name": "R600k - R1.2M",
                    "numerators": {
                      "this": 0,
                      "province": 21,
                      "country": 180
                    },
                    "values": {
                      "this": 0,
                      "province": 0.6,
                      "country": 0.19
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                  "R1.2M - R2.5M": {
                    "name": "R1.2M - R2.5M",
                    "numerators": {
                      "this": 0,
                      "province": 9,
                      "country": 114
                    },
                    "values": {
                      "this": 0,
                      "province": 0.26,
                      "country": 0.12
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                  "Over R2.5M": {
                    "name": "Over R2.5M",
                    "numerators": {
                      "this": 0,
                      "province": 6,
                      "country": 60
                    },
                    "values": {
                      "this": 0,
                      "province": 0.17,
                      "country": 0.06
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                    "universe": "Households headed by children under 18",
                    "year": "2011",
                    "table_id": "ANNUALHOUSEHOLDINCOMEUNDER18"
                  }
                },
                "head_of_household": {
                  "female": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 33.33,
                      "province": 44.44,
                      "country": 44.14
                    },
                    "index": {
                      "this": 100,
                      "province": 75,
                      "country": 76
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Child-headed households with women as their head",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 3,
                      "province": 1548,
                      "country": 40929
                    }
                  },
                  "gender_distribution": {
                    "Female": {
                      "name": "Female",
                      "numerators": {
                        "this": 3,
                        "province": 1548,
                        "country": 40929
                      },
                      "values": {
                        "this": 33.33,
                        "province": 44.44,
                        "country": 44.14
                      },
                      "index": {
                        "this": 100,
                        "province": 75,
                        "country": 76
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
                    "Male": {
                      "name": "Male",
                      "numerators": {
                        "this": 6,
                        "province": 1935,
                        "country": 51786
                      },
                      "values": {
                        "this": 66.67,
                        "province": 55.56,
                        "country": 55.86
                      },
                      "index": {
                        "this": 100,
                        "province": 120,
                        "country": 119
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
                    "Unspecified": {
                      "name": "Unspecified",
                      "numerators": {
                        "this": 0,
                        "province": 0,
                        "country": 0
                      },
                      "values": {
                        "this": 0,
                        "province": 0,
                        "country": 0
                      },
                      "index": {
                        "this": null,
                        "province": null,
                        "country": null
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
                      "universe": "Households headed by children under 18",
                      "year": "2011",
                      "table_id": "GENDEROFHEADOFHOUSEHOLDUNDER18"
                    }
                  }
                },
                "median_annual_income": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 0,
                    "province": 7200,
                    "country": 2400
                  },
                  "index": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Average annual child-headed household income",
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
                "total_households": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 9,
                    "province": 3483,
                    "country": 92715
                  },
                  "index": {
                    "this": 100,
                    "province": null,
                    "country": null
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Households with heads under 18 years old",
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
                "type_of_dwelling_distribution": {
                  "Apartment": {
                    "name": "Apartment",
                    "numerators": {
                      "this": 9,
                      "province": 240,
                      "country": 3189
                    },
                    "values": {
                      "this": 60,
                      "province": 6.9,
                      "country": 3.44
                    },
                    "index": {
                      "this": 100,
                      "province": 870,
                      "country": 1744
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
                  "House": {
                    "name": "House",
                    "numerators": {
                      "this": 6,
                      "province": 1902,
                      "country": 58206
                    },
                    "values": {
                      "this": 40,
                      "province": 54.7,
                      "country": 62.78
                    },
                    "index": {
                      "this": 100,
                      "province": 73,
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
                  "Other": {
                    "name": "Other",
                    "numerators": {
                      "this": 0,
                      "province": 60,
                      "country": 846
                    },
                    "values": {
                      "this": 0,
                      "province": 1.73,
                      "country": 0.91
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                  "Backyard in flat": {
                    "name": "Backyard in flat",
                    "numerators": {
                      "this": 0,
                      "province": 33,
                      "country": 2145
                    },
                    "values": {
                      "this": 0,
                      "province": 0.95,
                      "country": 2.31
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                    "universe": "Households headed by children under 18",
                    "year": "2011",
                    "table_id": "TYPEOFMAINDWELLINGUNDER18"
                  }
                }
              },
              "children": {
                "demographics": {
                  "parental_survival_distribution": {
                    "Both parents": {
                      "name": "Both parents",
                      "numerators": {
                        "this": 4059,
                        "province": 1304826,
                        "country": 12009012
                      },
                      "values": {
                        "this": 86.4,
                        "province": 89.14,
                        "country": 79.53
                      },
                      "index": {
                        "this": 100,
                        "province": 97,
                        "country": 109
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
                    "Neither parent (or uncertain)": {
                      "name": "Neither parent (or uncertain)",
                      "numerators": {
                        "this": 426,
                        "province": 34680,
                        "country": 694989
                      },
                      "values": {
                        "this": 9.07,
                        "province": 2.37,
                        "country": 4.6
                      },
                      "index": {
                        "this": 100,
                        "province": 383,
                        "country": 197
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
                    "One parent": {
                      "name": "One parent",
                      "numerators": {
                        "this": 213,
                        "province": 124296,
                        "country": 2396091
                      },
                      "values": {
                        "this": 4.53,
                        "province": 8.49,
                        "country": 15.87
                      },
                      "index": {
                        "this": 100,
                        "province": 53,
                        "country": 29
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
                      "universe": "Children 14 and under",
                      "year": "2011",
                      "table_id": "PARENTSALIVE"
                    }
                  },
                  "child_adult_distribution": {
                    "Children (< 18)": {
                      "name": "Children (< 18)",
                      "numerators": {
                        "this": 5765,
                        "province": 1739425,
                        "country": 18067972
                      },
                      "values": {
                        "this": 20.14,
                        "province": 29.87,
                        "country": 34.9
                      },
                      "index": {
                        "this": 100,
                        "province": 67,
                        "country": 58
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
                    "Adults (>= 18)": {
                      "name": "Adults (>= 18)",
                      "numerators": {
                        "this": 22858,
                        "province": 4083309,
                        "country": 33702589
                      },
                      "values": {
                        "this": 79.86,
                        "province": 70.13,
                        "country": 65.1
                      },
                      "index": {
                        "this": 100,
                        "province": 114,
                        "country": 123
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
                      "universe": "Population",
                      "year": "2011",
                      "table_id": "AGEINCOMPLETEDYEARSSIMPLIFIED"
                    }
                  },
                  "total_children": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 5765,
                      "province": 1739425,
                      "country": 18067972
                    },
                    "index": {
                      "this": 100,
                      "province": null,
                      "country": null
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Children",
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
                  "gender_distribution": {
                    "Female": {
                      "name": "Female",
                      "numerators": {
                        "this": 2544,
                        "province": 862342,
                        "country": 8947313
                      },
                      "values": {
                        "this": 44.13,
                        "province": 49.58,
                        "country": 49.52
                      },
                      "index": {
                        "this": 100,
                        "province": 89,
                        "country": 89
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
                    "Male": {
                      "name": "Male",
                      "numerators": {
                        "this": 3221,
                        "province": 877084,
                        "country": 9120659
                      },
                      "values": {
                        "this": 55.87,
                        "province": 50.42,
                        "country": 50.48
                      },
                      "index": {
                        "this": 100,
                        "province": 111,
                        "country": 111
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
                      "universe": "Children under 18",
                      "year": "2011",
                      "table_id": "GENDERUNDER18"
                    }
                  },
                  "percent_no_parent": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 9.07,
                      "province": 2.37,
                      "country": 4.6
                    },
                    "index": {
                      "this": 100,
                      "province": 383,
                      "country": 197
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Of children 14 and under have no living biological parents",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 426,
                      "province": 34680,
                      "country": 694989
                    }
                  }
                },
                "school": {
                  "school_attendance_distribution": {
                    "No": {
                      "name": "No",
                      "numerators": {
                        "this": 65,
                        "province": 100452,
                        "country": 810437
                      },
                      "values": {
                        "this": 1.65,
                        "province": 8.55,
                        "country": 6.55
                      },
                      "index": {
                        "this": 100,
                        "province": 19,
                        "country": 25
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
                    "Other": {
                      "name": "Other",
                      "numerators": {
                        "this": 488,
                        "province": 49920,
                        "country": 415853
                      },
                      "values": {
                        "this": 12.36,
                        "province": 4.25,
                        "country": 3.36
                      },
                      "index": {
                        "this": 100,
                        "province": 291,
                        "country": 368
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
                    "Yes": {
                      "name": "Yes",
                      "numerators": {
                        "this": 3394,
                        "province": 1024255,
                        "country": 11156229
                      },
                      "values": {
                        "this": 85.99,
                        "province": 87.2,
                        "country": 90.1
                      },
                      "index": {
                        "this": 100,
                        "province": 99,
                        "country": 95
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
                      "universe": "Children 5 to 17",
                      "year": "2011",
                      "table_id": "AGEINCOMPLETEDYEARS_PRESENTSCHOOLATTENDANCE"
                    }
                  },
                  "education17_distribution": {
                    "None": {
                      "name": "None",
                      "numerators": {
                        "this": 1,
                        "province": 457,
                        "country": 8410
                      },
                      "values": {
                        "this": 0.28,
                        "province": 0.48,
                        "country": 0.84
                      },
                      "index": {
                        "this": 100,
                        "province": 58,
                        "country": 33
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
                    "Other": {
                      "name": "Other",
                      "numerators": {
                        "this": 0,
                        "province": 65,
                        "country": 323
                      },
                      "values": {
                        "this": 0,
                        "province": 0.07,
                        "country": 0.03
                      },
                      "index": {
                        "this": null,
                        "province": null,
                        "country": null
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
                    "Some primary": {
                      "name": "Some primary",
                      "numerators": {
                        "this": 1,
                        "province": 3948,
                        "country": 54838
                      },
                      "values": {
                        "this": 0.28,
                        "province": 4.19,
                        "country": 5.46
                      },
                      "index": {
                        "this": 100,
                        "province": 7,
                        "country": 5
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
                    "Primary": {
                      "name": "Primary",
                      "numerators": {
                        "this": 2,
                        "province": 4529,
                        "country": 56542
                      },
                      "values": {
                        "this": 0.56,
                        "province": 4.8,
                        "country": 5.63
                      },
                      "index": {
                        "this": 100,
                        "province": 12,
                        "country": 10
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
                    "Some secondary": {
                      "name": "Some secondary",
                      "numerators": {
                        "this": 250,
                        "province": 77179,
                        "country": 802849
                      },
                      "values": {
                        "this": 70.62,
                        "province": 81.84,
                        "country": 79.87
                      },
                      "index": {
                        "this": 100,
                        "province": 86,
                        "country": 88
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
                    "Grade 12 (Matric)": {
                      "name": "Grade 12 (Matric)",
                      "numerators": {
                        "this": 30,
                        "province": 5738,
                        "country": 60569
                      },
                      "values": {
                        "this": 8.47,
                        "province": 6.08,
                        "country": 6.03
                      },
                      "index": {
                        "this": 100,
                        "province": 139,
                        "country": 140
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
                    "Undergrad": {
                      "name": "Undergrad",
                      "numerators": {
                        "this": 5,
                        "province": 207,
                        "country": 1832
                      },
                      "values": {
                        "this": 1.41,
                        "province": 0.22,
                        "country": 0.18
                      },
                      "index": {
                        "this": 100,
                        "province": 641,
                        "country": 783
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
                    "Post-grad": {
                      "name": "Post-grad",
                      "numerators": {
                        "this": 2,
                        "province": 94,
                        "country": 931
                      },
                      "values": {
                        "this": 0.56,
                        "province": 0.1,
                        "country": 0.09
                      },
                      "index": {
                        "this": 100,
                        "province": 560,
                        "country": 622
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
                    "N/A": {
                      "name": "N/A",
                      "numerators": {
                        "this": 63,
                        "province": 2082,
                        "country": 18865
                      },
                      "values": {
                        "this": 17.8,
                        "province": 2.21,
                        "country": 1.88
                      },
                      "index": {
                        "this": 100,
                        "province": 805,
                        "country": 947
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
                      "universe": "17-year-old children",
                      "year": "2011",
                      "table_id": "HIGHESTEDUCATIONALLEVEL17"
                    }
                  },
                  "percent_school_attendance": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 85.99,
                      "province": 87.2,
                      "country": 90.1
                    },
                    "index": {
                      "this": 100,
                      "province": 99,
                      "country": 95
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "School-aged children (5 to 17 years old) are in school",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 3947,
                      "province": 1174627,
                      "country": 12382519
                    }
                  }
                },
                "employment": {
                  "employment_distribution": {
                    "Discouraged work-seeker": {
                      "name": "Discouraged work-seeker",
                      "numerators": {
                        "this": 3,
                        "province": 6999,
                        "country": 71469
                      },
                      "values": {
                        "this": 0.28,
                        "province": 2.54,
                        "country": 2.41
                      },
                      "index": {
                        "this": 100,
                        "province": 11,
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
                    "Employed": {
                      "name": "Employed",
                      "numerators": {
                        "this": 57,
                        "province": 15810,
                        "country": 100680
                      },
                      "values": {
                        "this": 5.35,
                        "province": 5.74,
                        "country": 3.39
                      },
                      "index": {
                        "this": 100,
                        "province": 93,
                        "country": 158
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
                    "Other not economically active": {
                      "name": "Other not economically active",
                      "numerators": {
                        "this": 993,
                        "province": 226365,
                        "country": 2579919
                      },
                      "values": {
                        "this": 93.24,
                        "province": 82.13,
                        "country": 86.93
                      },
                      "index": {
                        "this": 100,
                        "province": 114,
                        "country": 107
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
                    "Unemployed": {
                      "name": "Unemployed",
                      "numerators": {
                        "this": 12,
                        "province": 26448,
                        "country": 215811
                      },
                      "values": {
                        "this": 1.13,
                        "province": 9.6,
                        "country": 7.27
                      },
                      "index": {
                        "this": 100,
                        "province": 12,
                        "country": 16
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
                      "universe": "Children 15 to 17",
                      "year": "2011",
                      "table_id": "OFFICIALEMPLOYMENTSTATUS15TO17"
                    }
                  },
                  "percent_in_labour_force": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 6.76,
                      "province": 17.87,
                      "country": 13.07
                    },
                    "index": {
                      "this": 100,
                      "province": 38,
                      "country": 52
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Of children between 15 and 17 are in the labour force",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 72,
                      "province": 49257,
                      "country": 387960
                    }
                  },
                  "median_income": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 0,
                      "province": 1200,
                      "country": 200
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Average monthly income of employed children between 15 and 17",
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
                  }
                }
              },
              "demographics": {
                "citizenship_south_african": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 81.04,
                    "province": 93.58,
                    "country": 94.55
                  },
                  "index": {
                    "this": 100,
                    "province": 87,
                    "country": 86
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "South African citizens",
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "numerators": {
                    "this": 23196,
                    "province": 5449023,
                    "country": 48949338
                  }
                },
                "language_most_spoken": {
                  "name": "English",
                  "numerators": {
                    "this": 21765,
                    "province": 1149048,
                    "country": 4892622
                  },
                  "values": {
                    "this": 76.06,
                    "province": 19.73,
                    "country": 9.45
                  },
                  "index": {
                    "this": 100,
                    "province": 386,
                    "country": 805
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
                "language_distribution": {
                  "English": {
                    "name": "English",
                    "numerators": {
                      "this": 21765,
                      "province": 1149048,
                      "country": 4892622
                    },
                    "values": {
                      "this": 76.06,
                      "province": 19.73,
                      "country": 9.45
                    },
                    "index": {
                      "this": 100,
                      "province": 386,
                      "country": 805
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
                  "Not applicable": {
                    "name": "Not applicable",
                    "numerators": {
                      "this": 2334,
                      "province": 147129,
                      "country": 809118
                    },
                    "values": {
                      "this": 8.16,
                      "province": 2.53,
                      "country": 1.56
                    },
                    "index": {
                      "this": 100,
                      "province": 323,
                      "country": 523
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
                  "Afrikaans": {
                    "name": "Afrikaans",
                    "numerators": {
                      "this": 1965,
                      "province": 2820642,
                      "country": 6855081
                    },
                    "values": {
                      "this": 6.87,
                      "province": 48.44,
                      "country": 13.24
                    },
                    "index": {
                      "this": 100,
                      "province": 14,
                      "country": 52
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
                  "Other": {
                    "name": "Other",
                    "numerators": {
                      "this": 1050,
                      "province": 127116,
                      "country": 828258
                    },
                    "values": {
                      "this": 3.67,
                      "province": 2.18,
                      "country": 1.6
                    },
                    "index": {
                      "this": 100,
                      "province": 168,
                      "country": 229
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
                  "IsiXhosa": {
                    "name": "IsiXhosa",
                    "numerators": {
                      "this": 747,
                      "province": 1403232,
                      "country": 8154258
                    },
                    "values": {
                      "this": 2.61,
                      "province": 24.1,
                      "country": 15.75
                    },
                    "index": {
                      "this": 100,
                      "province": 11,
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
                  "IsiZulu": {
                    "name": "IsiZulu",
                    "numerators": {
                      "this": 162,
                      "province": 24633,
                      "country": 11587374
                    },
                    "values": {
                      "this": 0.57,
                      "province": 0.42,
                      "country": 22.38
                    },
                    "index": {
                      "this": 100,
                      "province": 136,
                      "country": 3
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
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "LANGUAGE"
                  }
                },
                "age_category_distribution": {
                  "Under 18": {
                    "name": "Under 18",
                    "numerators": {
                      "this": 5765,
                      "province": 1739425,
                      "country": 18067972
                    },
                    "values": {
                      "this": 20.14,
                      "province": 29.87,
                      "country": 34.9
                    },
                    "index": {
                      "this": 100,
                      "province": 67,
                      "country": 58
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
                  "18 to 64": {
                    "name": "18 to 64",
                    "numerators": {
                      "this": 19825,
                      "province": 3741082,
                      "country": 30936598
                    },
                    "values": {
                      "this": 69.26,
                      "province": 64.25,
                      "country": 59.76
                    },
                    "index": {
                      "this": 100,
                      "province": 108,
                      "country": 116
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
                  "65 and over": {
                    "name": "65 and over",
                    "numerators": {
                      "this": 3033,
                      "province": 342227,
                      "country": 2765991
                    },
                    "values": {
                      "this": 10.6,
                      "province": 5.88,
                      "country": 5.34
                    },
                    "index": {
                      "this": 100,
                      "province": 180,
                      "country": 199
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
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "AGEINCOMPLETEDYEARSSIMPLIFIED"
                  }
                },
                "born_in_south_africa": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 73.19,
                    "province": 91.81,
                    "country": 92.88
                  },
                  "index": {
                    "this": 100,
                    "province": 80,
                    "country": 79
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Born in South Africa",
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "numerators": {
                    "this": 20949,
                    "province": 5345622,
                    "country": 48083729
                  }
                },
                "region_of_birth_distribution": {
                  "South Africa": {
                    "name": "South Africa",
                    "numerators": {
                      "this": 20949,
                      "province": 5345622,
                      "country": 48083729
                    },
                    "values": {
                      "this": 73.19,
                      "province": 91.81,
                      "country": 92.88
                    },
                    "index": {
                      "this": 100,
                      "province": 80,
                      "country": 79
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
                  "Unspecified": {
                    "name": "Unspecified",
                    "numerators": {
                      "this": 5072,
                      "province": 321589,
                      "country": 2165991
                    },
                    "values": {
                      "this": 17.72,
                      "province": 5.52,
                      "country": 4.18
                    },
                    "index": {
                      "this": 100,
                      "province": 321,
                      "country": 424
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
                  "SADC": {
                    "name": "SADC",
                    "numerators": {
                      "this": 1421,
                      "province": 96005,
                      "country": 1219891
                    },
                    "values": {
                      "this": 4.96,
                      "province": 1.65,
                      "country": 2.36
                    },
                    "index": {
                      "this": 100,
                      "province": 301,
                      "country": 210
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
                  "Rest of Africa": {
                    "name": "Rest of Africa",
                    "numerators": {
                      "this": 464,
                      "province": 30059,
                      "country": 132753
                    },
                    "values": {
                      "this": 1.62,
                      "province": 0.52,
                      "country": 0.26
                    },
                    "index": {
                      "this": 100,
                      "province": 312,
                      "country": 623
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
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "REGIONOFBIRTH"
                  },
                  "Other": {
                    "error_ratio": {
                      "this": null
                    },
                    "values": {
                      "this": 2.5,
                      "province": 0.51,
                      "country": 0.32
                    },
                    "index": {
                      "this": 100,
                      "province": 490,
                      "country": 781
                    },
                    "error": {
                      "this": 0
                    },
                    "name": "Other",
                    "numerator_errors": {
                      "this": 0
                    },
                    "numerators": {
                      "this": 716,
                      "province": 29460,
                      "country": 168196
                    }
                  }
                },
                "median_age": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 32,
                    "province": 28,
                    "country": 25
                  },
                  "index": {
                    "this": 100,
                    "province": 114,
                    "country": 128
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Median age",
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
                "province_of_birth_distribution": {
                  "Western Cape": {
                    "name": "Western Cape",
                    "numerators": {
                      "this": 13002,
                      "province": 4032687,
                      "country": 4456413
                    },
                    "values": {
                      "this": 45.42,
                      "province": 69.26,
                      "country": 8.61
                    },
                    "index": {
                      "this": 100,
                      "province": 66,
                      "country": 528
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
                  "Outside South Africa": {
                    "name": "Outside South Africa",
                    "numerators": {
                      "this": 5034,
                      "province": 260952,
                      "country": 2199871
                    },
                    "values": {
                      "this": 17.59,
                      "province": 4.48,
                      "country": 4.25
                    },
                    "index": {
                      "this": 100,
                      "province": 393,
                      "country": 414
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
                  "Gauteng": {
                    "name": "Gauteng",
                    "numerators": {
                      "this": 3036,
                      "province": 167524,
                      "country": 7617141
                    },
                    "values": {
                      "this": 10.61,
                      "province": 2.88,
                      "country": 14.71
                    },
                    "index": {
                      "this": 100,
                      "province": 368,
                      "country": 72
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
                  "Not applicable": {
                    "name": "Not applicable",
                    "numerators": {
                      "this": 2330,
                      "province": 136485,
                      "country": 755340
                    },
                    "values": {
                      "this": 8.14,
                      "province": 2.34,
                      "country": 1.46
                    },
                    "index": {
                      "this": 100,
                      "province": 348,
                      "country": 558
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
                  "Eastern Cape": {
                    "name": "Eastern Cape",
                    "numerators": {
                      "this": 1956,
                      "province": 894289,
                      "country": 7961244
                    },
                    "values": {
                      "this": 6.83,
                      "province": 15.36,
                      "country": 15.38
                    },
                    "index": {
                      "this": 100,
                      "province": 44,
                      "country": 44
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
                  "KwaZulu-Natal": {
                    "name": "KwaZulu-Natal",
                    "numerators": {
                      "this": 1859,
                      "province": 61945,
                      "country": 10150704
                    },
                    "values": {
                      "this": 6.49,
                      "province": 1.06,
                      "country": 19.61
                    },
                    "index": {
                      "this": 100,
                      "province": 612,
                      "country": 33
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
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "PROVINCEOFBIRTH"
                  },
                  "Other": {
                    "error_ratio": {
                      "this": null
                    },
                    "values": {
                      "this": 4.92,
                      "province": 4.62,
                      "country": 35.99
                    },
                    "index": {
                      "this": 100,
                      "province": 106,
                      "country": 14
                    },
                    "error": {
                      "this": 0
                    },
                    "name": "Other",
                    "numerator_errors": {
                      "this": 0
                    },
                    "numerators": {
                      "this": 1407,
                      "province": 268853,
                      "country": 18629847
                    }
                  }
                },
                "age_group_distribution": {
                  "0-9": {
                    "name": "0-9",
                    "numerators": {
                      "this": 3269,
                      "province": 1024961,
                      "country": 10505203
                    },
                    "values": {
                      "this": 11.42,
                      "province": 17.6,
                      "country": 20.29
                    },
                    "index": {
                      "this": 100,
                      "province": 65,
                      "country": 56
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
                  "10-19": {
                    "name": "10-19",
                    "numerators": {
                      "this": 3308,
                      "province": 918965,
                      "country": 9598363
                    },
                    "values": {
                      "this": 11.56,
                      "province": 15.78,
                      "country": 18.54
                    },
                    "index": {
                      "this": 100,
                      "province": 73,
                      "country": 62
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
                  "20-29": {
                    "name": "20-29",
                    "numerators": {
                      "this": 6265,
                      "province": 1176099,
                      "country": 10433859
                    },
                    "values": {
                      "this": 21.89,
                      "province": 20.2,
                      "country": 20.15
                    },
                    "index": {
                      "this": 100,
                      "province": 108,
                      "country": 109
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
                  "30-39": {
                    "name": "30-39",
                    "numerators": {
                      "this": 4488,
                      "province": 918238,
                      "country": 7496777
                    },
                    "values": {
                      "this": 15.68,
                      "province": 15.77,
                      "country": 14.48
                    },
                    "index": {
                      "this": 100,
                      "province": 99,
                      "country": 108
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
                  "40-49": {
                    "name": "40-49",
                    "numerators": {
                      "this": 3760,
                      "province": 742903,
                      "country": 5568901
                    },
                    "values": {
                      "this": 13.14,
                      "province": 12.76,
                      "country": 10.76
                    },
                    "index": {
                      "this": 100,
                      "province": 103,
                      "country": 122
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
                  "50-59": {
                    "name": "50-59",
                    "numerators": {
                      "this": 3128,
                      "province": 520783,
                      "country": 4015697
                    },
                    "values": {
                      "this": 10.93,
                      "province": 8.94,
                      "country": 7.76
                    },
                    "index": {
                      "this": 100,
                      "province": 122,
                      "country": 141
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
                  "60-69": {
                    "name": "60-69",
                    "numerators": {
                      "this": 2235,
                      "province": 303768,
                      "country": 2343573
                    },
                    "values": {
                      "this": 7.81,
                      "province": 5.22,
                      "country": 4.53
                    },
                    "index": {
                      "this": 100,
                      "province": 150,
                      "country": 172
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
                  "70-79": {
                    "name": "70-79",
                    "numerators": {
                      "this": 1294,
                      "province": 153133,
                      "country": 1229598
                    },
                    "values": {
                      "this": 4.52,
                      "province": 2.63,
                      "country": 2.38
                    },
                    "index": {
                      "this": 100,
                      "province": 172,
                      "country": 190
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
                  "80+": {
                    "name": "80+",
                    "numerators": {
                      "this": 876,
                      "province": 63883,
                      "country": 578589
                    },
                    "values": {
                      "this": 3.06,
                      "province": 1.1,
                      "country": 1.12
                    },
                    "index": {
                      "this": 100,
                      "province": 278,
                      "country": 273
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
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "AGEGROUPSIN5YEARS"
                  }
                },
                "population_density": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 2588.3459326509205,
                    "province": 44.2720877082425,
                    "country": 42.1124329202376
                  },
                  "index": {
                    "this": 100,
                    "province": 5846,
                    "country": 6146
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "people per square kilometre",
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
                "citizenship_distribution": {
                  "Yes": {
                    "name": "Yes",
                    "numerators": {
                      "this": 23196,
                      "province": 5449023,
                      "country": 48949338
                    },
                    "values": {
                      "this": 81.04,
                      "province": 93.58,
                      "country": 94.55
                    },
                    "index": {
                      "this": 100,
                      "province": 87,
                      "country": 86
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
                  "No": {
                    "name": "No",
                    "numerators": {
                      "this": 2722,
                      "province": 186807,
                      "country": 1692242
                    },
                    "values": {
                      "this": 9.51,
                      "province": 3.21,
                      "country": 3.27
                    },
                    "index": {
                      "this": 100,
                      "province": 296,
                      "country": 291
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
                  "Not applicable": {
                    "name": "Not applicable",
                    "numerators": {
                      "this": 2321,
                      "province": 135986,
                      "country": 750060
                    },
                    "values": {
                      "this": 8.11,
                      "province": 2.34,
                      "country": 1.45
                    },
                    "index": {
                      "this": 100,
                      "province": 347,
                      "country": 559
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
                  "Unspecified": {
                    "name": "Unspecified",
                    "numerators": {
                      "this": 385,
                      "province": 50918,
                      "country": 378920
                    },
                    "values": {
                      "this": 1.35,
                      "province": 0.87,
                      "country": 0.73
                    },
                    "index": {
                      "this": 100,
                      "province": 155,
                      "country": 185
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
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "CITIZENSHIP"
                  }
                },
                "total_population": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 28624,
                    "province": 5822734,
                    "country": 51770561
                  },
                  "index": {
                    "this": 100,
                    "province": null,
                    "country": null
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "People",
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
                "sex_ratio": {
                  "Female": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 51.62,
                      "province": 50.91,
                      "country": 51.35
                    },
                    "index": {
                      "this": 100,
                      "province": 101,
                      "country": 101
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Female",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 14777,
                      "province": 2964228,
                      "country": 26581770
                    }
                  },
                  "Male": {
                    "error_ratio": {
                      "this": null,
                      "province": null,
                      "country": null
                    },
                    "values": {
                      "this": 48.38,
                      "province": 49.09,
                      "country": 48.65
                    },
                    "index": {
                      "this": 100,
                      "province": 99,
                      "country": 99
                    },
                    "error": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "name": "Male",
                    "numerator_errors": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "numerators": {
                      "this": 13847,
                      "province": 2858506,
                      "country": 25188791
                    }
                  },
                  "metadata": {
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "GENDER"
                  }
                },
                "population_group_distribution": {
                  "Black African": {
                    "name": "Black African",
                    "numerators": {
                      "this": 5492,
                      "province": 1912547,
                      "country": 41000938
                    },
                    "values": {
                      "this": 19.19,
                      "province": 32.85,
                      "country": 79.2
                    },
                    "index": {
                      "this": 100,
                      "province": 58,
                      "country": 24
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
                  "Coloured": {
                    "name": "Coloured",
                    "numerators": {
                      "this": 3833,
                      "province": 2840404,
                      "country": 4615401
                    },
                    "values": {
                      "this": 13.39,
                      "province": 48.78,
                      "country": 8.92
                    },
                    "index": {
                      "this": 100,
                      "province": 27,
                      "country": 150
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
                  "Indian or Asian": {
                    "name": "Indian or Asian",
                    "numerators": {
                      "this": 1373,
                      "province": 60761,
                      "country": 1286930
                    },
                    "values": {
                      "this": 4.8,
                      "province": 1.04,
                      "country": 2.49
                    },
                    "index": {
                      "this": 100,
                      "province": 462,
                      "country": 193
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
                  "Other": {
                    "name": "Other",
                    "numerators": {
                      "this": 1202,
                      "province": 93969,
                      "country": 280454
                    },
                    "values": {
                      "this": 4.2,
                      "province": 1.61,
                      "country": 0.54
                    },
                    "index": {
                      "this": 100,
                      "province": 261,
                      "country": 778
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
                  "White": {
                    "name": "White",
                    "numerators": {
                      "this": 16724,
                      "province": 915053,
                      "country": 4586838
                    },
                    "values": {
                      "this": 58.43,
                      "province": 15.72,
                      "country": 8.86
                    },
                    "index": {
                      "this": 100,
                      "province": 372,
                      "country": 659
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
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "POPULATIONGROUP"
                  }
                }
              },
              "economics": {
                "individual_income_distribution": {
                  "R0": {
                    "name": "R0",
                    "numerators": {
                      "this": 834,
                      "province": 135882,
                      "country": 1132167
                    },
                    "values": {
                      "this": 6.14,
                      "province": 6.76,
                      "country": 8.59
                    },
                    "index": {
                      "this": 100,
                      "province": 91,
                      "country": 71
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
                  "Under R400": {
                    "name": "Under R400",
                    "numerators": {
                      "this": 125,
                      "province": 46848,
                      "country": 419334
                    },
                    "values": {
                      "this": 0.92,
                      "province": 2.33,
                      "country": 3.18
                    },
                    "index": {
                      "this": 100,
                      "province": 39,
                      "country": 29
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
                  "R400 - R800": {
                    "name": "R400 - R800",
                    "numerators": {
                      "this": 137,
                      "province": 87511,
                      "country": 796136
                    },
                    "values": {
                      "this": 1.01,
                      "province": 4.35,
                      "country": 6.04
                    },
                    "index": {
                      "this": 100,
                      "province": 23,
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
                  "R800 - R2k": {
                    "name": "R800 - R2k",
                    "numerators": {
                      "this": 361,
                      "province": 336762,
                      "country": 2208054
                    },
                    "values": {
                      "this": 2.66,
                      "province": 16.75,
                      "country": 16.75
                    },
                    "index": {
                      "this": 100,
                      "province": 16,
                      "country": 16
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
                  "R2k - R3k": {
                    "name": "R2k - R3k",
                    "numerators": {
                      "this": 713,
                      "province": 416922,
                      "country": 2469585
                    },
                    "values": {
                      "this": 5.25,
                      "province": 20.74,
                      "country": 18.74
                    },
                    "index": {
                      "this": 100,
                      "province": 25,
                      "country": 28
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
                  "R3k - R6k": {
                    "name": "R3k - R6k",
                    "numerators": {
                      "this": 1350,
                      "province": 298941,
                      "country": 1940963
                    },
                    "values": {
                      "this": 9.94,
                      "province": 14.87,
                      "country": 14.73
                    },
                    "index": {
                      "this": 100,
                      "province": 67,
                      "country": 67
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
                  "R6k - R13k": {
                    "name": "R6k - R13k",
                    "numerators": {
                      "this": 2434,
                      "province": 251754,
                      "country": 1649796
                    },
                    "values": {
                      "this": 17.91,
                      "province": 12.52,
                      "country": 12.52
                    },
                    "index": {
                      "this": 100,
                      "province": 143,
                      "country": 143
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
                  "R13k - R26k": {
                    "name": "R13k - R26k",
                    "numerators": {
                      "this": 3374,
                      "province": 191698,
                      "country": 1203627
                    },
                    "values": {
                      "this": 24.83,
                      "province": 9.53,
                      "country": 9.13
                    },
                    "index": {
                      "this": 100,
                      "province": 261,
                      "country": 272
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
                  "R26k - R51k": {
                    "name": "R26k - R51k",
                    "numerators": {
                      "this": 2494,
                      "province": 81004,
                      "country": 494584
                    },
                    "values": {
                      "this": 18.36,
                      "province": 4.03,
                      "country": 3.75
                    },
                    "index": {
                      "this": 100,
                      "province": 456,
                      "country": 490
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
                  "R51k - R102k": {
                    "name": "R51k - R102k",
                    "numerators": {
                      "this": 987,
                      "province": 24893,
                      "country": 155154
                    },
                    "values": {
                      "this": 7.26,
                      "province": 1.24,
                      "country": 1.18
                    },
                    "index": {
                      "this": 100,
                      "province": 585,
                      "country": 615
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
                  "Over R102k": {
                    "name": "Over R102k",
                    "numerators": {
                      "this": 356,
                      "province": 12726,
                      "country": 87467
                    },
                    "values": {
                      "this": 2.62,
                      "province": 0.63,
                      "country": 0.66
                    },
                    "index": {
                      "this": 100,
                      "province": 416,
                      "country": 397
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
                  "Unspecified": {
                    "name": "Unspecified",
                    "numerators": {
                      "this": 422,
                      "province": 125758,
                      "country": 623210
                    },
                    "values": {
                      "this": 3.11,
                      "province": 6.25,
                      "country": 4.73
                    },
                    "index": {
                      "this": 100,
                      "province": 50,
                      "country": 66
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
                    "universe": "Employed individuals",
                    "year": "2011",
                    "table_id": "EMPLOYEDINDIVIDUALMONTHLYINCOME"
                  }
                },
                "sector_type_distribution": {
                  "Do not know": {
                    "name": "Do not know",
                    "numerators": {
                      "this": 261,
                      "province": 46256,
                      "country": 318446
                    },
                    "values": {
                      "this": 1.82,
                      "province": 2.25,
                      "country": 2.37
                    },
                    "index": {
                      "this": 100,
                      "province": 81,
                      "country": 77
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
                  "In the formal sector": {
                    "name": "In the formal sector",
                    "numerators": {
                      "this": 12086,
                      "province": 1603353,
                      "country": 9956436
                    },
                    "values": {
                      "this": 84.34,
                      "province": 78.11,
                      "country": 74.02
                    },
                    "index": {
                      "this": 100,
                      "province": 108,
                      "country": 114
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
                  "In the informal sector": {
                    "name": "In the informal sector",
                    "numerators": {
                      "this": 679,
                      "province": 228643,
                      "country": 1640901
                    },
                    "values": {
                      "this": 4.74,
                      "province": 11.14,
                      "country": 12.2
                    },
                    "index": {
                      "this": 100,
                      "province": 43,
                      "country": 39
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
                  "Private household": {
                    "name": "Private household",
                    "numerators": {
                      "this": 1304,
                      "province": 174495,
                      "country": 1534843
                    },
                    "values": {
                      "this": 9.1,
                      "province": 8.5,
                      "country": 11.41
                    },
                    "index": {
                      "this": 100,
                      "province": 107,
                      "country": 80
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
                  "Unspecified": {
                    "name": "Unspecified",
                    "numerators": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "values": {
                      "this": 0,
                      "province": 0,
                      "country": 0
                    },
                    "index": {
                      "this": null,
                      "province": null,
                      "country": null
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
                    "universe": "Workers 15 and over",
                    "year": "2011",
                    "table_id": "TYPEOFSECTOR"
                  }
                },
                "employment_status": {
                  "Discouraged work-seeker": {
                    "name": "Discouraged work-seeker",
                    "numerators": {
                      "this": 92,
                      "province": 122753,
                      "country": 1835092
                    },
                    "values": {
                      "this": 0.44,
                      "province": 3.06,
                      "country": 5.41
                    },
                    "index": {
                      "this": 100,
                      "province": 14,
                      "country": 8
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
                  "Employed": {
                    "name": "Employed",
                    "numerators": {
                      "this": 13585,
                      "province": 2010697,
                      "country": 13180077
                    },
                    "values": {
                      "this": 65.03,
                      "province": 50.06,
                      "country": 38.87
                    },
                    "index": {
                      "this": 100,
                      "province": 130,
                      "country": 167
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
                  "Other not economically active": {
                    "name": "Other not economically active",
                    "numerators": {
                      "this": 6648,
                      "province": 1330519,
                      "country": 13295256
                    },
                    "values": {
                      "this": 31.82,
                      "province": 33.12,
                      "country": 39.21
                    },
                    "index": {
                      "this": 100,
                      "province": 96,
                      "country": 81
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
                  "Unemployed": {
                    "name": "Unemployed",
                    "numerators": {
                      "this": 566,
                      "province": 552733,
                      "country": 5594055
                    },
                    "values": {
                      "this": 2.71,
                      "province": 13.76,
                      "country": 16.5
                    },
                    "index": {
                      "this": 100,
                      "province": 20,
                      "country": 16
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
                    "universe": "Workers 15 and over",
                    "year": "2011",
                    "table_id": "OFFICIALEMPLOYMENTSTATUS"
                  }
                },
                "median_individual_income": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 19200,
                    "province": 2400,
                    "country": 2400
                  },
                  "index": {
                    "this": 100,
                    "province": 800,
                    "country": 800
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Average monthly income",
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
                "internet_access": {
                  "error_ratio": {
                    "this": null,
                    "province": null,
                    "country": null
                  },
                  "values": {
                    "this": 86.96,
                    "province": 43.69,
                    "country": 35.19
                  },
                  "index": {
                    "this": 100,
                    "province": 199,
                    "country": 247
                  },
                  "error": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "name": "Households with internet access",
                  "numerator_errors": {
                    "this": 0,
                    "province": 0,
                    "country": 0
                  },
                  "numerators": {
                    "this": 9444,
                    "province": 713859,
                    "country": 5085645
                  }
                },
                "internet_access_distribution": {
                  "From cell phone": {
                    "name": "From cell phone",
                    "numerators": {
                      "this": 1206,
                      "province": 251790,
                      "country": 2356920
                    },
                    "values": {
                      "this": 12.77,
                      "province": 35.27,
                      "country": 46.34
                    },
                    "index": {
                      "this": 100,
                      "province": 36,
                      "country": 28
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
                  "From elsewhere": {
                    "name": "From elsewhere",
                    "numerators": {
                      "this": 363,
                      "province": 96030,
                      "country": 811296
                    },
                    "values": {
                      "this": 3.84,
                      "province": 13.45,
                      "country": 15.95
                    },
                    "index": {
                      "this": 100,
                      "province": 29,
                      "country": 24
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
                  "From home": {
                    "name": "From home",
                    "numerators": {
                      "this": 6504,
                      "province": 269493,
                      "country": 1239186
                    },
                    "values": {
                      "this": 68.87,
                      "province": 37.75,
                      "country": 24.37
                    },
                    "index": {
                      "this": 100,
                      "province": 182,
                      "country": 283
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
                  "From work": {
                    "name": "From work",
                    "numerators": {
                      "this": 1371,
                      "province": 96546,
                      "country": 678243
                    },
                    "values": {
                      "this": 14.52,
                      "province": 13.52,
                      "country": 13.34
                    },
                    "index": {
                      "this": 100,
                      "province": 107,
                      "country": 109
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
                    "universe": "Population",
                    "year": "2011",
                    "table_id": "ACCESSTOINTERNET"
                  }
                }
              },
              "election_list": [
                "national_2014",
                "provincial_2014"
              ],
              "geography": {
                "parents_ordering": [
                  "municipality",
                  "province",
                  "country"
                ],
                "this": {
                  "parent_geoid": "municipality-CPT",
                  "geo_code": "19100058",
                  "full_name": "Ward 58 (19100058), City of Cape Town, Western Cape",
                  "square_kms": 11.0588,
                  "child_level": null,
                  "geo_level": "ward",
                  "short_name": "Ward 58 (19100058)",
                  "full_geoid": "ward-19100058",
                  "name": "Ward 58 (19100058), City of Cape Town, WC"
                },
                "comparatives": [
                  "province",
                  "country"
                ],
                "parents": {
                  "province": {
                    "parent_geoid": "country-ZA",
                    "geo_code": "WC",
                    "full_name": "Western Cape",
                    "square_kms": 131521.5591,
                    "child_level": "municipality",
                    "geo_level": "province",
                    "short_name": "Western Cape",
                    "full_geoid": "province-WC",
                    "name": "Western Cape"
                  },
                  "country": {
                    "parent_geoid": null,
                    "geo_code": "ZA",
                    "full_name": "South Africa",
                    "square_kms": null,
                    "child_level": "province",
                    "geo_level": "country",
                    "short_name": "South Africa",
                    "full_geoid": "country-ZA",
                    "name": "South Africa"
                  },
                  "municipality": {
                    "parent_geoid": "province-WC",
                    "geo_code": "CPT",
                    "full_name": "City of Cape Town, Western Cape",
                    "square_kms": 2439.78,
                    "child_level": "ward",
                    "geo_level": "municipality",
                    "short_name": "City of Cape Town",
                    "full_geoid": "municipality-CPT",
                    "name": "City of Cape Town, WC"
                  }
                }
              }
            }

        }
    }
    ];
};
