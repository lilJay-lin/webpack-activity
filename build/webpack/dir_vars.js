/**
 * Created by linxiaojie on 2016/12/5.
 */
const path = require('path')
const moduleExports = {}

moduleExports.ROOT_PATH = path.resolve(__dirname, '../../')
moduleExports.SRC_PATH = path.resolve(moduleExports.ROOT_PATH, './src')
moduleExports.BUILD_PATH = path.join(moduleExports.ROOT_PATH, './dist')
moduleExports.PAGE_PATH = path.join(moduleExports.ROOT_PATH, './src/pages')

module.exports = moduleExports