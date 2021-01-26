// // Import Service
const projectTypeService = require('../projectStatus/projectStatus.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Project Type';

// // Project Type
// Create
exports.createProjectType = async (req, res) => {
  try {
    let result = await projectTypeService.createProjectType(req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All List Project Type
exports.getListProjectType = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };

    let result = await projectTypeService.getListProjectType( paginatedRequest );
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// // :id -> req

// Get 1 Project Type
exports.getProjectType = async (req, res) => {
  try {
    let result = await projectTypeService.getProjectType(params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update 1 Project Type
exports.updateProjectType = async (req, res) => {
  try {
    let result = await projectTypeService.updateProjectType(req.params.id, req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete 1 ProjectType
exports.deleteProjectType = async (req, res) => {
  try {
    let result = await projectTypeService.deleteProjectType(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.json(error.message);
  }
};