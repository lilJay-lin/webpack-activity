/**
 * Created by linxiaojie on 2016/12/7.
 */
require('./index.less')

var $ = require('jquery')
$(function(){
  var $searchKeys = $('.bigbanner-mask .news02 a'),
    $searchInputDir = $('.bigbanner-mask .news03 .searchjt');
  $searchKeys.on('mouseover', function () {
    var $cur = $(this);
    $searchKeys.removeClass('cur')
    $cur.addClass('cur')
    $searchInputDir.hide()
    $searchInputDir.eq($searchKeys.index($cur)).show()
  })
})