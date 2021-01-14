// // Import Service
const projectStatusService =  require('../../service/category/projectStatus.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// Name 
const n = 'States Project';

// // States Project
// Create Project Status
exports.createProjectStatus = async (req, res) => {
  try {
    let result = await projectStatusService.createProjectStatus(rep.body);
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

    let getAll = await projectStatusService.getListProjectStatus( paginatedRequest );
    return res.status(200).json(responseHelper.success(n, 1, getAll));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
}

// // :id -> req

// Get 1 Project Status
exports.getOneProjectStatus = async (req, res) => {
  try {
    let result = await projectStatusService.getOneProjectType(req.params.id);
    return res.status(200).json(responseHelper.success(n, 2, result));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update 1 Project Status
exports.updateOneProjectStatus = async (req, res) => {
  try {
    let update = await projectStatusService.updateOneProjectStatus(req.params.id, req.body);
    return res.status(200).json(responseHelper.success(n, 3, update));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete 1 Project Status
exports.deleteOneProjectStatus = async (req, res) => {
  try {
    let deleteData = await projectStatusService.deleteOneProjectStatus(req.params.id);
    return res.status(200).json(responseHelper.success(n, 4, deleteData));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};