/**
 * Created by linxiaojie on 2016/12/6.
 */
const template = require('./index.ejs')

module.exports = {
  render (data) {
    return template(data)
  }
}