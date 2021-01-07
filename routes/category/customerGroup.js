// // Import npm
const express = require('express');

// // Import Controllers
const customerGroupControllers = require('../../controllers/category/customerGroup');

// Create Router
const router = express.Router();

// // 4. Customer Group
// Post => Create
router.post('/customerGroup', customerGroupControllers.createCustomerGroup);

// Get => Get All
router.get('/customerGroup', customerGroupControllers.getAllCustomerGroup);

// Get => Get 1
router.get('/customerGroup/:id', customerGroupControllers.getOneCustomerGroup);

// Update => Put
router.put('/customerGroup/:id', customerGroupControllers.updateCustomerGroup);

// Delete => Delete
router.delete('/customerGroup/:id', customerGroupControllers.deleteCustomerGroup);

// Export
module.exports = router;