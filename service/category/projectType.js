const categoryModel = require('../models/categoryModel');

exports.createOne = async (data) => {
  let result = await categoryModel.projectType.create(data);
  return result;
}
