// // Import Service
const projectService = require('./project.service');

// // Import Helper
const responseHelper = require('../../../helpers/response.helper');

// Name
const n = 'Project';

// // Project
// Create Project
exports.createProject = async (req, res) => {
  try {
    let result = await projectService.createProject(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get All List Project
exports.getListProject = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };
    
    let result = await projectService.getListProject( paginatedRequest );
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get All List Project - Populate
exports.getListProjectPopulate = async (req, res) => {
  try {
    let result = await projectService.getListProjectPopulate(req.query);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// // :id -> req

// Get 1 Project
exports.getProject = async (req, res) => {
  try {
    let result = await projectService.getProject(req.params.id);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get 1 Project - Populate
exports.getProjectPopulate = async (req, res) => {
  try {
    let id = req.params.id;

    let result = await projectService.getProjectPopulate(id);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Update 1 Project
exports.updateProject = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;

    let result = await projectService.updateProject(id, body);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Delete 1 Project
exports.deleteProject = async (req, res) => {
  try {
    let id = req.params.id;
    
    let deleteData = await projectService.deleteProject(id);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}