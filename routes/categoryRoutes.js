const express = require('express');

const categoryController = require('../controllers/categoryController');
const router = express.Router();

// // 1. Project type
//Post => Create
router.post('/projectType', categoryController.createProduct);

//Post => GetAll
router.get('/projectType', categoryController.getAllProjectType);

//Get => Get 1
router.get('/projectType/:id', categoryController.getOneProjectType);

//Update => Put
router.put('/projectType/:id', categoryController.updateProjectType);

//Delete => Delete
router.delete('/projectType/:id', categoryController.deleteProjectType);

// // 2. States Project
//Post => Create
router.post('/statesProject', categoryController.createStatesProject);

//Get => Get 1
router.get('/statesProject/:id', categoryController.getOneStatesProject);

//Update => Put
router.put('/statesProject/:id', categoryController.updateStatesProject);

//Delete => Delete
router.delete('/statesProject/:id', categoryController.deleteStatesProject);

// // 3. Tech Stack
//Post => Create
router.post('/techStack', categoryController.createTechStack);

//Get => Get 1
router.get('/techStack/:id', categoryController.getOneTechStack);

//Update => Put
router.put('/techStack/:id', categoryController.updateTechStack);

//Delete => Delete
router.delete('/techStack/:id', categoryController.deleteTechStack);

// // 4. Customer Group
//Post => Create
router.post('/customerGroup', categoryController.createCustomerGroup);

//Get => Get 1
router.get('/customerGroup/:id', categoryController.getOneCustomerGroup);

//Update => Put
router.put('/customerGroup/:id', categoryController.updateCustomerGroup);

//Delete => Delete
router.delete('/customerGroup/:id', categoryController.deleteCustomerGroup);

module.exports = router;