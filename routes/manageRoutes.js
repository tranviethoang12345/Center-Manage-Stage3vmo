const centerRouter = require('./manage/center.route');
const staffRouter = require('./manage/staff.route');
const projectRouter = require('./manage/project.route');

const routes = [centerRouter, staffRouter, projectRouter];

module.exports = routes;