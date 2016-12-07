/**
 * Created by linxiaojie on 2016/12/6.
 */
const layout = require('./index.ejs')
module.exports = {
  render ({
    keywords = '',
    description = '',
    title = '',
    header = '',
    bigBanner = '',
    content = '',
    footer = ''
    }) {
    return layout({
      keywords,
      description,
      title,
      header,
      bigBanner,
      content,
      footer
    })
  }
}