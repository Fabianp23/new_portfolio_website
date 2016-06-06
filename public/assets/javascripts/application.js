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

  function showHidden(icon) {
    $(icon).on('mouseenter', function() {
        $(this).next('span').fadeIn();
    });
    $(icon).on('mouseleave', function() {
        $(this).next('span').hide();
    });
  };

  $('.work').on('mouseenter', function() {
    $('#dropdown-work').show('slow');
  });

  $('#dropdown-work').on('mouseleave', function() {
    $(this).hide('slow');
  });

  function fadeInOnLoad (img) {
    $(img).fadeIn(1500);
  };

  $('#graphic-design').animate({left:'+=1.5em', opacity:1}, 1500);
  $('#front-end').animate({left:'+=2.5em', opacity:1}, 1500);
  $('.fa').animate({left:'+=1.8em', opacity:1}, 1500);

  fadeInOnLoad('#logo-image');
  fadeInOnLoad('#contact-image');
  expandImg('#graphic-design');
  expandImg('#front-end');
  expandImg('.fa');
  showHidden('.contact-phone');
  showHidden('.contact-email');
  showHidden('.contact-linkedin');
  showHidden('.contact-github');

});
