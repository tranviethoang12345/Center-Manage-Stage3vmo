// // Connect Database
const customerGroupModel = require('../../models/category/customerGroup');

// // Connect Util
const paginationUtil = require('../../utils/pagination.util');

// // Connect Service
const commonQueryService = require('../collections/commonQuery.service');

// // Connect Helpers
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Customer Group'

// // Customer Group
// Create One  
exports.createOne = async (data) => {
  try {
    let { name } = data;
    let checkLenRecord = await commonQueryService.getLength(customerGroupModel, { name });
    if (checkLenRecord) {
      throw responseHelper.errorHandler(0, n, 0, 404);
    }
    let result = await commonQueryService.create(customerGroupModel, data);
    return responseHelper.success(0, n, 200, result._id);
  } catch (error) {
    throw error;
  }
}

// Get All
exports.getAll = async (paginatedRequest) => {
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

// Get One
exports.getOne = async (id) => {
  try {
    let result = await customerGroupModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update One
exports.updateOne = async (id, body) => {
  try {
    let result = await customerGroupModel.findOneAndUpdate({_id: id}, body, {new: true});
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete
exports.deleteOne = async (id) => {
  try {
    let result = await customerGroupModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}