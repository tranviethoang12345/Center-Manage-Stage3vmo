// // Import Service
const userService = require('../../services/users/user.service');
const authService = require('../../services/users/auth.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');


const { refreshToken } = require('../../middleware/refreshTokenHandler.middleware');

const Joi = require('joi')

// // Authenticator
exports.login = async (req, res) => {
  try {
    let result = await authService.loginService(req.body);
    return res.status(result.status).json(result)
  } catch (error) {
    return res.status(500).json(responseHelper.error(error));
  }
};

// exports.logout = async (req, res) => {
//   try {
//     refreshToken = await refreshToken.refreshToken.filter(token => token !== req.headers.token)
//     return res.status(204).json(refreshToken)

//   } catch (error) {
//     return res.status(500).json(responseHelper.error(error));
//   }
// };

// // User
// Create User
exports.createUser = async (req, res) => {
  try {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().min(8).required(),
      email: Joi.string().email()
    })
    await schema.validateAsync(req.body)
    
    let result = await userService.createUser(req.body);
    console.log(result);
    return res.status(result.status).json(result);
    
  } catch (error) {
    console.log(error);
    return res.status(500).json(responseHelper.error(error));
  }
};
 
// Get All List User
exports.getListUser = async (req, res) => {
  try {
    let result = await userService.getListUser(req.query);
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