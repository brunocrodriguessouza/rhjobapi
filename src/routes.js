const express = require('express');

const JobController = require('./controllers/JobController');

const routes = express.Router();

routes.post('/jobs', JobController.create);
routes.get('/jobs', JobController.index);
routes.delete('/jobs/:id', JobController.delete);

module.exports = routes;