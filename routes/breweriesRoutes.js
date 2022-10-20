const express = require('express');
const router = express.Router();
const breweriesController = require('../controllers/breweriesController');

router.get('/', breweriesController.showBreweries);
router.get('/:index', breweriesController.showBrewery);
router.delete("/:index", breweriesController.deleteBrewery);
router.patch("/:index", breweriesController.updateBrewery);

module.exports = router;