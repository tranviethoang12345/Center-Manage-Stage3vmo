// // Connect Database
const techStackModel = require("../../models/category/techStack.model");

// // Connect Util
const paginationUtil = require("../../../utils/pagination.util");

// // Connect Helpers
const responseHelper = require("../../../helpers/response.helper");

// Name
const n = 'Tech Stack';

// // Tech Stack
// Create Tech Stack
exports.createTechStack = async (data) => {
  try {
    let { name } = data;
    let checkLenRecord = await techStackModel.findOne({ name });
    if (checkLenRecord) {
      throw responseHelper.errorHandler(0, n, 0, 404);
    }
    let result = await techStackModel.create(data);
    return responseHelper.success(0, n, 200, result._id);
  } catch (error) {
    throw error;
  }
};

// Get All List TechStack
exports.getListTechStack = async (paginatedRequest) => {
  try {
    let { page, limit } = paginatedRequest;
    // Check total page
    let totalDoc = await techStackModel.find({}).countDocuments();
    let totalPage = Math.ceil(totalDoc / limit);
    if (page > totalPage) {
      throw responseHelper.errorHandler(2, '', 0, 404)
    };
    
    let { startIndex, perPage } = paginationUtil.paginatedResult(page, limit, techStackModel);
    let result = await techStackModel
      .find({}, '-createdAt -updatedAt -__v')
      .skip(startIndex)
      .limit(perPage)
    if (!result) {
      throw responseHelper.errorHandler(1, n, 0, 404)
    };
    return responseHelper.success(0, n, 200, result);
  } catch (error) {
    throw error;
  }
}

// Get 1 TechStack
exports.getTechStack = async (id) => {
  try {
    let result = await techStackModel
      .findOne({_id: id})
      .populate([{
        path: 'projectList',
        populate: ['projectType', 'projectStatus', 'techStack', 'center', 'staff']
      }]);
      return responseHelper.success(0, n, 200, result);
    } catch (error) {
    throw error;
  }
}

// Update 1 TechStack
exports.updateTechStack = async (id, body) => {
  try {
    let result = await techStackModel
      .findOneAndUpdate(
        {_id: id},
        body,
        {new: true}
      );
      return responseHelper.success(0, n, 200, result);
    } catch (error) {
    throw error;
  }
}

// Delete 1TechStack
exports.deleteTechStack = async (id) => {
  try {
    let result = await techStackModel.deleteOne({_id: id});
    return responseHelper.success(0, n, 200, result);
  } catch (error) {
    throw error;
  }
}