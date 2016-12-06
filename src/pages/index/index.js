/**
 * Created by linxiaojie on 2016/12/6.
 */
const content = require('./index.ejs')
const layout = require('layout/default')
const header = require('components/header')

module.exports = layout.render({
  header: header.render(),
  content: content()
})