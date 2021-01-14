// // Import Service
const techStackService = require('../../service/category/techStack.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Tech Stack';

// // Tech Stack
// Create
exports.createTechStack = async (req, res) => {
  try {
    let result = await techStackService.createOne(req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All
exports.getAllTechStack = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };

    let getAll = await techStackService.getAll( paginatedRequest );
    return res.status(200).json(responseHelper.success(n, 1, getAll));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get 1
exports.getOneTechStack = async (req, res) => {
  try {
    let getOne = await techStackService.getOne(req.params.id);
    return res.status(200).json(responseHelper.success(n, 2, getOne));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update
exports.updateTechStack = async (req, res) => {
  try {
    let update = await techStackService.updateOne(req.params.id, req.body);
    return res.status(200).json(responseHelper.success(n, 3, update));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete
exports.deleteTechStack = async (req, res) => {
  try {
    let deleteData = await techStackService.deleteOne(req.params.id);
    return res.status(200).json(responseHelper.success(n, 4, deleteData));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};