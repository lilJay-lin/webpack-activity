/**
 * Created by linxiaojie on 2016/12/6.
 */
const layout = require('layout/default')
const twoCol = require('layout/twoCol')
const twoCol2 = require('layout/twoCol2')
const picList1 = require('layout/picList1')

const topNav = require('components/topnav')
const bigBanner = require('components/bigbanner')
const tab = require('components/tab')
const imgBox = require('components/imgBox')
const msgBox = require('components/msgBox')
const imgInfo2 = require('components/imgInfo2')
const imgInfo1 = require('components/imgInfo1')

const _buyOrderGroup = require('../_buyOrderGroup')
const _leftAd = require('../_leftAd')
const _indexSearchItem = require('../_indexSearchItem')
let leftContent = ''
let rightContent = ''

/*新房*/
let newHouse = ''
leftContent = _indexSearchItem.render({
  list: [
    [
      '天河',
      '番禺',
      '海珠',
      '天河'
    ],
    [
      '天河',
      '番禺',
      '海珠',
      '天河'
    ],
    [
      '天河',
      '番禺',
      '海珠',
      '海珠'
    ],
    [
      '4999元以下',
      '5000元 - 5999元'
    ],
    [
      '6000元 - 6999元',
      '7000元 - 7999元'
    ],
    [
      '8000元 - 8999元',
      '9000元以上'
    ],
    [
      '49方以下',
      '70-89方',
    ],
    [
      '110-129方',
      '130-149方'
    ],
    [
      '150-199方',
      '200方以上'
    ],
    [
      '一居',
      '二居',
      '三居',
      '四居'
    ],
    [
      '五居',
      '五居以上'
    ]
  ]
})
rightContent = _buyOrderGroup.render() + picList1.render({
  length: 6,
  content: imgBox.render() + imgInfo2.render()
})
newHouse = twoCol.render({
  title: '新房',
  leftContent,
  rightContent
})
/*新房*/
let secondHouse = ''
leftContent = _indexSearchItem.render({
  list: [
    [
      '天河',
      '番禺',
      '海珠',
      '天河'
    ],
    [
      '天河',
      '番禺',
      '海珠',
      '天河'
    ],
    [
      '天河',
      '番禺',
      '海珠',
      '海珠'
    ],
    [
      '50万以下',
      '50万-69万',
    ],
    [
      '70万-89万',
      '90-109万',
    ],
    [
      '110-129万',
      '130-149万'
    ],
    [
      '150-199万',
      '200万以上'
    ],
    [
      '49方以下',
      '70-89方',
    ],
    [
      '110-129方',
      '130-149方'
    ],
    [
      '150-199方',
      '200方以上'
    ],
    [
      '一居',
      '二居',
      '三居',
      '四居'
    ],
    [
      '五居',
      '五居以上'
    ]
  ]
})
rightContent = _leftAd.render() + picList1.render({
  length: 6,
  content: imgBox.render() + imgInfo1.render()
})
secondHouse = twoCol.render({
  title: '二手房',
  leftContent,
  rightContent
})

/*租房+资讯*/
leftContent = picList1.render({
  length: 6,
  content: imgBox.render() + imgInfo1.render()
})
rightContent = msgBox.render() + msgBox.render() + msgBox.render()
let content3 = twoCol2.render({
  leftTitle: '租房',
  rightTitle: '综合资讯',
  leftContent,
  rightContent,
})

/*写字楼+商铺*/
leftContent = picList1.render({
  length: 6,
  content: imgBox.render() + imgInfo1.render()
})
rightContent = picList1.render({
  length: 4,
  content: imgBox.render() + imgInfo1.render()
})
let content4 = twoCol2.render({
  leftTitle: '写字楼',
  rightTitle: '商铺',
  leftContent,
  rightContent,
})


/*厂房仓库+资讯*/
leftContent = picList1.render({
  length: 6,
  content: imgBox.render() + imgInfo1.render()
})
rightContent = msgBox.render() + msgBox.render() + msgBox.render()
let content5 = twoCol2.render({
  leftTitle: '厂房仓库',
  rightTitle: '房产资讯',
  leftContent,
  rightContent,
})

module.exports = layout.render({
  title: '肇庆搜房网',
  keywords: '肇庆 搜房网',
  description: '肇庆搜房网',
  header: topNav.render(),
  bigBanner: bigBanner.render(),
  content: tab.render() + newHouse + secondHouse + content3 + content4 + content5
})