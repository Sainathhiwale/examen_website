// -Smooth Scrolling-----------
$(function() {
  $('.navbar a, .btn').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    //Tab to top
    $(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.scroll-top-wrapper').addClass("show");
    }
    else{
        $('.scroll-top-wrapper').removeClass("show");
    }
});
    $(".scroll-top-wrapper").on("click", function() {
     $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

      //Sticky Header

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.logo-menu').addClass("sticky");
    }
    else{
        $('.logo-menu').removeClass("sticky");
    }
});


// Remove Placeholder
$('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
});


// Content Animation
new WOW().init();

// testimonials
$(document).ready(function() {
 
  $("#testimonials").owlCarousel({
 
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});


// Gallery
$(document).ready(function() {
 
  $("#gallery").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});