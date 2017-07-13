'use strict';

var articleView = {};

articleView.handleNav = function() {
  $('.tab').on('click', function() {
    console.log('click');
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
  });
}

articleView.handleNav();

// $(document).ready(function(){
//   $('#nav').on('click', function() {
//     console.log('click');
//   });
// });


// articleView.handleMainNav = function() {
//   $('.tab').on('click', function() {
//     $('.tab-content').hide();
//     $('#' + $(this).attr('data-content')).show();
//
//   });
