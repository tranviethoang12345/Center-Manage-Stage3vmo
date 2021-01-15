// // Import npm
const express = require('express');

// // Import Controllers
const techStackControllers = require('../../controllers/category/techStack.controller');

// Create Router
const router = express.Router();

// // Tech Stack
// Post => Create
router.post('/techStacks', techStackControllers.createTechStack);

// Get => Get All
router.get('/techStacks', techStackControllers.getListTechStack);

// Get => Get 1
router.get('/techStacks/:id', techStackControllers.getTechStack);

// Update => Put
router.put('/techStacks/:id', techStackControllers.updateTechStack);

// Delete => Delete
router.delete('/techStacks/:id', techStackControllers.deleteTechStack);

// Export
module.exports = router;