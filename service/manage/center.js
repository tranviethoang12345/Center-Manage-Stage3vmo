// // Import
const centerModel = require('../../models/manage/center');

// // 1. Center || Departments
// Create One
exports.createOne = async (data) => {
  try {
    let result = await centerModel.create(data);
    return result;
  } catch (error) {
    throw error;
  }
};

// Get All
exports.getAll = async () => {
  try {
    let result = await centerModel
      .find()
      .populate([{
        path: 'projectList',
        populate: ['projectType', 'projectStatus', 'techStack', 'center', 'staff']
      }]);
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await centerModel
      .findOne({_id: id})
      .populate([{
        path: 'projectList',
        populate: ['projectType', 'projectStatus', 'techStack', 'center', 'staff']
      }]);
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await centerModel
      .findOneAndUpdate(
        {_id: id},
        body,
        {new: true}
      );
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete
exports.deleteOne = async (id) => {
  try {
    let result = await centerModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}