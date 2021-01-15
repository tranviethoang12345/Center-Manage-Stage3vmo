// // Import npm
const express = require('express');

// // Import Controllers
const userControllers = require('../../controllers/users/user.controller')

// Create Router
const router = express.Router();

// // User
// Post => Create
router.post('/signup', userControllers.createUser);

// Get => Get All
router.get('/signup',  userControllers.getListUser);

// Get => Get 1
router.get('/signup',  userControllers.getUser);

// Update => Put
router.put('/signup/:id',  userControllers.updateUser);

// Delete => Delete
router.delete('/signup/:id',  userControllers.deleteUser);

module.exports = router;