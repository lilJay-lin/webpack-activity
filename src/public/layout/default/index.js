/**
 * Created by linxiaojie on 2016/12/6.
 */
const layout = require('./index.ejs')
module.exports = {
  render (data) {
    return layout(data)
  }
}