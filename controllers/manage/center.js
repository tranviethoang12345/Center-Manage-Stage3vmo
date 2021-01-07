// // Import
const centerService = require('../../service/manage/staff');
const statusService = require('../../service/message/status');

// Name
const n = 'Center';

// // 1. Centers || Departments
// Create
exports.createCenter = async (req, res) => {
  try {
    let body = req.body;
    let create = await centerService.createOne(body);
    res.status(200).json(statusService.success(n, 0, create));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Get All
exports.getAllCenter = async (req, res) => {
  try {
    let getAll = await centerService.getAll();
    res.status(200).json(statusService.success(n, 1, getAll));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Get One
exports.getOneCenter = async (req, res) => {
  try {
    let id = req.params.id;
    let getOne = await centerService.getOne(id);
    res.status(200).json(statusService.success(n, 2, getOne));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Update
exports.updateCenter = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await centerService.updateOne(id, body);
    res.status(200).json(statusService.success(n, 3, update))
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Delete
exports.deleteCenter = async (req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await centerService.deleteOne(id);
    res.status(200).json(statusService.success(n, 4, deleteData));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};