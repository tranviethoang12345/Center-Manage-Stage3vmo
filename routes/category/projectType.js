const express = require('express');

const categoryProjectTypeController = require('../../controllers/category/projectType');
const router = express.Router();

// // 1. Project type

//Post => Create
router.post('/projectType', categoryProjectTypeController.createProjectType);

//Get => Get All
router.get('/projectType', categoryProjectTypeController.getAllProjectType);

//Get => Get 1
router.get('/projectType/:id', categoryProjectTypeController.getOneProjectType);

//Update => Put
router.put('/projectType/:id', categoryProjectTypeController.updateProjectType);

//Delete => Delete
router.delete('/projectType/:id', categoryProjectTypeController.deleteProjectType);

module.exports = router;