/**
 * Created by linxiaojie on 2016/11/2.
 */
const render = require('./common/render')
require('./css/index.css')
require('./css/common.less')
var i = 0;
for(;i < 5; i++) {
  render(i)
}