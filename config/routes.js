// // Import npm
const express = require('express');

// Create Router
const router = express.Router();

const categoryRoutes = require('../routes/category.routes');
const manageRoutes = require('../routes/manage.routes');
const usersRoutes = require('../routes/users.routes');

router.use('/category', categoryRoutes);
router.use('/manage', manageRoutes);
router.use('/users', usersRoutes);

module.exports = router;