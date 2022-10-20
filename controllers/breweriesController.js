const Brewery = require('../models/Brewery');

const showBreweries = (req, res) => {
    try {
        const breweries = Brewery.showBreweries();
        res.send(breweries);
    } catch (err) {
        res.status(500).send({error: "Something went wrong on our side"})
    }
}

const showBrewery = (req, res) => {
    const index = parseInt(req.params.index);

    try {
        const brewery = Brewery.showBrewery(index);
        res.send(brewery);
    } catch (err) {
        res.status(404).send({error: "Brewery not found"});
    }
}

const deleteBrewery = (req, res) => {
    const index = parseInt(req.params.index);

    try {
        const brewery = Brewery.showBrewery(index);
        brewery.deleteBrewery()
        res.status(204).send();
    } catch (err) {
        res.status(404).send({error: "Brewery not found"})
    }
}

const updateBrewery = (req, res) => {
    const index = parseInt(req.params.index);

    try {
        const brewery = Brewery.showBrewery(index);
        brewery.updateBrewery(req.body)
        res.send();
    } catch (err) {
        res.status(404).send({error: "Brewery not found"})
    }

}


module.exports = { showBreweries, showBrewery, deleteBrewery, updateBrewery};