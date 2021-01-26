// Create Router
const router = require('express').Router();

// Verify
const verifyToken = require('../middleware/tokenHandler.middleware');


const categoryRoutes = require('../routes/category.routes');
const manageRoutes = require('../routes/manage.routes');
const usersRoutes = require('../routes/users.routes');
const searchRoutes = require('../routes/search.routes');

router.use('/', usersRoutes);
router.use(verifyToken.verifyToken)
router.use('/category', categoryRoutes);
router.use('/manage', manageRoutes);
router.use('/', searchRoutes);

module.exports = router;