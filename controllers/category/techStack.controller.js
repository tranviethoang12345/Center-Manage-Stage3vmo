// // Import Service
const techStackService = require('../../service/category/techStack.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Tech Stack';

// // Tech Stack
// Create TechStack
exports.createTechStack = async (req, res) => {
  try {
    let result = await techStackService.createOne(req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All List TechStack
exports.getListTechStack = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };

    let getAll = await techStackService.getAllTechStack( paginatedRequest );
    return res.status(200).json(responseHelper.success(n, 1, getAll));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// // :id -> req

// Get 1 TechStack
exports.getTechStack = async (req, res) => {
  try {
    let getOne = await techStackService.getTechStack(req.params.id);
    return res.status(200).json(responseHelper.success(n, 2, getOne));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update 1 TechStack
exports.updateTechStack = async (req, res) => {
  try {
    let update = await techStackService.updateTechStack(req.params.id, req.body);
    return res.status(200).json(responseHelper.success(n, 3, update));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete 1 TechStack
exports.deleteTechStack = async (req, res) => {
  try {
    let deleteData = await techStackService.deleteTechStack(req.params.id);
    return res.status(200).json(responseHelper.success(n, 4, deleteData));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};