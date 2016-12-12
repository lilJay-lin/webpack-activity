/**
 * Created by liljay on 2016/12/7.
 */
require('./index.less')
require('../_base/index.less')
require('components/topnav/page')
require('components/footer/page')
require('components/topSearch/page')
require('components/searchParam/page')
require('components/searchResultItem/page')
require('components/pagination/page')


window.dvmouseover = function(obj, ulid) {
  document.getElementById(ulid).style.display = '';
  obj.className = "tag_select_hover";
}
window.dvmouseout = function(obj, ulid) {
  document.getElementById(ulid).style.display = 'none';
  obj.className = "tag_select";
}

window.limouseover = function(obj) {
  if (obj.className != "open_selected") {
    obj.className = 'open_hover';
  }
}
limouseout = function(obj) {
  if (obj.attributes["selected"] == "true") {
    obj.className = 'open_selected';
  }
  else {
    if (obj.className != "open_selected") {
      obj.className = 'open';
    }
  }
}
window.hiddenPt = function(dl) {
  var citychange = document.getElementById(dl.id);
  citychange.style.display = "none";
  timeout = setTimeout("hiddenPt", 100)
}
window.showPt = function(dl){
  var citychange = document.getElementById(dl.id);
  window.clearTimeout(timeout);
  citychange.style.display = "";
}