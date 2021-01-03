const categoryProjectTypeModel = require('../../models/category/projectType');

//Create One  
exports.createOne = async (data) => {
  try {
    let result = await categoryProjectTypeModel.create(data);
    return result;
  } catch (error) {
    throw error;
  }
}

//Get One
exports.

//Update
exports.updateOne = async (id, body) => {
  let result = await categoryProjectTypeModel.findOneAndUpdate(id, body, {new: true});
  console.log(result);
  return result;
}

//Delete
exports.deleteOne = async (id) => {
  let result = await categoryProjectTypeModel.deleteOne(id);
  return result;
}