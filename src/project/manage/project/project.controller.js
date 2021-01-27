// // Import Service
const projectService = require('./project.service');

// // Import Helper
const responseHelper = require('../../../helpers/response.helper');

// // Project
// Create Project
exports.createProject = async (req, res) => {
  try {
    const result = await projectService.createProject(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get All List Project
exports.getListProject = async (req, res) => {
  try {
    
    const result = await projectService.getListProject( req.query );
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get All List Project - Populate
exports.getListProjectPopulate = async (req, res) => {
  try {
    const result = await projectService.getListProjectPopulate(req.query);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// // :id -> req

// Get 1 Project
exports.getProject = async (req, res) => {
  try {
    const result = await projectService.getProject(req.params.id);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get 1 Project - Populate
exports.getProjectPopulate = async (req, res) => {
  try {
    const result = await projectService.getProjectPopulate(req.params);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Update 1 Project
exports.updateProject = async (req, res) => {
  try {
    const result = await projectService.updateProject(req.params, req.body);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Delete 1 Project
exports.deleteProject = async (req, res) => {
  try {
    const result = await projectService.deleteProject(req.params);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}