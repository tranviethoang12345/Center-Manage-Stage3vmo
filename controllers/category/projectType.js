// // Import Service
const projectTypeService =  require('../../service/category/projectType');
const statusService = require('../../service/message/status');

// Name
const n = 'Project Type';

// // 1. Project Type
// Create
exports.createProjectType = async (req, res) => {
  try {
    let body = req.body;

    let create = await projectTypeService.createOne(body);
    res.status(200).json(statusService.success(n, 0, create));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Get All
exports.getAllProjectType = async (req, res) => {
  try {
    let getAll = await projectTypeService.getAll();
    res.status(200).json(statusService.success(n, 1, getAll));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Get 1
exports.getOneProjectType = async (req, res) => {
  try {
    let id = req.params.id;

    let getOne = await projectTypeService.getOne(id);
    res.status(200).json(statusService.success(n, 2, getOne));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Update
exports.updateProjectType = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;

    let update = await projectTypeService.updateOne(id, body);
    res.status(200).json(statusService.success(n, 3, update));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Delete
exports.deleteProjectType = async (req, res) => {
  try {
    let id = req.params.id;
    
    let deleteData = await projectTypeService.deleteOne(id);
    res.status(200).json(statusService.success(n, 4, deleteData));
  } catch (error) {
    res.json(error.message);
  }
};