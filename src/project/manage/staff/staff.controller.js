// // Import Service
const staffService = require('./staff.service');

// // Import Helpers
const responseHelper = require('../../../helpers/response.helper');

// // Staff - HR
// Create
exports.createStaff = async (req, res) => {
  try {
    let result = await staffService.createStaff(req.body);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get All List Staff
exports.getListStaff = async (req, res) => {
  try {
    let result = await staffService.getListStaff(req.query);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get All List Staff - Populate
exports.getListStaffPopulate = async (req, res) => {
  try {
    let result = await staffService.getListStaffPopulate(req.query);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// // :id -> req

// Get 1 Staff
exports.getStaff = async (req, res) => {
  try {
    let result = await staffService.getStaff(req.params.id);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Get 1 Staff -  Populate
exports.getStaffPopulate = async (req, res) => {
  try {
    let result = await staffService.getStaffPopulate(req.params.id);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Update 1 Staff
exports.updateStaff = async (req, res) => {
  try {
    let result = await staffService.updateStaff(req.params.id, req.body);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}

// Delete 1 Staff
exports.deleteStaff = async (req, res) => {
  try {
    let result = await staffService.deleteStaff(req.params.id);
    res.status(result.status).json(result);
  } catch (error) {
    res.status(500).json(responseHelper.error(error));
  }
}