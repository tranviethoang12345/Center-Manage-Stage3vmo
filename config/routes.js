// // Import npm
const express = require('express');

// Create Router
const router = express.Router();

const categoryRoutes = require('../routes/categoryRoutes');
const manageRoutes = require('../routes/manageRoutes');
const adminRoutes = require('../routes/adminRoutes');

router.use('/category', categoryRoutes);
router.use('/manage', manageRoutes);
router.use('/admin', adminRoutes);

module.exports = router;