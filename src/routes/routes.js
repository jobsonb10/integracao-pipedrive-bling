const routes = require('express').Router();
const DealsController = require('../controllers/DealsController');

routes.get("/deals", DealsController.getAllDeals);
routes.get("/wonDeals", DealsController.getWonDeals);

module.exports = routes;
