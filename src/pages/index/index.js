/**
 * Created by linxiaojie on 2016/12/6.
 */
const content = require('./index.ejs')
const layout = require('layout/default')
const topNav = require('components/topnav')
const bigBanner = require('components/bigbanner')

const header = topNav.render({
  content: '1111'
})

module.exports = layout.render({
  title: '肇庆搜房网',
  keywords: '肇庆 搜房网',
  description: '肇庆搜房网',
  header,
  bigBanner: bigBanner.render(),
  content: content(),
  footer: ''
})