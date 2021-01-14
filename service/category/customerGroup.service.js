// // Connect Database
const customerGroupModel = require('../../models/category/customerGroup.model');

// // Connect Util
const paginationUtil = require('../../utils/pagination.util');

// // Connect Helpers
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Customer Group'

// // Customer Group
// Create One Customer Group
exports.createCustomerGroup = async (data) => {
  try {
    let { name } = data;
    let checkLenRecord = await customerGroupModel.find({ name }).countDocuments();
    if (checkLenRecord) {
      throw responseHelper.errorHandler(0, n, 0, 404);
    }
    let result = await customerGroupModel.create(data);
    return responseHelper.success(0, n, 200, result._id);
  } catch (error) {
    throw error;
  }
}

// Get All List Customer Group
exports.getListCustomerGroup = async (paginatedRequest) => {
  try {
    let result = await paginationUtil.paginatedResult(
      paginatedRequest, 
      customerGroupModel.find()
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Get 1 Customer Group
exports.getCustomerGroup = async (id) => {
  try {
    let result = await customerGroupModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update 1 Customer Group
exports.updateCustomerGroup = async (id, body) => {
  try {
    let result = await customerGroupModel.findOneAndUpdate({_id: id}, body, {new: true});
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete 1 Customer Group
exports.deleteCustomerGroup = async (id) => {
  try {
    let result = await customerGroupModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}