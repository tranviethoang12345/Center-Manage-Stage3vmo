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
    let updateOne = await categoryModel.projectType.findOneAndUpdate({_id: id}, body, {new: true});
    res.json(updateOne);
  } catch (error) {
    console.log(error);
  }
};

// Delete
exports.deleteProjectType = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteOne = await categoryModel.projectType.deleteOne({_id: id});
    res.json(deleteOne);
  } catch (error) {
    console.log(error);
  }
};

// // 2. States Project
// Create
exports.createStatesProject = async(req, res) => {
  try {
    
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
    
  } catch (error) {
    console.log(error);
  }
};

// Delete
exports.deleteStatesProject = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
};

// // 3. Tech Stack
// Create
exports.createTechStack = async(req, res) => {
  try {
    
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
    
  } catch (error) {
    console.log(error);
  }
}

// Delete
exports.deleteTechStack = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

// // 4. Customer Group
// Create
exports.createCustomerGroup = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

// Get 1
exports.getOneCustomerGroup = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

// Update
exports.updateCustomerGroup = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}

// Delete
exports.deleteCustomerGroup = async(req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
  }
}