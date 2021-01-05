// // Import
const express = require('express');
const centerControllers = require('../../controllers/manage/center')

const router = express.Router();

// // 1. Centers, departments, divisions
//Post => Create
router.post('/centers', centerControllers.createCenter);

//Get => Get All
router.get('/centers', centerControllers.getAllCenter);

//Get => Get 1
router.get('/centers', centerControllers.getOneCenter);

//Update => Put
router.put('/centers/:id', centerControllers.updateCenter);

//Delete => Delete
router.delete('/centers/:id', centerControllers.deleteCenter);

module.exports = router;