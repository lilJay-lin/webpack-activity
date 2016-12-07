/**
 * Created by linxiaojie on 2016/12/5.
 */
const dirVars = require('./dir_vars')

module.exports = {
  /*页面存放根路径*/
  path: dirVars.BUILD_PATH,
  /*静态资源编译路径, file-loader之类的静态静态资源会拼接这个路径作为访问地址*/
  publicPath: 'http://localhost:8080/',
  /*输出的入口文件*/
  filename: 'pages/[name]/entry.js',
  /*入口文件内部webpack优化生产的文件*/
  chunkFilename: '[id].chunk.js'
}