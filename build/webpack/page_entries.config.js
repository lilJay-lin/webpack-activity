var glob = require('glob');
var dirVars = require('./dir_vars');
var options = {
  cwd: dirVars.PAGE_PATH, // 在pages目录里找
  sync: true, // 这里不能异步，只能同步
};
const globInstance = new glob.Glob('!(_)*/', options); // 考虑到多个页面共用HTML等资源的情况，跳过以'_'开头的目录
module.exports = globInstance.found; // 一个数组，形如['index/index', 'index/login', 'alert/index']
