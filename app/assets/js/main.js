$( document ).ready(function() {
    $(".navbar-toggler").click(function () {
        $(this).toggleClass("open");
        $("body").toggleClass("overflow-hidden");
        $(".bottom-nav").toggleClass("bg-white");
        $("header .top-nav a").toggleClass("text-black");
        $("header .top-nav button").toggleClass("text-black");
        $("header .top-nav svg path").toggleClass("change-stroke")
        window.setTimeout(function () {
          $(".logo-dark-green").toggleClass("logo-color-green")
          $(".logo-dark-grey").toggleClass("logo-color-grey");
        }, 150);
      })
    
      $(".navbar-nav li").hover(function () {
        $(this).toggleClass("border-nav");
      })
      $(window).scroll(function () {
        var targt = $(".taregt").offset().top + 145;
        if ($(document).scrollTop() > targt) {
          $('header').addClass('white-navbar');
          $('header').addClass('navigation-sticky');
        }
        else {
          $('header').removeClass('white-navbar');
          $('header').removeClass('navigation-sticky');
    
        }
      });
      $('.search-icon').click(function () {
        $('.search-form').toggleClass('w-100');
      })
    
});