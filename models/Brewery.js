const breweries = require('../breweries');


class Brewery {
    constructor(brewery) {
        this.id = brewery.id;
        this.name = brewery.name;
        this.brewery_type = brewery.brewery_type;
        this.street = brewery.street;
        this.address_2 = brewery.address_2;
        this.address_3 = brewery.address_3;
        this.city = brewery.city;
        this.state = brewery.state;
        this.county_province = brewery.county_province;
        this.postal_code = brewery.postal_code;
        this.country = brewery.country;
        this.longitude = brewery.longitude;
        this.latitude = brewery.latitude;
        this.phone = brewery.phone;
        this.website_url = brewery.website_url;
        this.updated_at = brewery.updated_at;
        this.created_at = brewery.created_at;
    }

    static showBreweries() {
        return breweries.map((b, i) => new Brewery(b, i));
    }

    static showBrewery(idx) {
        if (idx < breweries.length && idx >= 0) {
            return new Brewery(breweries[idx], idx);
        } else {
            throw "Brewery not found";
        }
    }

    deleteBrewery() {
        breweries[this.id] = {};
    }

    updateBrewery(data) {
        Object.assign(breweries[this.id], data);
        console.log(Object.assign(breweries[this.id],data));
        
    }
}

module.exports = Brewery;