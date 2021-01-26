// // Import npm
const express = require('express');

// // Import Controllers
const centerControllers = require('./center.controller')

// Create Router
const router = express.Router();

// // Centers, departments
// Post => Create
router.post('/centers', centerControllers.createCenter);

// Get => Get All 
router.get('/centers', centerControllers.getListCenter);

// Get => Get All Populate
router.get('/centers/populate', centerControllers.getListCenterPopulate);

// Get => Get 1 
router.get('/centers', centerControllers.getCenter);

// Get => Get 1 Populate
router.get('/centers/populate/:id', centerControllers.getCenterPopulate);

// Update => Put 
router.put('/centers/:id', centerControllers.updateCenter);

// Delete => Delete
router.delete('/centers/:id', centerControllers.deleteCenter);

// Export
module.exports = router;