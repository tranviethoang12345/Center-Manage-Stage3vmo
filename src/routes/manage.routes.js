const centerRouter = require('../project/manage/center/center.routes');
const staffRouter = require('../project/manage/staff/staff.routes');
const projectRouter = require('../project/manage/project/project.routes');

const routes = [centerRouter, staffRouter, projectRouter];

module.exports = routes;