// // Import Service
const projectTypeService =  require('../../service/category/projectType.service');

// // Import Helper
const statusHelper = require('../../helpers/status.helper');

// Name
const n = 'Project Type';

// // 1. Project Type
// Create
exports.createProjectType = async (req, res) => {
  try {
    let body = req.body;

    let create = await projectTypeService.createOne(body);
    res.status(200).json(statusHelper.success(n, 0, create));
  } catch (error) {
    res.status(500).json(statusHelper.error(error));
  }
};

// Get All
exports.getAllProjectType = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };

    let getAll = await projectTypeService.getAll( paginatedRequest );
    res.status(200).json(statusHelper.success(n, 1, getAll));
  } catch (error) {
    res.status(500).json(statusHelper.error(error));
  }
};

// Get 1
exports.getOneProjectType = async (req, res) => {
  try {
    let id = req.params.id;

    let getOne = await projectTypeService.getOne(id);
    res.status(200).json(statusHelper.success(n, 2, getOne));
  } catch (error) {
    res.status(500).json(statusHelper.error(error));
  }
};

// Update
exports.updateProjectType = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;

    let update = await projectTypeService.updateOne(id, body);
    res.status(200).json(statusHelper.success(n, 3, update));
  } catch (error) {
    res.status(500).json(statusHelper.error(error));
  }
};

// Delete
exports.deleteProjectType = async (req, res) => {
  try {
    let id = req.params.id;
    
    let deleteData = await projectTypeService.deleteOne(id);
    res.status(200).json(statusHelper.success(n, 4, deleteData));
  } catch (error) {
    res.json(error.message);
  }
};