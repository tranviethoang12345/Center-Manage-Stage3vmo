// // Import npm
const express = require('express');

// // Import Controllers
const userControllers = require('../../controllers/users/user.controller')

// Create Router
const router = express.Router();

// // Authenticator
// Post => Login
router.post('/login', userControllers.login);

// // User
// Post => Create
router.post('/register', userControllers.createUser);

// Get => Get All
router.get('/users',  userControllers.getListUser);

// Get => Get 1
router.get('/users',  userControllers.getUser);

// Update => Put
router.put('/users/:id',  userControllers.updateUser);

// Delete => Delete
router.delete('/users/:id',  userControllers.deleteUser);

module.exports = router;