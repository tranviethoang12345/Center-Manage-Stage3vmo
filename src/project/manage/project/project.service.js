/* eslint-disable no-useless-catch */
// // Import
const projectModel = require('./project.model');

// // Connect Util
const paginationUtil = require('../../../utils/pagination.util');

// // Connect Helper
const responseHelper = require('../../../helpers/response.helper');

// Name
const n = 'Project'

// // Project
// Create Project
exports.createProject = async (data) => {
  try {
    const { name } = data.projectInformation.name;
    const checkLenRecord = await projectModel.findOne({ name });
    if (checkLenRecord) {
      return responseHelper.errorHandler(0, n, 0, 404);
    }
    const result = await projectModel.create(data);
    return responseHelper.success(0, n, 200, result.id);
  } catch (error) {
    throw error;
  }
};

// Get All List Project
exports.getListProject = async (paginatedRequest) => {
  try {
    const { page, limit } = paginatedRequest;
    // Check total page
    const totalDoc = await projectModel.find({}).countDocuments();
    const totalPage = Math.ceil(totalDoc / limit);
    if (page > totalPage) {
      throw responseHelper.errorHandler(2, '', 0, 404)
    };
    
    const { startIndex, perPage } = paginationUtil.paginatedResult(page, limit, projectModel);
    const result = await projectModel
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
};

// Get All Project - Populate
exports.getListProjectPopulate = async (paginatedRequest) => {
  try {
    const { page, limit } = paginatedRequest;
    // Check total page
    const totalDoc = await projectModel.find({}).countDocuments();
    const totalPage = Math.ceil(totalDoc / limit);
    if (page > totalPage) {
      throw responseHelper.errorHandler(2, '', 0, 404)
    };

    const { startIndex, perPage } = paginationUtil.paginatedResult(page, limit, projectModel);
    const result = await projectModel
      .find({}, '-createdAt -updatedAt -__v')
      .skip(startIndex)
      .limit(perPage)
      .populate(
        [{
          path: 'project',
          populate: ['projectType', 'projectStatus', 'techStack', 'center', 'staff']
      }]
      )
    if (!result) {
      throw responseHelper.errorHandler(1, n, 0, 404)
    };
    return responseHelper.success(1, n, 200, result);
  } catch (error) {
    throw error;
  }
};

// Get 1 Project
exports.getProject = async (id) => {
  try {
    const result = await projectModel
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

// Get 1 Project - Populate
exports.getProjectPopulate = async (id) => {
  try {
    const result = await projectModel
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

// Update Project
exports.updateProject = async (id, body) => {
  try {
    const result = await projectModel
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

// Delete Project
exports.deleteProject = async (id) => {
  try {
    const result = await projectModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
};