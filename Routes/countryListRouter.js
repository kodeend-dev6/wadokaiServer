const express = require('express');
const { getAllCountries, getSingleCountry, createCountry } = require('../Controllers/countyListController');
const countryListRouter = express.Router();


countryListRouter.post('/', createCountry);
countryListRouter.get('/', getAllCountries);
countryListRouter.get('/:slug', getSingleCountry);


module.exports = countryListRouter;