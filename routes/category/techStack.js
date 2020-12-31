const express = require('express');

const categoryTechStackController = require('../../controllers/category/techStack');
const router = express.Router();

// // 3. Tech Stack
//Post => Create
router.post('/techStack', categoryTechStackController.createTechStack);

//Get => Get All
router.get('/techStack', categoryTechStackController.getAllProjectType);

//Get => Get 1
router.get('/techStack/:id', categoryTechStackController.getOneTechStack);

//Update => Put
router.put('/techStack/:id', categoryTechStackController.updateTechStack);

//Delete => Delete
router.delete('/techStack/:id', categoryTechStackController.deleteTechStack);

module.exports = router;
