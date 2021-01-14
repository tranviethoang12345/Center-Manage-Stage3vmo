// // Connect Database
const projectStatusModel = require('../../models/category/projectStatus');

// // Connect Util
const paginationUtil = require('../../utils/pagination.util');

// // Connect Service
const commonQueryService = require('../collections/commonQuery.service');

// // Connect Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Project Status'

// // Project Status
// Create One  
exports.createOne = async (data) => {
  try {
    let { name } = data;
    let checkLenRecord = await commonQueryService.getLength(projectStatusModel, { name });
    if (checkLenRecord) {
      throw responseHelper.errorHandler(0, n, 0, 404);
    }
    let result = await commonQueryService.create(projectStatusModel, data);
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
      projectStatusModel.find()
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await projectStatusModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  let result = await projectStatusModel.findOneAndUpdate({_id: id}, body, {new: true});
  console.log(result);
  return result;
}

// Delete
exports.deleteOne = async (id) => {
  let result = await projectStatusModel.deleteOne({_id: id});
  return result;
}

