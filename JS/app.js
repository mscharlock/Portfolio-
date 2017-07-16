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

if (!this.publishedOn) $newprojWheel.addClass('draft');
$newprojWheel.data('category', this.category);

$newprojWheel.find('h1').html(this.title);
$newprojWheel.find('a').html(this.author);
$newprojWheel.find('a').attr('href', this.authorUrl);
$newprojWheel.find('time').attr('datetime', this.publishedOn);
$newprojWheel.find('.article-body').html(this.body);







// projWheel();
