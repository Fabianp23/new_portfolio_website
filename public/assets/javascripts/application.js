$(document).ready(function(){

  function expandImg(element) {
    $(element).on('mouseenter', function() {
      $(this).animate({
        padding: 5,
        opacity: .5,
      }, 300, function() {
      });
    });
    $(element).on('mouseleave', function() {
      $(this).animate({
        padding: 0,
        opacity: 1,
      }, 100, function() {
      });
    });
  };

  function showHidden(icon) {
    $(icon).on('mouseenter', function() {
      $(this).next('span').fadeIn(500);
    });
    $(icon).on('mouseleave', function() {
      $(this).next('span').hide();
    });
  };

  function fadeInOnLoad(element) {
    $(element).fadeIn(1500);
  };

  $('#web-heading').on('click', function() {
    $('.design-work').css('width', '15%');
    $('.web-work').animate({
      width: '85%',
    }, 1500, function() {
    });
    $('#design-heading').animate({
      marginLeft: '10%',
    }, 1000, function(){
    });
  })

  $('#design-heading').on('click', function() {
    $('.web-work').animate({
      width: '15%',
    }, 1500, function(){
    });
    $('#web-heading').animate({
      marginLeft: '10%',
    }, 1000, function(){
    });
  })

  $('.nav-bar a').on('mouseenter', function() {
    $('#dropdown-work').hide('slow');
  });

  $('.work').on('mouseenter', function() {
    $('#dropdown-work').show('slow');
  });

  $('#dropdown-work').on('mouseleave', function() {
    $(this).hide('slow');
  });

  $('#graphic-design').animate({left:'+=1.5em', opacity:1}, 1500);
  $('#front-end').animate({left:'+=2.5em', opacity:1}, 1500);
  $('.fa').animate({left:'+=1.8em', opacity:1}, 1000);

  fadeInOnLoad('#about-image');
  fadeInOnLoad('#logo-image');
  fadeInOnLoad('#contact-image');
  fadeInOnLoad('.web-work');
  fadeInOnLoad('#design-heading');
  fadeInOnLoad('#about-me-image');
  expandImg('#graphic-design');
  expandImg('#front-end');
  expandImg('.fa');
  showHidden('.contact-phone');
  showHidden('.contact-email');
  showHidden('.contact-linkedin');
  showHidden('.contact-github');

});
