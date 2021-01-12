// // Import
const customerGroupService = require('../../service/category/customerGroup');
const statusService = require('../../service/message/status');

// Name
const n = 'Customer Group';

// // 4. Customer Group
// Create
exports.createCustomerGroup = async (req, res) => {
  try {
    let body = req.body;

    let create = await customerGroupService.createOne(body);
    res.status(200).json(statusService.success(n, 0, create));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Get All
exports.getAllCustomerGroup = async (req, res) => {
  try {
    let getAll = await customerGroupService.getAll();
    res.status(200).json(statusService.success(n, 1, getAll));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Get 1
exports.getOneCustomerGroup = async (req, res) => {
  try {
    let id = req.params.id;

    let getOne = await customerGroupService.getOne(id);
    res.status(200).json(statusService.success(n, 2, getOne));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Update
exports.updateCustomerGroup = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;

    let update = await customerGroupService.updateOne(id, body)
    res.status(200).json(statusService.success(n, 3, update));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Delete
exports.deleteCustomerGroup = async (req, res) => {
  try {
    let id = req.params.id;
    
    let deleteData = await customerGroupService.deleteOne(id);
    res.status(200).json(statusService.success(n, 4, deleteData));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};