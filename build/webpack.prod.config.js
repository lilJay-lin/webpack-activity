/**
 * Created by linxiaojie on 2016/11/2.
 */
const path = require('path')
const util = require('./util')
const prodConfig = require('./webpack/prod_config')
const output = require('./webpack/output')
output.publicPath = prodConfig.publicPath

module.exports = {
    /*入口配置*/
    entry: require('./webpack/entry'),

    /*编译输出配置*/
    output: output,

    /*resolve别名配置*/
    resolve: require('./webpack/resolve'),

    /*插件配置*/
    plugins: require('./webpack/prod_plugins'),

    /*定义全局变量: require('jquery')会返回window.jQuery*/
    externals: {
        'jquery': 'window.jQuery'
    },
    /*文件加载模块配置*/
    module: require('./webpack/modules'),

    /*eslint编码规范*/
    eslint: require('./webpack/eslint'),

    /*postcss配置*/
    postcss: require('./webpack/postcss')
};