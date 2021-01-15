const centerRouter = require('./manage/center.routes');
const staffRouter = require('./manage/staff.routes');
const projectRouter = require('./manage/project.routes');

const routes = [centerRouter, staffRouter, projectRouter];

module.exports = routes;