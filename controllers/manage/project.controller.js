// // Import Service
const projectService = require('../../service/manage/project.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Project';

// // Project
// Create
exports.createProject = async (req, res) => {
  try {
    let result = await projectService.createOne(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get All
exports.getAllProject = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };
    
    let getAll = await projectService.getAll( paginatedRequest );
    res.status(200).json(responseHelper.success(n, 1, getAll));
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get All Populate
exports.getAllProjectPopulate = async (req, res) => {
  try {
    let getAllPopulate = await projectService.getAllPopulate();
    res.status(200).json(responseHelper.success(n, 1, getAllPopulate));
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get One
exports.getOneProject = async (req, res) => {
  try {
    let id = req.params.id;

    let getOne = await projectService.getOne(id);
    res.status(200).json(responseHelper.success(n, 2, getOne));
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get One Populate
exports.getOneProjectPopulate = async (req, res) => {
  try {
    let id = req.params.id;

    let getOnePopulate = await projectService.getOnePopulate(id);
    res.status(200).json(responseHelper.success(n, 2, getOnePopulate));
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Update
exports.updateProject = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;

    let update = await projectService.updateOne(id, body);
    res.status(200).json(responseHelper.success(n, 3, update))
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Delete
exports.deleteProject = async (req, res) => {
  try {
    let id = req.params.id;
    
    let deleteData = await projectService.deleteOne(id);
    res.status(200).json(responseHelper.success(n, 4, deleteData));
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}