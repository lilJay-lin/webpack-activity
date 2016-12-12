/**
 * Created by linxiaojie on 2016/12/6.
 */
const layout = require('layout/default')

const content = require('./index.ejs')
const topNav = require('components/topnav')
const footer = require('components/footer')
const topSearch = require('components/topSearch')
const searchParam = require('components/searchParam')
const pagination = require('components/pagination')

module.exports = layout.render({
  title: '肇庆搜房网',
  keywords: '肇庆 搜房网',
  description: '肇庆搜房网',
  header: topNav.render(),
  content: topSearch.render() + searchParam.render() + content({
    pagination: pagination.render()
  }) ,
  footer: footer.render()
})