const jwt = require('jsonwebtoken');

const categoryModel = require('../models/categoryModel');

// // 1. Project type
// Create
exports.createProjectType = async(req, res) => {
  try {
    let body = req.body;
    let create = await categoryModel.projectType.create(body);
    res.json(create)
  } catch (error) {
    console.log(error);
  }
};

// Get All
exports.getAllProjectType = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
};

// Get 1
exports.getOneProjectType = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
};

// Update
exports.updateProjectType = async(req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await categoryModel.projectType.findOneAndUpdate({_id: id}, body, {new: true});
    res.json(update);
  } catch (error) {
    console.log(error);
  }
};

// Delete
exports.deleteProjectType = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await categoryModel.projectType.deleteOne({_id: id});
    res.json(deleteData);
  } catch (error) {
    console.log(error);
  }
};

// // 2. States Project
// Create
exports.createStatesProject = async(req, res) => {
  try {
    let body = req.body;
    let create = await categoryModel.statesProject.create(body);
    res.json(create);
  } catch (error) {
    console.log(error);
  }
};

// Get 1
exports.getOneStatesProject = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
};

// Update
exports.updateStatesProject = async(req, res) => {
  try {
    let id = req.params.id;
    let body =  req.body;
    let update = await categoryModel.statesProject.findByIdAndUpdate({_id: id}, body, {new: true});
    res.json(update);
  } catch (error) {
    console.log(error);
  }
};

// Delete
exports.deleteStatesProject = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await categoryModel.statesProject.deleteOne({_id: id});
    res.json(deleteData);
  } catch (error) {
    console.log(error);
  }
};

// // 3. Tech Stack
// Create
exports.createTechStack = async(req, res) => {
  try {
    let body = req.body;
    let create = await categoryModel.techStack.create(body);
    res.json(create);
  } catch (error) {
    console.log(error);
  }
};

// Get 1
exports.getOneTechStack = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

// Update
exports.updateTechStack = async(req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await categoryModel.techStack.findByIdAndUpdate({_id: id}, body, {new: true});
    res.json(update)
  } catch (error) {
    console.log(error);
  }
}

// Delete
exports.deleteTechStack = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await categoryModel.techStack.deleteOne({_id: id})
  } catch (error) {
    console.log(error);
  }
}

// // 4. Customer Group
// Create
exports.createCustomerGroup = async(req, res) => {
  try {
    let body = req.body;
    let create = await categoryModel.customerGroup.create(body);
    return res.status(200).json({
      message: 'Create Customer Group successful',
      messageCode: 'CREATE_CUSTOMER_GROUP_SUCCESSFUL',
      data: create,
      status: 200
    })
  } catch (error) {
    // console.log(error);
    res.json(error);
  }
}

// Get 1
exports.getOneCustomerGroup = async(req, res) => {
  try {
    let id = req.params.id;
    let getOne = await categoryModel.customerGroup.findOne({_id: id})
    res.status(200).json({
      message: 'Get One Customer Group successful',
      messageCode: 'GET_ONE_CUSTOMER_GROUP_SUCCESSFUL',
      data: getOne,
      status: 200
    });
  } catch (error) {
    // console.log(error);
    res.json(error);
  }
}

// Update
exports.updateCustomerGroup = async(req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await categoryModel.customerGroup.findByIdAndUpdate({_id: id}, body, {new: true});
    res.status(200).json({
      message: 'Update Customer Group successful', 
      messageCode: 'UPDATE_CUSTOMER_GROUP_SUCCESSFUL',
      data: update,
      status: 200 
      });
  } catch (error) {
    // console.log(error);
    res.json(error);
  }
}

// Delete
exports.deleteCustomerGroup = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await categoryModel.customerGroup.deleteOne({_id: id});
    res.status(200).json({
      message: 'Delete Customer Group successful',
      messageCode: 'DELETE_CUSTOMER_GROUP_SUCCESSFUL',
      data: deleteData,
      status: 200
    });
  } catch (error) {
    // console.log(error);
    res.json(error);
  }
}