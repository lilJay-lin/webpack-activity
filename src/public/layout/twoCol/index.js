/**
 * Created by linxiaojie on 2016/12/6.
 */
const template = require('./index.ejs')

module.exports = {
  render ({
    title = '',
    leftContent = '',
    rightContent = ''
    }) {
    return template({
      title,
      leftContent,
      rightContent
    })
  }
}