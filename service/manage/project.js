// // Import
const projectModel = require('../../models/manage/project');

// // Connect Service
const paginationService = require('../pagination');

// // 3. Project
// Create One
exports.createOne = async (data) => {
  try {
    let result = await projectModel.create(data);
    return result;
  } catch (error) {
    throw error;
  }
};

// Get All
exports.getAll = async () => {
  try {
    let result = await paginationService.paginatedResult(
      page,
      limit,
      projectModel
    );
    return result;
  } catch (error) {
    throw error;
  }
};

// Get All Populate
exports.getAllPopulate = async () => {
  try {
    let result = await paginationService.paginatedResult(
      page,
      limit,
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