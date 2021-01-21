const {sign, decode, verify} = require('jsonwebtoken');

exports.signToken = (payload, secret, expiredTime) => {
  return sign(payload, secret, {
    expiresIn: expiredTime,
  })
};

exports.decodeToken = (token, secretKey) => {
  return decode(token, secretKey)
};

exports.decodeToken = () => {
  return verify(token, secretKey)
};