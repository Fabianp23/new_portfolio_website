$(document).ready(function(){

  $('.dropdown a:first-of-type').on('mouseenter', function() {
    $('#dropdown-work').show('slow');
  });

  $('#dropdown-work').on('mouseleave', function() {
    $(this).hide('slow');
  });

  $('#logo-image').hide('load', function() {
    $(this).fadeIn(3000);
  });

  $('#graphic-design').hide('load', function() {
    $(this).animate({left:200, opacity:'show'}, 1500);
  });

  $('#front-end').hide('load', function() {
    $(this).animate({left:225, opacity:'show'}, 1500);
  });


  function expandImg(img) {
    $(img).on('mouseenter', function() {
      $(this).css('padding', '5px');
    });
    $(img).on('mouseleave', function() {
      $(this).css('padding', '0px');
    });
  };

  expandImg('#logo-image');
  expandImg('#graphic-design');
  expandImg('#front-end');

});
