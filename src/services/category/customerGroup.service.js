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
    let { page, limit } = paginatedRequest;
    // Check total Page
    let totalDoc = await customerGroupModel.find().countDocuments();
    let totalPage = Math.ceil(totalDoc / limit);
    if (page > totalPage) {
      throw responseHelper.errorHandler(2, '', 0, 404);
    };
    
    let { startIndex, perPage } = paginationUtil.paginatedResult(page, limit, customerGroupModel);
    let result = await customerGroupModel
      .find({}, '-createdAt -updatedAt -__v')
      .skip(startIndex)
      .limit(perPage)
    if (!result) {
      throw responseHelper.errorHandler(1, n, 0, 404);
    };
    return responseHelper.success(1, n, 200, result);
  } catch (error) {
    throw error;
  }
}

// Get 1 Customer Group
exports.getCustomerGroup = async (id) => {
  try {
    let result = await customerGroupModel.findOne({_id: id}, '-__v -updatedAt');
    if (!result) {
      throw responseHelper.errorHandler(1, n, 0, 404);
    }
    return responseHelper.success(2, n, 200, result);
  } catch (error) {
    throw error;
  }
}

// Update 1 Customer Group
exports.updateCustomerGroup = async (id, body) => {
  try {
    let result = await customerGroupModel.findOneAndUpdate({_id: id}, body, {new: true});
    if (!result) {
      throw responseHelper.errorHandler(1, n, 0, 404);
    }
    return responseHelper.success(3, n, 200, result);
  } catch (error) {
    throw error;
  }
}

// Delete 1 Customer Group
exports.deleteCustomerGroup = async (id) => {
  try {
    let result = await customerGroupModel.deleteOne({_id: id});
    if (!result) {
      throw responseHelper.errorHandler(1, n, 0, 404);
    }
    return responseHelper.success(4, n, 200, result);
  } catch (error) {
    throw error;
  }
}