const categoryModel = require('../models/categoryModel');
const serviceProjectType =  require('../service/serviceProjectType')

// // 1. Project type
// Create
exports.createProjectType = async(req, res) => {
  try {
    let body = req.body;
    let create = await serviceProjectType.createOne(body);
    res.json(create)
  } catch (error) {
    res.json(error.message);
  }
};

// Get All
exports.getAllProjectType = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
};

// Get 1
exports.getOneProjectType = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
};

// Update
exports.updateProjectType = async(req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await categoryModel.projectType.findOneAndUpdate({_id: id}, body, {new: true});
    res.json(update);
  } catch (error) {
    console.log(error);
  }
};

// Delete
exports.deleteProjectType = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await categoryModel.projectType.deleteOne({_id: id});
    res.json(deleteData);
  } catch (error) {
    console.log(error);
  }
};