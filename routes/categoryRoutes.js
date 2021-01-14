const projectTypeRouter = require('../routes/category/projectType.route');
const projectStatusRouter = require('../routes/category/projectStatus.route');
const techStackRouter = require('../routes/category/techStack.route');
const customerGroupRouter = require('../routes/category/customerGroup.route');

const routes = [projectTypeRouter, projectStatusRouter, techStackRouter, customerGroupRouter];

module.exports = routes;