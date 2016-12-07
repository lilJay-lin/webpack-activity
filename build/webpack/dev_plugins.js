/**
 * Created by linxiaojie on 2016/12/5.
 */
const plugins = require('./plugins')
const webpack = require('webpack')

plugins.push(new webpack.DefinePlugin({
  PRODUCTION: JSON.stringify(false)
}))

module.exports = plugins