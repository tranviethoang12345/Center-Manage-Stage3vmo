// // Import Service
const customerGroupService = require('../../services/category/customerGroup.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Customer Group';

// // Customer Group
// Create
exports.createCustomerGroup = async (req, res) => {
  try {
    let result = await customerGroupService.createCustomerGroup(req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All List Customer Group
exports.getListCustomerGroup = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };
    
    let result = await customerGroupService.getListCustomerGroup( paginatedRequest );
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// // :id -> req

// Get 1 Customer Group
exports.getCustomerGroup = async (req, res) => {
  try {
    let id = req.params.id;

    let result = await customerGroupService.getCustomerGroup(id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update 1 Customer Group
exports.updateCustomerGroup = async (req, res) => {
  try {
    let result = await customerGroupService.updateCustomerGroup(req.params.id, req.body)
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete 1 Customer Group
exports.deleteCustomerGroup = async (req, res) => {
  try {
    let result = await customerGroupService.deleteCustomerGroup(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};