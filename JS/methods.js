'use strict';

$(document).ready(function(){
  console.log('Halp');
  $(function() {
    $('.fa-bars').on('click', function(e) {
      e.preventDefault();
      $('.list').slideToggle();
    });
    $('#articles').hide();
    $('.projects').click(function() {
      if($('#articles').is(":hidden")) {
        $('#articles').slideDown("slow");
      } else {
        $('#articles').hide();
      }
    });
    $('#aboutMe').hide();
    $('.aboutMe').click(function() {
      if( $('aboutMe').is(":hidden")){
        $('aboutMe').slideDown("slow");
      } else {
        $('#aboutMe').hide();
      }
    });
});

// Constructor

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
  var compiled = Handlebars.compile(myprojectsList);
  return compiled(this)
};

rawData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});

projects.forEach(function(Project) {
  $('#articles').append(Project.toHtml());
});






//
// var articleView = {};
//
// articleView.handleNav = function() {
//   $('.tab').on('click', function() {
//     $('.tab-content').hide();
//     $('#' + $(this).attr('data-content')).show();
//     console.log('click');
//   });
// }
//
// // $(document).ready(function(){
// articleView.handleNav();
