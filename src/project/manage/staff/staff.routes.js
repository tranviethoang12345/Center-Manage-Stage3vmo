// // Import npm
const express = require('express');

// // Import Controllers
const staffControllers = require('./staff.controller');

// Create Router
const router = express.Router();

// // Staff – HR
// Post => Create
router.post('/staff', staffControllers.createStaff);

// Get => Get All
router.get('/staff', staffControllers.getListStaff);

// Get  => Get All Populate
router.get('/staff/populate', staffControllers.getListStaffPopulate);

// Get => Get 1
router.get('/staff/:id', staffControllers.getStaff);

// Get => Get 1 Populate
router.get('/staff/populate/:id', staffControllers.getStaffPopulate);

// Update => Put
router.put('/staff/:id', staffControllers.updateStaff);

// Delete => Delete
router.delete('/staff/:id', staffControllers.deleteStaff);

// Export
module.exports = router;