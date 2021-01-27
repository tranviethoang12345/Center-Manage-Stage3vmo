const usersRouter = require('../project/users/user.routes');
const authRouter = require('../project/auth/auth.routes');

const routes = [usersRouter, authRouter]

module.exports = routes;