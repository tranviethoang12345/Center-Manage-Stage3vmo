const express = require('express');

const techStackControllers = require('../../controllers/category/techStack');
const router = express.Router();

// // 3. Tech Stack
//Post => Create
router.post('/techStack', techStackControllers.createTechStack);

//Get => Get All
router.get('/techStack', techStackControllers.getAllTechStack);

//Get => Get 1
router.get('/techStack/:id', techStackControllers.getOneTechStack);

//Update => Put
router.put('/techStack/:id', techStackControllers.updateTechStack);

//Delete => Delete
router.delete('/techStack/:id', techStackControllers.deleteTechStack);

module.exports = router;