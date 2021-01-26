// // Import npm
const express = require('express');

// // Import Controllers
const projectTypeControllers = require('./projectType.controller');

// Create Router
const router = express.Router();

// // Project type
// Post => Create
router.post('/projectTypes', projectTypeControllers.createProjectType);

// Get => Get All
router.get('/projectTypes', projectTypeControllers.getListProjectType);

// Get => Get 1
router.get('/projectTypes/:id', projectTypeControllers.getProjectType);

// Update => Put
router.put('/projectTypes/:id', projectTypeControllers.updateProjectType);

// Delete => Delete
router.delete('/projectTypes/:id', projectTypeControllers.deleteProjectType);

// Export
module.exports = router;