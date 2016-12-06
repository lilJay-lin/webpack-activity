/**
 * Created by linxiaojie on 2016/12/5.
 */
const path = require('path')
const dirVars = require('./dir_vars')

module.exports = {
  alias: {
    components: path.resolve(dirVars.SRC_PATH, './public/components'),
    layout: path.resolve(dirVars.SRC_PATH, './public/layout')
  },
  extentions: ['', '.js']
}