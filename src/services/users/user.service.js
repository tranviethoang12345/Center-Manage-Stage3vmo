// // Connect Database
const userModel = require('../../models/users/user.model');

// // Connect Util
const paginationUtil = require("../../utils/pagination.util");

// // Connect Helper
const responseHelper = require("../../helpers/response.helper");

// Name
const n = 'User';

// // User
// Create One
exports.createUser = async (data) => {
  try {
    let result = await userModel.create(data);
    return responseHelper.success(0, n, 1, result);
  } catch (error) {
    throw error;
  }
};

// Get All List User
exports.getListUser = async (paginatedRequest) => {
  try {
    let result = await paginationUtil.paginatedResult(
      paginatedRequest,
      userModel.find()
    );
    return responseHelper.success(0, n, 1, result);
  } catch (error) {
    throw error;
  }
}

// Get 1 User
exports.getUser = async (id) => {
  try {
    let result = await userModel.findOne({_id: id});
    return responseHelper.success(0, n, 1, result);
  } catch (error) {
    throw error;
  }
}

// Update 1 User
exports.updateUser = async (id, body) => {
  try {
    let result = await userModel.findOneAndUpdate({_id: id}, body, {new: true});
    return responseHelper.success(0, n, 1, result);
  } catch (error) {
    throw error;
  }
}

// Delete 1 User
exports.deleteUser = async (id) => {
  try {
    let result = await userModel.deleteOne({_id: id});
    return responseHelper.success(0, n, 1, result);
  } catch (error) {
    throw error;
  }
}