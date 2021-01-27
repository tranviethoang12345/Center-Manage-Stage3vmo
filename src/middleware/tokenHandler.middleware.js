// // Import Helper
const responseHelper = require('../helpers/response.helper');
const tokenHelper = require('../helpers/token.helper');

exports.verifyToken = async (req, res, next) => {
  try {
    // Bearer Header
    let authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json(
        responseHelper.errorHandler(5, 'You must send an', 1, 401)
      )
    }

    const [authType, token] = authHeader.trim().split(' ');
    if (authType !== 'Bearer') {
      return responseHelper.errorHandler(4, 'a Bearer token', 1, 401)
    }   

    const user = tokenHelper.verifyToken(token, process.env.ACCESS_TOKEN_SECRET_KEY);
    req.user = user;
    next();
  } catch (error) {
    
    return res.status(500).json(responseHelper.error(error));
  }
}