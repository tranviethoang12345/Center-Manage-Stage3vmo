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

// Get => Get 1
router.get('/projects', projectControllers.getOneProject);

// Update => Put
router.put('/projects/:id', projectControllers.updateProject);

// Delete => Delete
router.delete('/projects/:id', projectControllers.deleteProject);

// Export
module.exports = router;