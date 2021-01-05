const centerRouter = require('./manage/center');
const staffRouter = require('./manage/humanResources');
const projectRouter = require('./manage/project');
const adminRouter = require('./admin/admin');

const routes = [manageCenterRouter, manageHumanResourcesRouter, manageProjectRouter, manageAdminRouter];

module.exports = routes;