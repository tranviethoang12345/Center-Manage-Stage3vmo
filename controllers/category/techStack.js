// // Import
const serviceTechStack = require('../../service/category/techStack');

// // 3. Tech Stack
// Create
exports.createTechStack = async(req, res) => {
  try {
    let body = req.body;
    let create = await serviceTechStack.create(body);
    res.status(200).json({
      message: 'Create Tech Stack successful',
      messageCode: 'CREATE_TECH_STACK_SUCCESSFUL',
      data: create,
      status: 200
    })
  } catch (error) {
    res.json(error.message);
  }
};

// Get All
exports.getAllTechStack = async(req, res) => {
  try {
    let getAll = await serviceTechStack.getAll();
    res.status(200).json({
      message: 'Find All Tech Stack successful',
      messageCode: 'FIND_ALL_TECH_STACK_SUCCESSFUL',
      data: getAll,
      status: 200
    })
  } catch (error) {
    res.json(error.message);
  }
}

// Get 1
exports.getOneTechStack = async(req, res) => {
  try {
    let id = req.params.id;
    let getOne = await serviceTechStack.getOne(id);
    res.status(200).json({
      message: 'Find Tech Stack successful',
      messageCode: 'FIND_TECH_STACK_SUCCESSFUL',
      data: getOne,
      status: 200
    })
  } catch (error) {    
    res.json(error.message);
  }
}

// Update
exports.updateTechStack = async(req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await serviceTechStack.updateOne(id, body);
    res.status(200).json({
      message: 'Update Tech Stack successful',
      messageCode: 'UPDATE_TECH_STACK_SUCCESSFUL',
      data: update,
      status: 200
    })
  } catch (error) {
    res.json(error.message);
  }
}

// Delete
exports.deleteTechStack = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await categoryModel.techStack.deleteOne(id);
    res.status(200).json({
      message: 'Delete Tech Stack successful',
      messageCode: 'DELETE_TECH_STACK_SUCCESSFUL',
      data: deleteData,
      status: 200
    })
  } catch (error) {
    res.json(error.message);
  }
}