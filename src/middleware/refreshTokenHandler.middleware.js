// // Import Helper
const responseHelper = require('../helpers/response.helper');
const tokenHelper = require('../helpers/token.helper');

exports.refreshToken = async (req, res, next) => {
  try {
    const { accessToken, refreshToken } = req.body;
    if (!accessToken || !refreshToken) {
      return res.status(401).json(
        responseHelper.success(7, '', 401, 1)
      )
    }
    let accessPayload = tokenHelper.decodeToken(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET_KEY
    );
    let refreshPayload = tokenHelper.verifyToken(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET_KEY
    );

    if (accessPayload.user !== refreshPayload.user) {
      return res.status(401).json(
        responseHelper.success(7, '', 401, 1)
      )
    }
    req.user = refreshPayload.user;
    next();
  } catch (error) {
    
    return res.status(500).json(responseHelper.error(error));
  }
}