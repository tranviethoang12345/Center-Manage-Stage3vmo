// // Connect Database
const accountModel = require('../models/users/user.model');

exports.adminAccount = async (req, res, next) => {
  try {
    let username = 'defaultAccount';
    let email = 'admin@gmail.com';
    let password = '12345678';

    let accountRecord = await accountModel.findOne({ email }, 'id');
    if (accountRecord) {
      return next();
    }
    await accountModel.create(username, email, password)

    return next();
  } catch (error) {
    return error;
  }
}