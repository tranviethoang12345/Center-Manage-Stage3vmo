// // Import npm
const express = require('express');

// // Import Controllers
const projectTypeControllers = require('../../controllers/category/projectType.controller');

// Create Router
const router = express.Router();

// // Project type
// Post => Create
router.post('/projectType', projectTypeControllers.createProjectType);

// Get => Get All
router.get('/projectType', projectTypeControllers.getListProjectType);

// Get => Get 1
router.get('/projectType/:id', projectTypeControllers.getProjectType);

// Update => Put
router.put('/projectType/:id', projectTypeControllers.updateProjectType);

// Delete => Delete
router.delete('/projectType/:id', projectTypeControllers.deleteProjectType);

// Export
module.exports = router;