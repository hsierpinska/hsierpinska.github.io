$(window).scroll(function(){
    if($(document).scrollTop() > 0) {
        $('#header').addClass('small');
        
    } else {
        $('#header').removeClass('small');
    }
});