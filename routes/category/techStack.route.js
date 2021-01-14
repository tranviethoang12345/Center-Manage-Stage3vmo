// // Import npm
const express = require('express');

// // Import Controllers
const techStackControllers = require('../../controllers/category/techStack.controller');

// Create Router
const router = express.Router();

// // Tech Stack
// Post => Create
router.post('/techStack', techStackControllers.createTechStack);

// Get => Get All
router.get('/techStack', techStackControllers.getListTechStack);

// Get => Get 1
router.get('/techStack/:id', techStackControllers.getTechStack);

// Update => Put
router.put('/techStack/:id', techStackControllers.updateTechStack);

// Delete => Delete
router.delete('/techStack/:id', techStackControllers.deleteTechStack);

// Export
module.exports = router;