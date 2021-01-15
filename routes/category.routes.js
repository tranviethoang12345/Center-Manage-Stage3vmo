const projectTypeRouter = require('../routes/category/projectType.routes');
const projectStatusRouter = require('../routes/category/projectStatus.routes');
const techStackRouter = require('../routes/category/techStack.routes');
const customerGroupRouter = require('../routes/category/customerGroup.routes');

const routes = [projectTypeRouter, projectStatusRouter, techStackRouter, customerGroupRouter];

module.exports = routes;