// // Import Service
const projectStatusService =  require('../../services/category/projectStatus.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// Name 
const n = 'States Project';

// // States Project
// Create Project Status
exports.createProjectStatus = async (req, res) => {
  try {
    let result = await projectStatusService.createProjectStatus(req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get List Project Status
exports.getListProjectStatus = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };
    let result = await projectStatusService.getListProjectStatus( paginatedRequest );
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
}

// // :id -> req

// Get 1 Project Status
exports.getProjectStatus = async (req, res) => {
  try {
    let result = await projectStatusService.getProjectType(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update 1 Project Status
exports.updateProjectStatus = async (req, res) => {
  try {
    let result = await projectStatusService.updateProjectStatus(req.params.id, req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete 1 Project Status
exports.deleteProjectStatus = async (req, res) => {
  try {
    let result = await projectStatusService.deleteProjectStatus(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};