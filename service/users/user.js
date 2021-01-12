// // Connect Database
const adminModel = require('../../models/users/user');

// // Connect Service
const paginationService = require("../collections/pagination") 

// // Admin - Login
// Create One
exports.createOne = async (data) => {
  try {
    let result = await adminModel.create(data);
    return result;
  } catch (error) {
    throw error;
  }
};

// Get All
exports.getAll = async (paginatedRequest) => {
  try {
    let result = await paginationService.paginatedResult(
      paginatedRequest,
      adminModel.find()
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await adminModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await adminModel.findOneAndUpdate({_id: id}, body, {new: true});
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete
exports.deleteOne = async (id) => {
  try {
    let result = await adminModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}