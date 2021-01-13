// // Import Service
const customerGroupService = require('../../service/category/customerGroup.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Customer Group';

// // 4. Customer Group
// Create
exports.createCustomerGroup = async (req, res) => {
  try {
    let create = await customerGroupService.createOne(req.body);
    return res.status(200).json(responseHelper.success(n, 0, create));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All
exports.getAllCustomerGroup = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };
    
    let getAll = await customerGroupService.getAll( paginatedRequest );
    return res.status(200).json(responseHelper.success(n, 1, getAll));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get 1
exports.getOneCustomerGroup = async (req, res) => {
  try {
    let id = req.params.id;

    let getOne = await customerGroupService.getOne(id);
    return res.status(200).json(responseHelper.success(n, 2, getOne));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update
exports.updateCustomerGroup = async (req, res) => {
  try {
    let update = await customerGroupService.updateOne(req.params.id, req.body)
    return res.status(200).json(responseHelper.success(n, 3, update));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete
exports.deleteCustomerGroup = async (req, res) => {
  try {
    let deleteData = await customerGroupService.deleteOne(req.params.id);
    return res.status(200).json(responseHelper.success(n, 4, deleteData));
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};