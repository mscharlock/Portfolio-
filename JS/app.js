'use strict'

var myProjects = [];

function projWheel(rawDataObj) {
  this.projThumbnail = rawDataObj.projThumbnail;
  this.projUrl = rawDataObj.projUrl;
  this.title = rawDataObj.title;
  myProjects.push(this);
}

projWheel.prototype.toHtml = function() {
  var $newmyProjects = $('proj').clone();
  $newmyProjects.removeClass('proj');
}

if (!this.title) $newmyProjects.addClass('draft');
$newmyProjects.data('category', this.category);

$newmyProjects.find('h1').html(this.title);
$newmyProjects.find('a').html(this.projThumbnail);
$newmyProjects.find('a').attr('href', this.projUrl);







projWheel();
