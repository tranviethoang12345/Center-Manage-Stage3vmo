// // Import
const projectService = require('../../service/manage/project');
const statusService = require('../../service/message/status');

// Name
const n = 'Project';

// // 3. Project
// Create
exports.createProject = async (req, res) => {
  try {
    let body = req.body;
    let create = await projectService.createOne(body);
    res.status(200).json(statusService.success(n, 0, create));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
}

// Get All
exports.getAllProject = async (req, res) => {
  try {
    let getAll = await projectService.getAll();
    res.status(200).json(statusService.success(n, 1, getAll));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
}

// Get All Populate
exports.getAllProjectPopulate = async (req, res) => {
  try {
    let getAllPopulate = await projectService.getAllPopulate();
    res.status(200).json(statusService.success(n, 1, getAllPopulate));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
}

// Get One
exports.getOneProject = async (req, res) => {
  try {
    let id = req.params.id;
    let getOne = await projectService.getOne(id);
    res.status(200).json(statusService.success(n, 2, getOne));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
}

// Get One Populate
exports.getOneProjectPopulate = async (req, res) => {
  try {
    let id = req.params.id;
    let getOnePopulate = await projectService.getOnePopulate(id);
    res.status(200).json(statusService.success(n, 2, getOnePopulate));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
}

// Update
exports.updateProject = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await projectService.updateOne(id, body);
    res.status(200).json(statusService.success(n, 3, update))
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
}

// Delete
exports.deleteProject = async (req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await projectService.deleteOne(id);
    res.status(200).json(statusService.success(n, 4, deleteData));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
}