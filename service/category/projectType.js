// // Connect Database
const projectTypeModel = require('../../models/category/projectType');

// // Connect Service
const paginationService = require('../pagination');

// // 1. Project Type
// Create One  
exports.createOne = async (data) => {
  try {
    let result = await projectTypeModel.create(data);
    return result;
  } catch (error) {
    throw error;
  }
}

// Get All
exports.getAll = async (paginatedRequest) => {
  try {
    let result = await paginationService.paginatedResult(
      paginatedRequest, 
      projectTypeModel.find()
    );
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One
exports.getOne = async (id) => {
  try {
    let result = await projectTypeModel.findOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// Update
exports.updateOne = async (id, body) => {
  try {
    let result = await projectTypeModel.findOneAndUpdate({_id: id}, body, {new: true});
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

// Delete
exports.deleteOne = async (id) => {
  try {
    let result = await projectTypeModel.deleteOne({_id: id});
    return result;
  } catch (error) {
    throw error;
  }
}

// // Database
// exports.status = async (callback) => {
//   var sql = "SELECT * FROM status WHERE projectType = " + mysql.escape(req.body.username);
//   database.query(sql, function (err, result) {
//     callback(err, result ? result.length > 0 : false);
//   });
// }
