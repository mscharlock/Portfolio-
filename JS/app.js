'use strict'

var myProjects = [];

function projWheel(projThumbnail, projUrl, title) {
  this.projThumbnail = projThumbnail;
  this.projUrl = projUrl;
  this.title = title;
  myProjects.push(this);
}

projWheel.prototype.toHtml = function() {
  var $newmyProjects = $('proj').clone();
  $newmyProjects.removeClass('proj');
}









projWheel();
