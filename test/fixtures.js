module.exports = function() {
    return [{
        "request": {
            "method": "GET",
            "url": "http://wazimap.co.za/place-search/json/",
            "data": {
                "q": "Claremont"
            }
        },
        "response": {
            "code": 200,
            "data": {
                "form": {},
                "files": {},
                "url": "http://wazimap.co.za/place-search/json/",
                "args": {},
                "json" : {
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
            }]
                }
            }
        }
    }];
};
