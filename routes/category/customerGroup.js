const express = require('express');

const categoryCustomerGroupController = require('../../controllers/category/customerGroup');
const router = express.Router();

// // 4. Customer Group
//Post => Create
router.post('/customerGroup', categoryCustomerGroupController.createCustomerGroup);

//Get => Get All
router.get('/customerGroup', categoryCustomerGroupController.getAllProjectType);

//Get => Get 1
router.get('/customerGroup/:id', categoryCustomerGroupController.getOneCustomerGroup);

//Update => Put
router.put('/customerGroup/:id', categoryCustomerGroupController.updateCustomerGroup);

//Delete => Delete
router.delete('/customerGroup/:id', categoryCustomerGroupController.deleteCustomerGroup);

module.exports = router;