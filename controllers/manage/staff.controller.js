// // Import Service
const staffService = require('../../service/manage/staff.service');

// // Import Helpers
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Staff';

// // Staff - HR
// Create
exports.createStaff = async (req, res) => {
  try {
    let result = await staffService.createOne(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get All
exports.getAllStaff = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };
    
    let getAll = await staffService.getAll( paginatedRequest );
    res.status(200).json(responseHelper.success(n, 1, getAll));
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get All Populate
exports.getAllStaffPopulate = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);

    let paginatedRequest = { page, limit };

    let getAllPopulate = await staffService.getAllPopulate( paginatedRequest );
    res.status(200).json(responseHelper.success(n, 1, getAllPopulate));
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get One
exports.getOneStaff = async (req, res) => {
  try {
    let id = req.params.id;

    let getOne = await staffService.getOne(id);
    res.status(200).json(responseHelper.success(n, 2, getOne));
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get One Populate
exports.getOneStaffPopulate = async (req, res) => {
  try {
    let id = req.params.id;

    let getOnePopulate = await staffService.getOnePopulate(id);
    res.status(200).json(responseHelper.success(n, 2, getOnePopulate));
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Update
exports.updateStaff = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;

    let update = await staffService.updateOne(id, body);
    res.status(200).json(responseHelper.success(n, 3, update))
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Delete
exports.deleteStaff = async (req, res) => {
  try {
    let id = req.params.id;
    
    let deleteData = await staffService.deleteOne(id);
    res.status(200).json(responseHelper.success(n, 4, deleteData));
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}