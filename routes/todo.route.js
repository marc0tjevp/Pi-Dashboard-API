const routes = require('express').Router();
const controller = require('../controllers/todo.controller');

routes.get('/', controller.getAllItems);
routes.get('/:id', controller.getItemById);
routes.post('/:id/close', controller.closeItemById);

module.exports = routes;
