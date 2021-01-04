const express = require('express');
const routes = express.Router();

const categoryRoutes = require('../routes/categoryRoutes')
const manageRoutes = require('../routes/manageRoutes')

routes.use('/category', categoryRoutes);
routes.use('/manage', manageRoutes);

module.exports = routes;