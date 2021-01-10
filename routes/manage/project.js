// // Import npm
const express = require('express');

// // Import Controllers
const projectControllers = require('../../controllers/manage/project')

// Create Router
const router = express.Router();

// // 3. Project
// Post => Create
router.post('/projects', projectControllers.createProject);

// Get => Get All
router.get('/projects', projectControllers.getAllProject);

// Get => Get All Populate
router.get('/projects/populate', projectControllers.getAllProjectPopulate);

// Get => Get 1
router.get('/projects/:id', projectControllers.getOneProject);

// Get => Get 1 Populate
router.get('/projects/populate/:id', projectControllers.getAllProjectPopulate);

// Update => Put
router.put('/projects/:id', projectControllers.updateProject);

// Delete => Delete
router.delete('/projects/:id', projectControllers.deleteProject);

// Export
module.exports = router;