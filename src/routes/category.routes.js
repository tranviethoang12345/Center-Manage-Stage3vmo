const projectTypeRouter = require('../project/category/projectType/projectType.routes');
const projectStatusRouter = require('../project/category/projectStatus/projectStatus.routes');
const techStackRouter = require('../project/category/techStack/techStack.routes');
const customerGroupRouter = require('../project/category/customerGroup/customerGroup.routes');

const routes = [projectTypeRouter, projectStatusRouter, techStackRouter, customerGroupRouter];

module.exports = routes;