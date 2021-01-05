const centerRouter = require('./manage/center');
const staffRouter = require('./manage/staff');
const projectRouter = require('./manage/project');

const routes = [centerRouter, staffRouter, projectRouter];

module.exports = routes;