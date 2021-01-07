// // Connect Database
const customerGroupModel = require('../../models/category/customerGroup');

// // 4. Customer Group
// Create One  
exports.createOne = async (data) => {
  try {
    let result = await customerGroupModel.create(data);
    return result;
  } catch (error) {
    throw error;
  }
}

// Get All
exports.getAll = async () => {
  try {
    let result = await customerGroupModel.find();
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await customerGroupModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await customerGroupModel.findOneAndUpdate({_id: id}, body, {new: true});
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete
exports.deleteOne = async (id) => {
  try {
    let result = await customerGroupModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}