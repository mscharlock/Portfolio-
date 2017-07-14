'use strict';

var articleView = {};

articleView.handleNav = function() {
  $('.tab').on('click', function() {
    $('.tab-content').hide();
    $('#' + $(this).attr('data-content')).show();
    console.log('click');
  });
}

// $(document).ready(function(){
articleView.handleNav();
