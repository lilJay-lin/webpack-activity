/**
 * Created by liljay on 2016/12/7.
 */
require('./index.less')

$(function(){
  var $tabs = $('.laybox .tetit div'),
    $tabContents = $('.laybox .tenr'),
    index = 0;
  $tabs.on('mouseover', function(){
    index = $tabs.index($(this))
    showTab(index)
    showTabContent(index)
  });
  function showTab (index) {
    $tabs.removeClass().addClass('s2')
    $tabs.eq(index).removeClass().addClass('s1')
  }
  function showTabContent (index) {
    $tabContents.hide()
    $tabContents.eq(index).show()
  }
})