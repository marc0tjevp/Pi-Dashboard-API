const routes = require('express').Router();
const todoRoutes = require('./todo.route');

routes.get('/', (req, res) =>
  res.status(200).json({ message: 'Hello World!' })
);

routes.use('/todo', todoRoutes);

routes.use('*', (req, res) =>
  res.status(404).json({ message: 'Not found' }).end()
);

module.exports = routes;
