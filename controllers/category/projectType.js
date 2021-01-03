const categoryModel = require('../../models/category/projectType');
const serviceProjectType =  require('../../service/category/projectType')

// // 1. Project type
// Create
exports.createProjectType = async(req, res) => {
  try {
    let body = req.body;
    let create = await serviceProjectType.createOne(body);
    res.status(200).json({
      message: 'Create Project Type successful',
      messageCode: 'CREATE_PROJECT_TYPE_SUCCESSFUL',
      data: create,
      status: 200
    })
  } catch (error) {
    res.json(error.message);
  }
};

// Get All
exports.getAllProjectType = async(req, res) => {
  try {
    
  } catch (error) {
    res.json(error.message);
  }
};

// Get 1
exports.getOneProjectType = async(req, res) => {
  try {
    let id = req.params.id;
    let getOne = await 
  } catch (error) {
    res.json(error.message);
  }
};

// Update
exports.updateProjectType = async(req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await serviceProjectType.updateOne(id, body);
    res.json(update);
    res.status(200).json({
      message: 'Update Project Type successful',
      messageCode: 'UPDATE_PROJECT_TYPE_SUCCESSFUL',
      data: update,
      status: 200
    })
  } catch (error) {
    res.json(error.message);
  }
};

// Delete
exports.deleteProjectType = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await serviceProjectType.deleteOne(id);
    res.status(200).json({
      message: 'Delete Project Type successful',
      messageCode: 'DELETE_PROJECT_TYPE_SUCCESSFUL',
      data: deleteData,
      status: 200
    });
  } catch (error) {
    res.json(error.message);
  }
};