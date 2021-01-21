// // Import npm
const jwt = require('jsonwebtoken');

// // Connect Database
const userModel = require('../../models/users/user.model');

// // Connect Helper
const responseHelper = require("../../helpers/response.helper");
const tokenHelper = require('../../helpers/token.helper');

// Name
const n = 'Authenticator';

// Authenticator
exports.loginService = async (data) => {
  try {
    let { email, password } = data;
    let personal = await userModel.findOne({email})
    if (!personal) {
      return responseHelper.errorHandler(1, `${email}`, 0, 404);
    }
    let isMatch = await personal.comparePassword(password);
    if (!isMatch) {
      return responseHelper.errorHandler(3, `${password}`, 0, 404);
    }
    let accessToken = tokenHelper.signToken( {_id: personal._id} , 'max', '1h');

    return responseHelper.success(5, n, 200, 
      {
        email: email,
        password: password,
        token: accessToken
      })
  } catch (error) {
    console.log(error);
    throw error;
  }
};