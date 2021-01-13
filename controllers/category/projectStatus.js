// // Import Service
const projectStatusService =  require('../../service/category/projectStatus.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// Name 
const n = 'States Project';

// // 2. States Project
// Create
exports.createProjectStatus = async (req, res) => {
  try {
    let create = await projectStatusService.createOne(rep.body);
    return res.status(200).json(responseHelper.success(n, 0, create));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All
exports.getAllProjectStatus = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };

    let getAll = await projectStatusService.getAll( paginatedRequest );
    return res.status(200).json(responseHelper.success(n, 1, getAll));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
}

// Get 1
exports.getOneProjectStatus = async (req, res) => {
  try {
    let getOne = await projectStatusService.getOne(req.params.id);
    return res.status(200).json(responseHelper.success(n, 2, getOne));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update
exports.updateProjectStatus = async (req, res) => {
  try {
    let update = await projectStatusService.updateOne(req.params.id, req.body);
    return res.status(200).json(responseHelper.success(n, 3, update));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete
exports.deleteProjectStatus = async (req, res) => {
  try {
    let deleteData = await projectStatusService.deleteOne(req.params.id);
    return res.status(200).json(responseHelper.success(n, 4, deleteData));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};