// // Connect Database
const categoryCustomerGroup = require('../../models/category/customerGroup');

// // Project Type
// Create One  
exports.createOne = async (data) => {
  try {
    let result = await categoryCustomerGroup.create(data);
    return result;
  } catch (error) {
    throw error;
  }
}

// Get All
exports.getAll = async () => {
  try {
    let result = await categoryCustomerGroup.find();
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await categoryCustomerGroup.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await categoryCustomerGroup.findOneAndUpdate({_id: id}, body, {new: true});
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete
exports.deleteOne = async (id) => {
  try {
    let result = await categoryCustomerGroup.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}