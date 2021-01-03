const express = require('express');
const routes = express.Router();

const categoryRoutes = require('../routes/categoryRoutes')

routes.use('/category', categoryRoutes);

module.exports = routes;