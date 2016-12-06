/**
 * Created by linxiaojie on 2016/12/5.
 */
const path = require('path')
const util = require('../util')
const dirVars = require('./dir_vars')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const configPlugins = [
  /*提取公共代码*/
  new webpack.optimize.CommonsChunkPlugin({
    /*设置公共模块的chunk名称，唯一标识*/
    name: 'common/commons',
    /*生成文件名*/
    filename: '[name].bundle.js',
    /*chunks配置需要在哪些模块提取公共代码，不配置默认全部*/
    /*chunks: ['main', 'other'],*/
    /*至少多少个chunk使用才可以提取为公共代码*/
    minChunks: 2
  }),
  /*自动导入模块，页面上使用下面定义的变量时不需要require*/
  /*new webpack.ProvidePlugin({
   $: 'jquery',
   jQuery: 'jquery',
   'window.jQuery': 'jquery',
   'window.$': 'jquery',
   })*/
  /*提取css到文件*/
  new ExtractTextPlugin(util.assetsPath('css/[name].css')),

  /*定义不同环境变量*/
  new webpack.DefinePlugin({
    PRODUCTION: JSON.stringify(false)
  })
]

const htmlPlugin = new HtmlWebpackPlugin({
  filename: './pages/index/index.html',
  template: path.resolve(dirVars.SRC_PATH, './pages/index'),
  hash: true, // 为静态资源生成hash值
  xhtml: true,
});
configPlugins.push(htmlPlugin);

module.exports = configPlugins