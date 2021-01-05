// // Connect Database
const techStackModel = require("../../models/category/techStack");

// // Tech Stack
// Create One
exports.createOne = async (data) => {
  try {
    let result = await techStackModel.create(data);
    return result;
  } catch (error) {
    throw error;
  }
};

// Get All
exports.getAll = async () => {
  try {
    let result = await techStackModel.find();
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await techStackModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await techStackModel.findOneAndUpdate({_id: id}, body, {new: true});
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete
exports.deleteOne = async (id) => {
  try {
    let result = await techStackModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}