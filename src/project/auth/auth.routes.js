// // Import npm
const express = require('express');

// // Import Controllers
const userControllers = require('./auth.controller');

// Create Router
const router = express.Router();

// // Authenticator
// Post => Login
router.post('/login', userControllers.login);

// Delete => Logout
// router.post('/logout', userControllers.logout);

module.exports = router;