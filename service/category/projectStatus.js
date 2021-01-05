// // Connect Database
const projectStatusModel = require('../../models/category/projectStatus');

// // Project Status
// Create One  
exports.createOne = async (data) => {
  try {
    let result = await projectStatusModel.create(data);
    return result;
  } catch (error) {
    throw error;
  }
}

// Get All
exports.getAll = async () => {
  try {
    let result = await projectStatusModel.find();
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await projectStatusModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  let result = await projectStatusModel.findOneAndUpdate({_id: id}, body, {new: true});
  console.log(result);
  return result;
}

// Delete
exports.deleteOne = async (id) => {
  let result = await projectStatusModel.deleteOne({_id: id});
  return result;
}

