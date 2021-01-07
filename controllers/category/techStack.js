// // Import Service
const techStackService = require('../../service/category/techStack');
const statusService = require('../../service/message/status');

// Name
const n = 'Tech Stack';

// // 3. Tech Stack
// Create
exports.createTechStack = async (req, res) => {
  try {
    let body = req.body;
    let create = await techStackService.createOne(body);
    res.status(200).json(statusService.success(n, 0, create));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Get All
exports.getAllTechStack = async (req, res) => {
  try {
    let getAll = await techStackService.getAll();
    res.status(200).json(statusService.success(n, 1, getAll));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
}

// Get 1
exports.getOneTechStack = async (req, res) => {
  try {
    let id = req.params.id;
    let getOne = await techStackService.getOne(id);
    res.status(200).json(statusService.success(n, 2, getOne));
  } catch (error) {    
    res.status(500).json(statusService.error(error));
  }
};

// Update
exports.updateTechStack = async (req, res) => {
  try {
    let id = req.params.id;
    let body = req.body;
    let update = await techStackService.updateOne(id, body);
    res.status(200).json(statusService.success(n, 3, update));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};

// Delete
exports.deleteTechStack = async (req, res) => {
  try {
    let id = req.params.id;
    let deleteData = await techStackService.deleteOne(id);
    res.status(200).json(statusService.success(n, 4, deleteData));
  } catch (error) {
    res.status(500).json(statusService.error(error));
  }
};