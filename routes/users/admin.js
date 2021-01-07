// // Import npm
const express = require('express');

// // Import Controllers
const adminControllers = require('../../controllers/users/admin')

// Create Router
const router = express.Router();

// // 4. Admin
// Post => Create
router.post('/admin', adminControllers.createAdmin);

// Get => Get All
router.get('/admin',  adminControllers.getAllAdmin);

// Get => Get 1
router.get('/admin',  adminControllers.getOneAdmin);

// Update => Put
router.put('/admin/:id',  adminControllers.updateAdmin);

// Delete => Delete
router.delete('/admin/:id',  adminControllers.deleteAdmin);

module.exports = router;