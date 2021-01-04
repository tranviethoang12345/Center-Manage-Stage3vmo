const categoryProjectTypeRouter = require('../routes/category/projectType');
const categoryProjectStatusRouter = require('../routes/category/projectStatus');
const categoryTechStackRouter = require('../routes/category/techStack');
const categoryCustomerGroupRouter = require('../routes/category/customerGroup');

const routes = [categoryProjectTypeRouter, categoryProjectStatusRouter, categoryTechStackRouter, categoryCustomerGroupRouter]

module.exports = routes;