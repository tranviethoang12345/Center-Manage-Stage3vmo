const express = require('express');

const categoryStatesProjectController = require('../../controllers/category/statesProject');
const router = express.Router();

// // 2. States Project
//Post => Create
router.post('/statesProject', categoryStatesProjectController.createStatesProject);

//Get => Get All
router.get('/statesProject', categoryStatesProjectController.getAllProjectType);

//Get => Get 1
router.get('/statesProject/:id', categoryStatesProjectController.getOneStatesProject);

//Update => Put
router.put('/statesProject/:id', categoryStatesProjectController.updateStatesProject);

//Delete => Delete
router.delete('/statesProject/:id', categoryStatesProjectController.deleteStatesProject);

module.exports = router;