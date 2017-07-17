'use strict'

var projects = [];

function Project(rawDataObj) {
  this.title = rawDataObj.title;
  this.projUrl = rawDataObj.projUrl;
  this.image = rawDataObj.image;
  this.category = rawDataObj.category;
  this.completedOn = rawDataObj.completedOn;
}

Project.prototype.toHtml = function() {
  var myprojectsList = $('#myprojectsList-template').html();
  var compile = Handlebars.compile(myprojectsList);
  return compile(this)
};

rawData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});

projects.forEach(function(Project) {
  $('#articles').append(Project.toHtml());
});
