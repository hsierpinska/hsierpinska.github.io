$(window).scroll(function(){
  if($(document).scrollTop() > 0) {
      $('#sticky').addClass('small');
      
  } else {
      $('#sticky').removeClass('small');
  }
});