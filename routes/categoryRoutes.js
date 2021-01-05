const projectTypeRouter = require('../routes/category/projectType');
const projectStatusRouter = require('../routes/category/projectStatus');
const techStackRouter = require('../routes/category/techStack');
const customerGroupRouter = require('../routes/category/customerGroup');

const routes = [projectTypeRouter, projectStatusRouter, techStackRouter, customerGroupRouter];

module.exports = routes;