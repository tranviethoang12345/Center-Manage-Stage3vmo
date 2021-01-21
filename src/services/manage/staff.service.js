// // Import Database
const staffModel = require('../../models/manage/staff.model');

// // Connect Util
const paginationUtil = require('../../utils/pagination.util');

// // Connect Helper
const responseHelper = require('../../helpers/response.helper');

// Name
const n = 'Staff';

// // Staff || Human Resources
// Create Staff
exports.createStaff = async (data) => {
  try {
    let result = await staffModel.create(data);
    return responseHelper.success(0, n, 200, result._id);
  } catch (error) {
    throw error;
  }
};

// Get All List Staff
exports.getListStaff = async (paginatedRequest) => {
  try {
    let { page, limit } = paginatedRequest;
    // Check total page
    let totalDoc = await staffModel.find({}).countDocuments();
    let totalPage = Math.ceil(totalDoc / limit);
    if (page > totalPage) {
      throw responseHelper.errorHandler(2, '', 0, 404)
    };

    let { startIndex, perPage } = paginationUtil.paginatedResult(page, limit, staffModel);
    let result = await staffModel
      .find({}, '-createdAt -updatedAt -__v')
      .skip(startIndex)
      .limit(perPage)
    if (!result) {
      throw responseHelper.errorHandler(1, n, 0, 404)
    };
    return result;
  } catch (error) {
    throw error;
  }
};

// Get All Populate
exports.getListStaffPopulate = async (paginatedRequest) => {
  try {
    let { page, limit } = paginatedRequest;
    // Check total page
    let totalDoc = await staffModel.find({}).countDocuments();
    let totalPage = Math.ceil(totalDoc / limit);
    if (page > totalPage) {
      throw responseHelper.errorHandler(2, '', 0, 404)
    };
    let { startIndex, perPage } = paginationUtil.paginatedResult(page, limit, staffModel);
    let result = await staffModel
      .find({}, '-createdAt -updatedAt -__v')
      .skip(startIndex)
      .limit(perPage)
      .populate([{
        path: 'projectList',
        populate: ['techStack']
      }])
      .populate([{
        path: 'techStack',
        populate: ['techStack', 'projectList']
      }])
    if (!result) {
      throw responseHelper.errorHandler(1, n, 0, 404)
    };
    return result;
  } catch (error) {
    throw error;
  }
};

// Get 1 Staff
exports.getStaff = async (id) => {
  try {
    let result = await staffModel
      .findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
};

// Get 1 Staff - Populate
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

// Update 1 Staff
exports.updateStaff = async (id, body) => {
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

// Delete 1 Staff
exports.deleteStaff = async (id) => {
  try {
    let result = await staffModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
};