// // Import Service
const userService = require('../../services/users/user.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

// // User
// Create User
exports.createUser = async (req, res) => {
  try {
    let result = await userService.createUser(req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get All List User
exports.getListUser = async (req, res) => {
  try {
    let page = parseInt(req.query.page);
    let limit = parseInt(req.query.limit);
    let paginatedRequest = { page, limit };

    let result = await userService.getListUser( paginatedRequest );
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Get 1 User
exports.getUser = async (req, res) => {
  try {
    let result = await userService.getUser(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {    
    return res.status(500).json(responseHelper.error(error));
  }
};

// Update 1 User
exports.updateUser = async (req, res) => {
  try {
    let result = await userService.updateUser(req.params.id, req.body);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// Delete 1 User
exports.deleteUser = async (req, res) => {
  try {
    let result = await userService.deleteUser(req.params.id);
    return res.status(result.status).json(result);
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};