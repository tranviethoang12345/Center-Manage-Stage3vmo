// // Import
const projectModel = require('../../models/manage/project');

// // Connect Util
const paginationUtil = require('../../utils/pagination.util');

// // Connect Service
const commonQueryService = require('../collections/commonQuery.service');

// // Connect Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Project'

// // Project
// Create One
exports.createOne = async (data) => {
  try {
    let { name } = data.projectInformation.name;
    let checkLenRecord = await commonQueryService.getLength(projectModel, { 'projectInformation.name': name });
    if (checkLenRecord) {
      return responseHelper.errorHandler(0, n, 0, 404);
    }
    let result = await commonQueryService.create(projectModel, data);
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
      projectModel
    );
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
      projectModel
        .find()
        .populate(
          ['projectType', 'projectStatus', 'techStack', 'center', 'staff']
        ) 
    );
    return result;
  } catch (error) {
    throw error;
  }
};

// Get One
exports.getOne = async (id) => {
  try {
    let result = await projectModel
    .findOne({_id: id})
    .populate([{
      path: 'project',
      populate: ['projectType', 'projectStatus', 'techStack', 'center', 'staff']
    }]);
    return result;
  } catch (error) {
    throw error;
  }
};

// Get One Populate
exports.getOnePopulate = async (id) => {
  try {
    let result = await projectModel
    .findOne({_id: id})
    .populate([{
      path: 'project',
      populate: ['projectType', 'projectStatus', 'techStack', 'center', 'staff']
    }]);
    return result;
  } catch (error) {
    throw error;
  }
};

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await projectModel
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
    let result = await projectModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
};