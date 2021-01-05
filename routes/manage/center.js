// // Import npm
const express = require('express');

// // Import Controllers
const centerControllers = require('../../controllers/manage/center')

// Create Router
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

// Export
module.exports = router;