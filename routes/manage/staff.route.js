// // Import npm
const express = require('express');

// // Import Controllers
const staffControllers = require('../../controllers/manage/staff');

// Create Router
const router = express.Router();

// // 2. Staff – HR
// Post => Create
router.post('/staff', staffControllers.createStaff);

// Get => Get All
router.get('/staff', staffControllers.getAllStaff);

// Get  => Get All Populate
router.get('/staff/populate', staffControllers.getAllStaffPopulate);

// Get => Get 1
router.get('/staff/:id', staffControllers.getOneStaff);

// Get => Get 1 Populate
router.get('/staff/populate/:id', staffControllers.getOneStaffPopulate);

// Update => Put
router.put('/staff/:id', staffControllers.updateStaff);

// Delete => Delete
router.delete('/staff/:id', staffControllers.deleteStaff);

// Export
module.exports = router;