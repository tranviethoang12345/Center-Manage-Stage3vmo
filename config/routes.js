const express = require('express');
const routes = express.Router();

const categoryRoutes = require('../routes/categoryRoutes')
const manageRoutes = require('../routes/manageRoutes')
const adminRoutes = require('../routes/adminRoutes')

routes.use('/category', categoryRoutes);
routes.use('/manage', manageRoutes);
routes.use('/admin', adminRoutes);

module.exports = routes;