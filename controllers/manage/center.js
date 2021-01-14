// // Import Service
const centerService = require('../../service/manage/center.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Center';

// // Centers || Departments
// Create
exports.createCenter = async (req, res) => {
  try {
    let result = await centerService.createOne(req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All
exports.getAllCenter = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };
    
    let getAll = await centerService.getAll( paginatedRequest );
    return res.status(200).json(responseHelper.success(n, 1, getAll));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All Populate
exports.getAllCenterPopulate = async(req, res) => {
  try {
    let getAllPopulate = await centerService.getAllPopulate();
    return res.status(200).json(responseHelper.success(n, 1, getAllPopulate));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
}

// Get One
exports.getOneCenter = async (req, res) => {
  try {
    let getOne = await centerService.getOne(req.params.id);
    return res.status(200).json(responseHelper.success(n, 2, getOne));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get One Populate
exports.getOneCenterPopulate = async (req, res) => {
  try {
    let getOnePopulate = await centerService.getOnePopulate(req.params.id);
    return res.status(200).json(responseHelper.success(n, 2, getOnePopulate));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update
exports.updateCenter = async (req, res) => {
  try {
    let update = await centerService.updateOne(req.params.id, req.body);
    return res.status(200).json(responseHelper.success(n, 3, update))
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete
exports.deleteCenter = async (req, res) => {
  try {
    let deleteData = await centerService.deleteOne(req.params.id);
    return res.status(200).json(responseHelper.success(n, 4, deleteData));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};