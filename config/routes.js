// // Import npm
const express = require('express');

// Create Router
const router = express.Router();

const categoryRoutes = require('../routes/categoryRoutes');
const manageRoutes = require('../routes/manageRoutes');
const usersRoutes = require('../routes/usersRoutes');

router.use('/category', categoryRoutes);
router.use('/manage', manageRoutes);
router.use('/users', usersRoutes);

module.exports = router;