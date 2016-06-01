$(document).ready(function(){

  $(".dropdown a:first-of-type").on('mouseenter', function(){
    $("#dropdown-work").show('slow');
  });

  $("#dropdown-work").on('mouseleave', function(){
    $(this).hide('slow');
  });

});
