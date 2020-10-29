const routes = require('express').Router();
const controller = require('../controllers/code.controller');

routes.get('/stats', controller.getCodingStats);
routes.get('/user', controller.getUserInfo);

module.exports = routes;
