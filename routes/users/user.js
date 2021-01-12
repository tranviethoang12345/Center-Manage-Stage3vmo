// // Import npm
const express = require('express');

// // Import Controllers
const adminControllers = require('../../controllers/users/user')

// Create Router
const router = express.Router();

// // 4. Admin
// Post => Create
router.post('/signup', adminControllers.createAdmin);

// Get => Get All
router.get('/signup',  adminControllers.getAllAdmin);

// Get => Get 1
router.get('/signup',  adminControllers.getOneAdmin);

// Update => Put
router.put('/signup/:id',  adminControllers.updateAdmin);

// Delete => Delete
router.delete('/signup/:id',  adminControllers.deleteAdmin);

module.exports = router;