// // Import Database
const staffModel = require('../../models/manage/staff');

// // Connect Util
const paginationUtil = require('../../utils/pagination.util');

// // Connect Service
const commonQueryService = require('../collections/commonQuery.service');

// // Connect Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Staff';

// // Staff || Human Resources
// Create One
exports.createOne = async (data) => {
  try {
    let { name } = data.staffInformation.name;
    let checkLenRecord = await commonQueryService.getLength(staffModel, { 'staffInformation.name': name });
    if (checkLenRecord) {
      return responseHelper.errorHandler(0, n, 0, 404);
    }
    let result = await commonQueryService.create(staffModel, data);
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
      staffModel.find()
    )
    return result;
  } catch (error) {
    throw error;
  }
};

// Get All Populate
exports.getAllPopulate = async (paginatedRequest) => {
  try {
    let result = await paginationUtil.paginatedResult(
      paginatedRequest,
      staffModel
        .find()
        .populate([{
          path: 'projectList',
          populate: ['techStack']
        }])
        .populate([{
          path: 'techStack',
          populate: ['techStack', 'projectList']
        }])
      );
    return result;
  } catch (error) {
    throw error;
  }
};

// Get One 
exports.getOne = async (id) => {
  try {
    let result = await staffModel
      .findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
};

// Get One Populate
exports.getOnePopulate = async (id) => {
  try {
    let result = await staffModel
      .findOne({_id: id})
      .populate([{
        path: 'projectList',
        populate: ['techStack']
      }])
      .populate([{
        path: 'techStack',
        populate: ['techStack', 'projectList']
      }]);
    return result;
  } catch (error) {
    throw error;
  }
};

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await staffModel
      .findOneAndUpdate(
        {_id: id},
        body,
        {new: true}
      );
    return result;
  } catch (error) {
    throw error;
  }
};

// Delete
exports.deleteOne = async (id) => {
  try {
    let result = await staffModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
};