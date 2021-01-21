// // Connect Database
const projectTypeModel = require('../../models/category/projectType.model');

// // Connect Util
const paginationUtil = require('../../utils/pagination.util');

// // Connect Helpers
const responseHelper = require('../../helpers/response.helper');

// Name 
const n = 'Project Type';

// // Project Type
// Create One Project Type
exports.createProjectType = async (data) => {
  try {
    let { name } = data;
    let checkLenRecord = await projectTypeModel.findOne({ name });
    if (checkLenRecord) {
      throw responseHelper.errorHandler(0, n, 0, 404);
    }
    let result = await projectTypeModel.create(data);
    return responseHelper.success(0, n, 200, result._id);
  } catch (error) {
    throw error;
  }
}

// Get All List Project Type
exports.getListProjectType = async (paginatedRequest) => {
  try {
    let { page, limit } = paginatedRequest;
    // Check total page
    let totalDoc = await projectTypeModel.find({}).countDocuments();
    let totalPage = Math.ceil(totalDoc / limit);
    if (page > totalPage) {
      throw responseHelper.errorHandler(2, '', 0, 404)
    }
    
    let { startIndex, perPage } = paginationUtil.paginatedResult(page, limit, projectTypeModel);
    let result = await projectTypeModel
      .find({}, '-createdAt -updatedAt -__v')
      .skip(startIndex)
      .limit(perPage)
    if (!result) {
      throw responseHelper.errorHandler(1, n, 0, 404)
    };
    return responseHelper.success(1, n, 200, result);
  } catch (error) {
    throw error;
  }
}

// Get 1 Project Type
exports.getProjectType = async (id) => {
  try {
    let result = await projectTypeModel.findOne({_id: id});
    return responseHelper.success(2, n, 200, result);
  } catch (error) {
    throw error;
  }
}

// Update 1 Project Type
exports.updateProjectType = async (id, body) => {
  try {
    let result = await projectTypeModel.findOneAndUpdate({_id: id}, body, {new: true});
    return responseHelper.success(3, n, 200, result);
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete 1 Project Type
exports.deleteProjectType = async (id) => {
  try {
    let result = await projectTypeModel.deleteOne({_id: id});
    return responseHelper.success(4, n, 200, result);
  } catch (error) {
    throw error;
  }
}