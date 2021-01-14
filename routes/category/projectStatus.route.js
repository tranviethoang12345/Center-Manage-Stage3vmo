// // Import npm
const express = require('express');

// // Import Controllers
const projectStatusControllers = require('../../controllers/category/projectStatus.controller');

// Create Router
const router = express.Router();

// // States Project
// Post => Create
router.post('/projectStatus', projectStatusControllers.createProjectStatus);

// Get => Get All
router.get('/projectStatus', projectStatusControllers.getListProjectStatus);

// Get => Get 1
router.get('/projectStatus/:id', projectStatusControllers.getOneProjectStatus);

// Update => Put
router.put('/projectStatus/:id', projectStatusControllers.updateOneProjectStatus);

// Delete => Delete
router.delete('/projectStatus/:id', projectStatusControllers.deleteOneProjectStatus);

// Export
module.exports = router;