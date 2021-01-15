// // Import
const projectModel = require('../../models/manage/project.model');

// // Connect Util
const paginationUtil = require('../../utils/pagination.util');

// // Connect Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Project'

// // Project
// Create Project
exports.createProject = async (data) => {
  try {
    let { name } = data.projectInformation.name;
    let checkLenRecord = await projectModel.find({ name }).countDocument();
    if (checkLenRecord) {
      return responseHelper.errorHandler(0, n, 0, 404);
    }
    let result = await projectModel.create(data);
    return responseHelper.success(0, n, 200, result._id);
  } catch (error) {
    throw error;
  }
};

// Get All List Project
exports.getListProject = async (paginatedRequest) => {
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

// Get All Project - Populate
exports.getListProjectPopulate = async (paginatedRequest) => {
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

// Get 1 Project
exports.getProject = async (id) => {
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

// Get 1 Project - Populate
exports.getProjectPopulate = async (id) => {
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

// Update Project
exports.updateProject = async (id, body) => {
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

// Delete Project
exports.deleteProject = async (id) => {
  try {
    let result = await projectModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
};