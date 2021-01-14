// // Import
const centerModel = require('../../models/manage/center');

// // Connect Util
const paginationUtil = require('../../utils/pagination.util');

// // Connect Service
const commonQueryService = require('../collections/commonQuery.service');

// // Connect Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Center'

// // Center || Departments
// Create One
exports.createOne = async (data) => {
  try {
    let { name } = data.centerInformation.name;
    let checkLenRecord = await commonQueryService.getLength(centerModel, { 'centerInformation.name': name });
    if (checkLenRecord) {
      return responseHelper.errorHandler(0, n, 0, 404);
    }

    let result = await commonQueryService.create(centerModel, data);
    return responseHelper.success(0, n, 200, result._id);
  } catch (error) {
    throw error;
  }
};

// Get All
exports.getAll = async (paginatedRequest) => {
  try {
    let result = await paginationUtil.paginatedResult(
      paginatedRequest, 
      centerModel.find()
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Get All (populate)
exports.getAllPopulate = async (paginatedRequest) => {
  try {
    let result = await paginationUtil.paginatedResult(
      paginatedRequest, 
      centerModel
        .find()
        .populate(['techStack', 'project', 'staffList'])
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await centerModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One (populate)
exports.getOnePopulate = async (id) => {
  try {
    let result = await centerModel
      .findOne({_id: id})
      .populate(['techStack', 'project', 'staffList']);
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await centerModel
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
    let result = await centerModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}