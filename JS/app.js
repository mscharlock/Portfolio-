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
  var compiled = Handlebars.compile(myprojectsList);
  // return compiled(this) //MS: I don't think you need to return anything here - you just need to have the compiled stuff append?//
};


projects.forEach(function(Project) {
  $('#').append(Project.toHtml()); //MS: Make the # refer to something in your Projects area//
});
//MS: I think I would space out the below differently, like I've done below? Might make it less confusing and easier to debug?//

// console.log('is this thing on');
function hideSections(){
  $('#main').siblings().hide();
}


function handleNav(){
  $('#navbut').on('click', 'button',
  function(){
    console.log($(this).html())
    $('#main').siblings().hide();
    $('#' + $(this).html()).show();
  })
}


handleNav();
hideSections();
