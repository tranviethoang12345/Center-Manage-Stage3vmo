// // Connect Database
const categoryTechStackModel = require("../../models/category/techStack");

// // Tech Stack
// Create One
exports.createOne = async (data) => {
  try {
    let result = await categoryTechStackModel.create(body);
    return result;
  } catch (error) {
    throw error;
  }
};

// Get All
exports.getAll = async () => {
  try {
    let result = await categoryTechStackModel.find();
    return result;
  } catch (error) {
    throw error;
  }
}

// Get One