// // Import Service
const centerService = require('./center.service');

// // Import Helper
const responseHelper = require('../../../helpers/response.helper');

// Name
const n = 'Center';

// // Centers || Departments
// Create Center
exports.createCenter = async (req, res) => {
  try {
    let result = await centerService.createCenter(req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All List Center
exports.getListCenter = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };
    
    let result = await centerService.getListCenter( paginatedRequest );
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All List Center - Populate
exports.getListCenterPopulate = async(req, res) => {
  try {
    let result = await centerService.getListCenterPopulate();
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
}

// // :id -> req

// Get 1 Center
exports.getCenter = async (req, res) => {
  try {
    let result = await centerService.getCenter(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get 1 Center - Populate
exports.getCenterPopulate = async (req, res) => {
  try {
    let result = await centerService.getCenterPopulate(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update 1 Center
exports.updateCenter = async (req, res) => {
  try {
    let result = await centerService.updateCenter(req.params.id, req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete 1 Centers
exports.deleteCenter = async (req, res) => {
  try {
    let result = await centerService.deleteCenter(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};