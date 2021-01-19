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
router.get('/projectStatus/:id', projectStatusControllers.getProjectStatus);

// Update => Put
router.put('/projectStatus/:id', projectStatusControllers.updateProjectStatus);

// Delete => Delete
router.delete('/projectStatus/:id', projectStatusControllers.deleteProjectStatus);

// Export
module.exports = router;