/**
 * Created by linxiaojie on 2016/12/7.
 */
const header = require('./index.ejs')

module.exports = {
  render (data) {
    return header(data)
  }
}