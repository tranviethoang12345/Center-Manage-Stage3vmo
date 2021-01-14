// // Import Service
const projectTypeService = require('../../service/category/projectType.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Project Type';

// // Project Type
// Create
exports.createProjectType = async (req, res) => {
  try {
    let result = await projectTypeService.createOne(req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All
exports.getAllProjectType = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };

    let getAll = await projectTypeService.getAll( paginatedRequest );
    return res.status(200).json(responseHelper.success(n, 1, getAll));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get 1
exports.getOneProjectType = async (req, res) => {
  try {
    let getOne = await projectTypeService.getOne(params.id);
    return res.status(200).json(responseHelper.success(n, 2, getOne));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update
exports.updateProjectType = async (req, res) => {
  try {
    let update = await projectTypeService.updateOne(req.params.id, req.body);
    return res.status(200).json(responseHelper.success(n, 3, update));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete
exports.deleteProjectType = async (req, res) => {
  try {
    let deleteData = await projectTypeService.deleteOne(req.params.id);
    return res.status(200).json(responseHelper.success(n, 4, deleteData));
  } catch (error) {
    return res.json(error.message);
  }
};