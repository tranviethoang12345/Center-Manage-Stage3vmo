const manageCenterRouter = require('./manage/center');
const manageHumanResourcesRouter = require('./manage/humanResources');
const manageProjectRouter = require('./manage/project');
const manageAdminRouter = require('./manage/admin');

const routes = [manageCenterRouter, manageHumanResourcesRouter, manageProjectRouter, manageAdminRouter];

module.exports = routes;