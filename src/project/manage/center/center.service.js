/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-catch */
// // Import
const centerModel = require('./center.model');

// // Connect Util
const paginationUtil = require('../../../utils/pagination.util');

// // Connect Helper
const responseHelper = require('../../../helpers/response.helper');

// Name
const n = 'Center'

// // Center || Departments
// Create Center
exports.createCenter = async (data) => {
  try {
    const { name } = data.centerInformation.name;
    const checkLenRecord = await centerModel.findOne({ 'centerInformation.name': name });
    if (checkLenRecord) {
      return responseHelper.errorHandler(0, n, 0, 404);
    }
    const result = await centerModel.create(data);
    return responseHelper.success(0, n, 200, result._id);
  } catch (error) {
    throw error;
  }
};

// Get All List Center
exports.getListCenter = async (paginatedRequest) => {
  try {
    const { page, limit } = paginatedRequest;
    // Check total page
    const totalDoc = await centerModel.find({}).countDocuments();
    const totalPage = Math.ceil(totalDoc / limit);
    if (page > totalPage) {
      throw responseHelper.errorHandler(2, '', 0, 404)
    };
    
    const { startIndex, perPage } = paginationUtil.paginatedResult(page, limit, centerModel);
    const result = await centerModel
      .find({}, '-createdAt -updatedAt -__v')
      .skip(startIndex)
      .limit(perPage)
    if (!result) {
      throw responseHelper.errorHandler(1, n, 0, 404)
    };
    return responseHelper.success(1, n, 200, result._id);
  } catch (error) {
    throw error;
  }
}

// Get All List Center - Populate
exports.getListCenterPopulate = async (paginatedRequest) => {
  try {
    const { page, limit } = paginatedRequest;
    // Check total page
    const totalDoc = await centerModel.find({}).countDocuments();
    const totalPage = Math.ceil(totalDoc / limit);
    if (page > totalPage) {
      throw responseHelper.errorHandler(2, '', 0, 404)
    };
    
    const { startIndex } = paginationUtil.paginatedResult(page, limit, centerModel);
    const result = await centerModel
      .find({}, '-createdAt -updatedAt -__v')
      .skip(startIndex)
      .limit(limit)
      .populate(['techStack', 'project', 'staffList'])
    if (!result) {
      throw responseHelper.errorHandler(1, n, 0, 404)
    };
    return responseHelper.success(1, n, 200, result);
  } catch (error) {
    throw error;
  }
}

// Get 1 Center
exports.getCenter = async (id) => {
  try {
    const result = await centerModel.findOne({_id: id});
    return responseHelper.success(2, n, 200, result);
  } catch (error) {
    throw error;
  }
}

// Get 1 Center - Populate
exports.getCenterPopulate = async (id) => {
  try {
    const result = await centerModel
      .findOne({_id: id})
      .populate(['techStack', 'project', 'staffList']);
      return responseHelper.success(2, n, 200, result);
    } catch (error) {
    throw error;
  }
}

// Update 1 Center
exports.updateCenter = async (id, body) => {
  try {
    const result = await centerModel
      .findOneAndUpdate(
        {_id: id},
        body,
        {new: true}
      );
      return responseHelper.success(3, n, 200, result);
    } catch (error) {
    throw error;
  }
}

// Delete 1 Center
exports.deleteCenter = async (id) => {
  try {
    const result = await centerModel.deleteOne({_id: id});
    return responseHelper.success(4, n, 200, result);
  } catch (error) {
    throw error;
  }
}