//Import Service
const projectStatusService =  require('../../service/category/projectStatus');
const statusService = require('../../service/message/status');

// Name 
const n = 'States Project';

// // 2. States Project
// Create
exports.createProjectStatus = async (req, res) => {
  try {
    var body = req.body;
    let create = await projectStatusService.createOne(body);
    res.status(200).json(statusService.success(n, 0, create));
  } catch (error) {
    if(error.code == 11000)
    {
    res.json(body.name + ' name has been create');
    }
  }
};

// Get All
exports.getAllProjectStatus = async (req, res) => {
  try {
    let getAll = await projectStatusService.getAll();
    res.status(200).json(statusService.success(n, 1, getAll));
  } catch (error) {
    res.json(error.message);
  }
}

// Get 1
exports.getOneProjectStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let getOne = await projectStatusService.getOne(id);
    res.status(200).json(statusService.success(n, 2, getOne));
  } catch (error) {
    res.json(error.message);
  }
};

// Update
exports.updateProjectStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let body =  req.body;
    let update = await projectStatusService.updateOne(id, body);
    res.status(200).json(statusService.success(n, 3, update));
  } catch (error) {
    console.log(error);
  }
};

// Delete
exports.deleteProjectStatus = async (req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await projectStatusService.deleteOne(id);
    res.status(200).json(statusService.success(n, 4, deleteData));
  } catch (error) {
    console.log(error);
  }
};