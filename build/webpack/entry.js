/**
 * Created by linxiaojie on 2016/12/5.
 */
const path = require('path')
const dirVars = require('./dir_vars')

module.exports = {
  main: path.resolve(dirVars.SRC_PATH, 'main.js'),
  other: path.resolve(dirVars.SRC_PATH, 'other.js')
}