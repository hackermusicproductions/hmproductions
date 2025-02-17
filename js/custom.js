//header js
$(window).scroll(function(){
    var sticky = $('header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 10) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});