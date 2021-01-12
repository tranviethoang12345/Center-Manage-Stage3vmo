// // Import Service
const adminService = require('../../service/users/user');
const statusService = require('../../service/message/status');

// Name
const n = 'User';

// // 3. Tech Stack
// Create
exports.createAdmin = async (req, res) => {
  try {
    let body = req.body;

    let create = await adminService.createOne(body);
    res.status(200).json(statusService.success(n, 0, create));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Get All
exports.getAllAdmin = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };

    let getAll = await adminService.getAll( paginatedRequest );
    res.status(200).json(statusService.success(n, 1, getAll));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Get 1
exports.getOneAdmin = async (req, res) => {
  try {
    let id = req.params.id;

    let getOne = await adminService.getOne(id);
    res.status(200).json(statusService.success(n, 2, getOne));
  } catch (error) {    
    res.status(500).json(statusService.error(error));
  }
};

// Update
exports.updateAdmin = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;

    let update = await adminService.updateOne(id, body);
    res.status(200).json(statusService.success(n, 3, update));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Delete
exports.deleteAdmin = async (req, res) => {
  try {
    let id = req.params.id;
    
    let deleteData = await adminService.deleteOne(id);
    res.status(200).json(statusService.success(n, 4, deleteData));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};