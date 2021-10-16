const routes = require('express').Router();
const DealsController = require('../controllers/DealsController');

routes.get("/deals", DealsController.getAll);

module.exports = routes;