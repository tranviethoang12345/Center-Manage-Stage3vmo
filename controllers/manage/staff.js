// // Import
const staffService = require('../../service/manage/staff');
const statusService = require('../../service/message/status');

// Name
const n = 'staff';

// // 2. Staff - HR
// Create
exports.createStaff = async (req, res) => {
  try {
    let body = req.body;
    let create = await staffService.createOne(body);
    res.status(200).json(statusService.success(n, 0, create));
  } catch (error) {
    res.json(error.message);
  }
}

// Get All
exports.getAllStaff = async (req, res) => {
  try {
    let getAll = await staffService.getAll();
    res.status(200).json(statusService.success(n, 1, getAll));
  } catch (error) {
    res.json(error.message);
  }
}

// Get One
exports.getOneStaff = async (req, res) => {
  try {
    let id = req.params.id;
    let getOne = await staffService.getOne(id);
    res.status(200).json(statusService.success(n, 2, getOne));
  } catch (error) {
    res.json(error.message);
  }
}

// Update
exports.updateStaff = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await staffService.updateOne(id, body);
    res.status(200).json(statusService.success(n, 3, update))
  } catch (error) {
    res.json(error.message);
  }
}

// Delete
exports.deleteStaff = async (req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await staffService.deleteOne(id);
    res.status(200).json(statusService.success(n, 4, deleteData));
  } catch (error) {
    res.json(error.message);
  }
}