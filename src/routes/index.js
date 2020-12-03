const express = require('express');

const classRouter = require('./classes.routes');

const routes = express.Router();

routes.use('/classes', classRouter);

module.exports = routes;
