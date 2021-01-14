// // Import npm
const express = require('express');

// // Import Controllers
const centerControllers = require('../../controllers/manage/center')

// Create Router
const router = express.Router();

// // 1. Centers, departments, divisions
// Post => Create
router.post('/centers', centerControllers.createCenter);

// Get => Get All
router.get('/centers', centerControllers.getAllCenter);

// Get => Get All Populate
router.get('/centers/populate', centerControllers.getAllCenterPopulate);

// Get => Get 1
router.get('/centers', centerControllers.getOneCenter);

// Get => Get 1 Populate
router.get('/centers/populate/:id', centerControllers.getOneCenterPopulate);

// Update => Put
router.put('/centers/:id', centerControllers.updateCenter);

// Delete => Delete
router.delete('/centers/:id', centerControllers.deleteCenter);

// Export
module.exports = router;