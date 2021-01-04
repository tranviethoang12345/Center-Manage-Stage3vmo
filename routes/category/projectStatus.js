const express = require('express');

const categoryProjectStatusController = require('../../controllers/category/projectStatus');
const router = express.Router();

// // 2. States Project
//Post => Create
router.post('/projectStatus', categoryProjectStatusController.createProjectStatus);

//Get => Get All
router.get('/projectStatus', categoryProjectStatusController.getAllProjectStatus);

//Get => Get 1
router.get('/projectStatus/:id', categoryProjectStatusController.getOneProjectStatus);

//Update => Put
router.put('/projectStatus/:id', categoryProjectStatusController.updateProjectStatus);

//Delete => Delete
router.delete('/projectStatus/:id', categoryProjectStatusController.deleteProjectStatus);

module.exports = router;