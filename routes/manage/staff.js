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

// Get => Get 1
router.get('/staff/:id', staffControllers.getOneStaff);

// Update => Put
router.put('/staff/:id', staffControllers.updateStaff);

// Delete => Delete
router.delete('/staff/:id', staffControllers.deleteStaff);

// Export
module.exports = router;