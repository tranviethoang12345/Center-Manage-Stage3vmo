// // Import Service
const authService = require('./auth.service');

// // Import Helper
const responseHelper = require('../../helpers/response.helper');

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