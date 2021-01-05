const centerRouter = require('./manage/center');
const staffRouter = require('./manage/humanResources');
const projectRouter = require('./manage/project');

const routes = [centerRouter, staffRouter, projectRouter];

module.exports = routes;