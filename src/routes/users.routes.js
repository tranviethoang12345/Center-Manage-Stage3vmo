const authRouter = require('../project/auth/auth.routes');
const usersRouter = require('../project/users/user.routes');

const routes = [authRouter,usersRouter]

module.exports = routes;