// // Connect Database
const userModel = require('../project/users/user.model');

// // Connect Helper
const responseHelper = require("../helpers/response.helper");
const tokenHelper = require('../helpers/token.helper');

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
      return responseHelper.errorHandler(3, '', 0, 404);
    }
    let accessToken = tokenHelper.signToken({_id: personal._id} , process.env.ACCESS_TOKEN_SECRET_KEY, '1800s');
    let refreshToken = tokenHelper.signToken({_id: personal._id} , process.env.ACCESS_TOKEN_SECRET_KEY, '1800s');
    
    return responseHelper.success(5, n, 200, 
      {
        tokenType: 'Bearer',
        email: email,
        token: accessToken,
        refreshToken: refreshToken
      })
  } catch (error) {
    throw error;
  }
};

exports.refreshTokenService = (refreshToken, payload) => {
  try {
    let accessToken = tokenHelper.signToken({ payload }, process.env.ACCESS_TOKEN_SECRET_KEY, '1800s')
    return responseHelper.success(5, n, 200, 
      {
        tokenType: 'Bearer',
        email: email,
        password: password,
        token: accessToken,
        refreshToken: refreshToken
      })
  } catch (error) {
    throw error;
  }
};
