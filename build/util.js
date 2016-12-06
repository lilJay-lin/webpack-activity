/**
 * Created by linxiaojie on 2016/11/4.
 */
const path = require('path')

const assetsSubDirectory = 'static'

exports.assetsSubDirectory = assetsSubDirectory

exports.assetsPath = function (_path) {
    return path.posix.join(assetsSubDirectory, _path)
}