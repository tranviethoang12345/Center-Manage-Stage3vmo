// // Connect Database
const userModel = require('../../models/users/user');

// // Connect Util
const paginationUtil = require("../../utils/pagination.util") 

// // Admin - Login
// Create One
exports.create = async (data) => {
  try {
    let result = await userModel.create(data);
    return result;
  } catch (error) {
    throw error;
  }
};

// Get All
exports.getAll = async (paginatedRequest) => {
  try {
    let result = await paginationUtil.paginatedResult(
      paginatedRequest,
      userModel.find()
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await userModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await userModel.findOneAndUpdate({_id: id}, body, {new: true});
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete
exports.deleteOne = async (id) => {
  try {
    let result = await userModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}