// // Import npm
const express = require('express');

// // Import Controllers
const userControllers = require('./user.controller');

// // Import
const verifyToken = require('../../middleware/tokenHandler.middleware')

// Create Router
const router = express.Router();

// // User
// Post => Create
router.post('/register', userControllers.createUser);

// Verify
router.use(verifyToken.verifyToken)

// Get => Get All
router.get('/users', userControllers.getListUser);

// Get => Get 1
router.get('/users',  userControllers.getUser);

// Update => Put
router.put('/users/:id',  userControllers.updateUser);

// Delete => Delete
router.delete('/users/:id',  userControllers.deleteUser);

module.exports = router;