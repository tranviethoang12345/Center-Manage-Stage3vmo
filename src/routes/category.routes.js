const projectTypeRouter = require('../category/projectType/projectType.routes');
const projectStatusRouter = require('../category/projectStatus/projectStatus.routes');
const techStackRouter = require('../category/techStack/techStack.routes');
const customerGroupRouter = require('../category/customerGroup/customerGroup.routes');

const routes = [projectTypeRouter, projectStatusRouter, techStackRouter, customerGroupRouter];

module.exports = routes;