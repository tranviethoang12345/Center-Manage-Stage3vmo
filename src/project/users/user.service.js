// // Connect Database
const accountModel = require('../../models/account.model');

// // Connect Helper
const responseHelper = require("../../helpers/response.helper");

// Name
const n = 'User';

// // User
// Create One
exports.createUser = async (data) => {
  try {
    let result = await accountModel.create(data);
    return responseHelper.success(0, n, 200, result);
  } catch (error) {
    throw error;
  }
};

// Get All List User
exports.getListUser = async () => {
  try {
    let result = await accountModel.find()
    return responseHelper.success(1, n, 200, result);
  } catch (error) {
    throw error;
  }
};

// Get 1 User
exports.getUser = async (id) => {
  try {
    let result = await accountModel.findOne({_id: id});
    return responseHelper.success(2, n, 200, result);
  } catch (error) {
    throw error;
  }
};

// Update 1 User
exports.updateUser = async (id, body) => {
  try {
    let result = await accountModel.findOneAndUpdate({_id: id}, body, {new: true});
    return responseHelper.success(3, n, 200, result);
  } catch (error) {
    throw error;
  }
};

// Delete 1 User
exports.deleteUser = async (id) => {
  try {
    let result = await accountModel.deleteOne({_id: id});
    return responseHelper.success(4, n, 200, result);
  } catch (error) {
    throw error;
  }
};