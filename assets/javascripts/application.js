$(document).ready(function(){

  function expandImg(img) {
    $(img).on('mouseenter', function() {
      $(this).animate({
        padding: 5,
        opacity: .5,
      }, 300, function() {
      });
    });
    $(img).on('mouseleave', function() {
      $(this).animate({
        padding: 0,
        opacity: 1,
      }, 100, function() {
      });
    });
  };

  $('.work').on('mouseenter', function() {
    $('#dropdown-work').show('slow');
  });

  $('#dropdown-work').on('mouseleave', function() {
    $(this).hide('slow');
  });

  $('#logo-image').fadeIn(1000);

  $('#graphic-design').animate({left:'+=1.5em', opacity:1}, 1500);

  $('#front-end').animate({left:'+=2.5em', opacity:1}, 1500);

  expandImg('#logo-image');
  expandImg('#graphic-design');
  expandImg('#front-end');

});
