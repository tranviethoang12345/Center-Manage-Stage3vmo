const express = require('express');

const projectStatusControllers = require('../../controllers/category/projectStatus');
const router = express.Router();

// // 2. States Project
//Post => Create
router.post('/projectStatus', projectStatusControllers.createProjectStatus);

//Get => Get All
router.get('/projectStatus', projectStatusControllers.getAllProjectStatus);

//Get => Get 1
router.get('/projectStatus/:id', projectStatusControllers.getOneProjectStatus);

//Update => Put
router.put('/projectStatus/:id', projectStatusControllers.updateProjectStatus);

//Delete => Delete
router.delete('/projectStatus/:id', projectStatusControllers.deleteProjectStatus);

module.exports = router;