// // Import Service
const projectStatusService =  require('../../service/category/projectStatus.service');

// // Import Helper
const statusHelper = require('../../helpers/status.helper');

// Name 
const n = 'States Project';

// // 2. States Project
// Create
exports.createProjectStatus = async (req, res) => {
  try {
    let body = rep.body;

    let create = await projectStatusService.createOne(body);
    res.status(200).json(statusHelper.success(n, 0, create));
  } catch (error) {
    res.status(500).json(statusHelper.error(error));
  }
};

// Get All
exports.getAllProjectStatus = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };

    let getAll = await projectStatusService.getAll( paginatedRequest );
    res.status(200).json(statusHelper.success(n, 1, getAll));
  } catch (error) {
    res.status(500).json(statusHelper.error(error));
  }
}

// Get 1
exports.getOneProjectStatus = async (req, res) => {
  try {
    let id = req.params.id

    let getOne = await projectStatusService.getOne(id);
    res.status(200).json(statusHelper.success(n, 2, getOne));
  } catch (error) {
    res.status(500).json(statusHelper.error(error));
  }
};

// Update
exports.updateProjectStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;

    let update = await projectStatusService.updateOne(id, body);
    res.status(200).json(statusHelper.success(n, 3, update));
  } catch (error) {
    res.status(500).json(statusHelper.error(error));
  }
};

// Delete
exports.deleteProjectStatus = async (req, res) => {
  try {
    let id = req.params.id;

    let deleteData = await projectStatusService.deleteOne(id);
    res.status(200).json(statusHelper.success(n, 4, deleteData));
  } catch (error) {
    res.status(500).json(statusHelper.error(error));
  }
};