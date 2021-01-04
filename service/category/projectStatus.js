// // Connect Database
const categoryProjectStatusModel = require('../../models/category/projectStatus');

// // Project Status
// Create One  
exports.createOne = async (data) => {
  try {
    let result = await categoryProjectStatusModel.create(data);
    return result;
  } catch (error) {
    throw error;
  }
}

// Get All
exports.getAll = async () => {
  try {
    let result = await categoryProjectStatusModel.find();
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await categoryProjectStatusModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  let result = await categoryProjectStatusModel.findOneAndUpdate({_id: id}, body, {new: true});
  console.log(result);
  return result;
}

// Delete
exports.deleteOne = async (id) => {
  let result = await categoryProjectStatusModel.deleteOne({_id: id});
  return result;
}

