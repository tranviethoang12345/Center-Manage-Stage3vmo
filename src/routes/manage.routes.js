const centerRouter = require('../manage/center/center.routes');
const staffRouter = require('../manage/staff/staff.routes');
const projectRouter = require('../manage/project/project.routes');

const routes = [centerRouter, staffRouter, projectRouter];

module.exports = routes;