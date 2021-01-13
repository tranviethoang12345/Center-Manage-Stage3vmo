// // Connect Database
const ErrorHandler = require("../../helpers/response.helper");
const techStackModel = require("../../models/category/techStack");

// // Connect Util
const paginationUtil = require("../../utils/pagination.util") 

// // Connect Service
const commonQueryService = require("../collections/commonQuery.service")

// // Connect Helpers
const responseHelper = require("../../helpers/response.helper");

const n = 'Tech Stack';

// // Tech Stack
// Create One
exports.createOne = async (data) => {
  try {
    const { name } = data;
    const lenRecord = await commonQueryService.findLength(techStackModel, { name });
    if (lenRecord) {
      throw responseHelper.ErrorHandler(404, n + ' already exists', 'INVALID');
    }
    let result = await commonQueryService.create(techStackModel, data);
    return responseHelper.success(0, 0, n, 200, result._id);
  } catch (error) {
    throw error;
  }
};

// Get All
exports.getAll = async (paginatedRequest) => {
  try {
    let result = await paginationUtil.paginatedResult(
      paginatedRequest, 
      techStackModel.find()
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await techStackModel
      .findOne({_id: id})
      .populate([{
        path: 'projectList',
        populate: ['projectType', 'projectStatus', 'techStack', 'center', 'staff']
      }]);
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await techStackModel
      .findOneAndUpdate(
        {_id: id},
        body,
        {new: true}
      );
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete
exports.deleteOne = async (id) => {
  try {
    let result = await techStackModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}