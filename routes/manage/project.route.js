// // Import npm
const express = require('express');

// // Import Controllers
const projectControllers = require('../../controllers/manage/project.controller')

// Create Router
const router = express.Router();

// // Project
// Post => Create
router.post('/projects', projectControllers.createProject);

// Get => Get All
router.get('/projects', projectControllers.getListProject);

// Get => Get All Populate
router.get('/projects/populate', projectControllers.getListProjectPopulate);

// Get => Get 1
router.get('/projects/:id', projectControllers.getProject);

// Get => Get 1 Populate
router.get('/projects/populate/:id', projectControllers.getProjectPopulate);

// Update => Put
router.put('/projects/:id', projectControllers.updateProject);

// Delete => Delete
router.delete('/projects/:id', projectControllers.deleteProject);

// Export
module.exports = router;