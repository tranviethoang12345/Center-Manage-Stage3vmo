// // Import
const staffModel = require('../../models/manage/staff');

// // Human Resources
// Create One
exports.createOne = async (data) => {
  try {
    let result = await staffModel.create(data);
    return result;
  } catch (error) {
    throw error;
  }
};

// Get All
exports.getAll = async () => {
  try {
    let result = await v.find();
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await staffModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await staffModel.findOneAndUpdate({_id: id}, body, {new: true});
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete
exports.deleteOne = async (id) => {
  try {
    let result = await staffModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}