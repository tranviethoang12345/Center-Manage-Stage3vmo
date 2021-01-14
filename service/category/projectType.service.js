// // Connect Database
const projectTypeModel = require('../../models/category/projectType');

// // Connect Util
const paginationUtil = require('../../utils/pagination.util');

// // Connect Service
const commonQueryService = require('../collections/commonQuery.service');

// // Connect Helpers
const responseHelper = require('../../helpers/response.helper');

// Name 
const n = 'Project Type';

// // Project Type
// Create One  
exports.createOne = async (data) => {
  try {
    let { name } = data;
    let checkLenRecord = await commonQueryService.getLength(projectTypeModel, { name });
    if (checkLenRecord) {
      throw responseHelper.errorHandler(0, n, 0, 404);
    }
    let result = await commonQueryService.create(projectTypeModel, data);
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
      projectTypeModel.find()
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await projectTypeModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await projectTypeModel.findOneAndUpdate({_id: id}, body, {new: true});
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete
exports.deleteOne = async (id) => {
  try {
    let result = await projectTypeModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// // Database
// exports.status = async (callback) => {
//   var sql = "SELECT * FROM status WHERE projectType = " + mysql.escape(req.body.username);
//   database.query(sql, function (err, result) {
//     callback(err, result ? result.length > 0 : false);
//   });
// }
