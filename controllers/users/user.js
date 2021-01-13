// // Import Service
const adminService = require('../../service/users/user.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'User';

// // 4. Account - User
// Create
exports.createAccount = async (req, res) => {
  try {
    let create = await adminService.createOne(req.body);
    return res.status(200).json(responseHelper.success(n, 0, create));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All
exports.getAllAdmin = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };

    let getAll = await adminService.getAll( paginatedRequest );
    return res.status(200).json(responseHelper.success(n, 1, getAll));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get 1
exports.getOneAdmin = async (req, res) => {
  try {
    let id = req.params.id;

    let getOne = await adminService.getOne(req.params.id);
    return res.status(200).json(responseHelper.success(n, 2, getOne));
  } catch (error) {    
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update
exports.updateAdmin = async (req, res) => {
  try {
    let update = await adminService.updateOne(req.params.id, req.body);
    return res.status(200).json(responseHelper.success(n, 3, update));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete
exports.deleteAdmin = async (req, res) => {
  try {
    let deleteData = await adminService.deleteOne(req.params.id);
    return res.status(200).json(responseHelper.success(n, 4, deleteData));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};