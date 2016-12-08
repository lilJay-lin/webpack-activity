/**
 * Created by linxiaojie on 2016/12/6.
 */
const template = require('./index.ejs')

module.exports = {
  render ({
    leftTitle = '',
    rightTitle = '',
    leftContent = '',
    rightContent = ''
    }) {
    return template({
      leftTitle,
      rightTitle,
      leftContent,
      rightContent
    })
  }
}