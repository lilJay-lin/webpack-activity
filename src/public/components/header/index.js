/**
 * Created by linxiaojie on 2016/12/6.
 */
const header = require('./index.ejs')

module.exports = {
  render (data) {
    return header(data)
  }
}