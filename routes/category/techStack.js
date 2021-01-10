// // Import npm
const express = require('express');

// // Import Controllers
const techStackControllers = require('../../controllers/category/techStack');

// // Import Service
// const paginatedResultService = require('../../service/paginatedResult');

// Create Router
const router = express.Router();

// // 3. Tech Stack
// Post => Create
router.post('/techStack', techStackControllers.createTechStack);

// Get => Get All
router.get('/techStack', techStackControllers.getAllTechStack);

// Get => Get 1
router.get('/techStack/:id', techStackControllers.getOneTechStack);

// Update => Put
router.put('/techStack/:id', techStackControllers.updateTechStack);

// Delete => Delete
router.delete('/techStack/:id', techStackControllers.deleteTechStack);

// Export
module.exports = router;