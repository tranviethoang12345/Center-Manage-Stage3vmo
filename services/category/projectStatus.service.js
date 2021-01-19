// // Connect Database
const projectStatusModel = require('../../models/category/projectStatus.model');

// // Connect Util
const paginationUtil = require('../../utils/pagination.util');

// // Connect Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Project Status'

// // Project Status
// Create One ProjectStatus
exports.createProjectStatus = async (data) => {
  try {
    let { name } = data;
    let checkLenRecord = await projectStatusModel.find({ name }).countDocuments();
    if (checkLenRecord) {
      throw responseHelper.errorHandler(0, n, 0, 404);
    }
    let result = await projectStatusModel.create(data);
    return responseHelper.success(0, n, 200, result._id);
  } catch (error) {
    throw error;
  }
}

// Get All List Project Status
exports.getListProjectStatus = async (paginatedRequest) => {
  try {
    let { page, limit } = paginatedRequest;
    let totalDoc = await projectStatusModel.find({}).countDocuments();
    let totalPage = Math.ceil(totalDoc / limit);
    if (page > totalPage) {
      throw responseHelper.errorHandler(2, '', 0, 404)
    };
    let { startIndex } = paginationUtil.paginatedResult(page, limit, projectStatusModel);
    let result = await projectStatusModel
      .find({}, '-createdAt -updatedAt -__v')
      .skip(startIndex)
      .limit(limit)
    if (!result) {
      throw responseHelper.errorHandler(1, n, 0, 404)
    }
    return responseHelper.success(1, n, 200, result);
  } catch (error) {
    throw error;
  }
}

// Get 1 Project Status
exports.getProjectType = async (id) => {
  try {
    let result = await projectStatusModel.findOne({_id: id});
    return responseHelper.success(2, n, 200, result);
  } catch (error) {
    throw error;
  }
}

// Update 1 Project Status
exports.updateProjectStatus = async (id, body) => {
  let result = await projectStatusModel.findOneAndUpdate({_id: id}, body, {new: true});
  return responseHelper.success(3, n, 200, result);

}

// Delete 1 Project Status
exports.deleteProjectStatus = async (id) => {
  let result = await projectStatusModel.deleteOne({_id: id});
  return responseHelper.success(4, n, 200, result);
}

