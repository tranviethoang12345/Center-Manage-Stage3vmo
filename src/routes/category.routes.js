const projectTypeRouter = require('./category/projectType.routes');
const projectStatusRouter = require('./category/projectStatus.routes');
const techStackRouter = require('./category/techStack.routes');
const customerGroupRouter = require('./category/customerGroup.routes');

const routes = [projectTypeRouter, projectStatusRouter, techStackRouter, customerGroupRouter];

module.exports = routes;