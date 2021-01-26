// // Import npm
const express = require('express');

// // Import Controllers
const customerGroupControllers = require('./customerGroup.controller');

// Create Router
const router = express.Router();

// // Customer Group
// Post => Create
router.post('/customerGroups', customerGroupControllers.createCustomerGroup);

// Get => Get All
router.get('/customerGroups', customerGroupControllers.getListCustomerGroup);

// Get => Get 1
router.get('/customerGroups/:id', customerGroupControllers.getCustomerGroup);

// Update => Put
router.put('/customerGroups/:id', customerGroupControllers.updateCustomerGroup);

// Delete => Delete
router.delete('/customerGroups/:id', customerGroupControllers.deleteCustomerGroup);

// Export
module.exports = router;