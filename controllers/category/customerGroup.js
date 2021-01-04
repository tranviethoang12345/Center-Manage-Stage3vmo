// // Import
const serviceCustomerGroup = require('../../service/category/customerGroup')

// // 4. Customer Group
// Create
exports.createCustomerGroup = async(req, res) => {
  try {
    let body = req.body;
    let create = await serviceCustomerGroup.createOne(body);
    console.log(create);
    res.status(200).json({
      message: 'Create Customer Group successful',
      messageCode: 'CREATE_CUSTOMER_GROUP_SUCCESSFUL',
      data: create,
      status: 200
    })
  } catch (error) {
    res.json(error.message);
  }
}

// Get All
exports.getAllCustomerGroup = async(req, res) => {
  try {
    let getAll = await serviceCustomerGroup.getAll();
    res.status(200).json({
      message: 'Find All Customer Group successful',
      messageCode: 'FIND_ALL_CUSTOMER_GROUP_SUCCESSFUL',
      data: getAll,
      status: 200
    });
  } catch (error) {
    res.json(error.message);
  }
}

// Get 1
exports.getOneCustomerGroup = async(req, res) => {
  try {
    let id = req.params.id;
    let getOne = await serviceCustomerGroup.getOne(id);
    res.status(200).json({
      message: 'Find Customer Group successful',
      messageCode: 'FIND_CUSTOMER_GROUP_SUCCESSFUL',
      data: getOne,
      status: 200
    });
  } catch (error) {
    res.json(error.message);
  }
}

// Update
exports.updateCustomerGroup = async(req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await serviceCustomerGroup.updateOne(id, body)
    res.status(200).json({
      message: 'Update Customer Group successful', 
      messageCode: 'UPDATE_CUSTOMER_GROUP_SUCCESSFUL',
      data: update,
      status: 200 
      });
  } catch (error) {
    res.json(error.message);
  }
}

// Delete
exports.deleteCustomerGroup = async(req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await serviceCustomerGroup.deleteOne(id);
    res.status(200).json({
      message: 'Delete Customer Group successful',
      messageCode: 'DELETE_CUSTOMER_GROUP_SUCCESSFUL',
      data: deleteData,
      status: 200
    });
  } catch (error) {
    res.json(error.message);
  }
}