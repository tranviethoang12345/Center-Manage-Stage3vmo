const categoryProjectTypeRouter = require('../routes/category/projectType');
const categoryStatesProjectRouter = require('../routes/category/statesProject');
const categoryTechStackRouter = require('../routes/category/techStack');
const categoryCustomerGroupRouter = require('../routes/category/customerGroup');

const routes = [categoryProjectTypeRouter, categoryStatesProjectRouter, categoryTechStackRouter, categoryCustomerGroupRouter]

module.exports = routes;