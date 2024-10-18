function loadScript(url) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

$(window).on("load", function () {
  // Check if jQuery and GSAP are loaded
  // if (window.jQuery && window.gsap && window.Swiper) {
  if (window.jQuery && window.Swiper) {
    // $('.preloader').hide();
    document.querySelector(".progress-animation").addEventListener("animationend", () => {
      $('.preloader').hide();
      // if ($('.preloader').is(":hidden")) {
      //   $('html,body').css('overflow-y', 'scroll');
      // }
      // else {
      //   $('html,body').css('overflow', 'hidden');
      // }
    })



    runSwiper();
    runSwiper1();
    runSwiper2();
    // runSwiper3();
    // runSwiperMobile();
    latestSwiper();
    // runGsap();
    // runGsap1();
    navbarMethod();
    animationMethod();
    // Libraries are loaded, proceed with your code
    // console.log('Both jQuery and GSAP and Swiper are loaded. You can proceed with your code.');
  } else {
    // One or more libraries are not loaded
    // We should handle the error appropriately
    // console.error('One or more of jQuery, GSAP, or Swiper are not loaded.');

    Promise.all([
      loadScript('https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js?r=5426'),
      loadScript('https://code.jquery.com/jquery-3.6.1.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js')
    ]).then(() => {
      // All scripts are loaded, you can use them here
      console.log('All scripts are loaded in a second try, you can use them here')
      runSwiper();
      runSwiper1();
      runSwiper2();
      // runSwiper3();
      // runSwiperMobile();
      latestSwiper();
      // runGsap();
      // runGsap1();
      navbarMethod();
      animationMethod();
    }).catch(() => {
      // There was an error loading one or more scripts
      console.error("Something is blocking one or more needed scripts");
    });
  }

});





function animationMethod() {
  // $('.horizontal-accordion .small').click(function () {
  //   $('.horizontal-accordion .expand .text-content').addClass('opacity-animation')
  //   $('.horizontal-accordion .small .text-content').removeClass('opacity-animation')
  // })

  $(window).scroll(function () {
    // Section 1 animation
    if ($(window).scrollTop() >= $('#section1').offset().top - 110) {
      $('#section1 .animation-wrapper p, #section1 .animation-wrapper img, #section1 .animation-wrapper iframe').addClass('animation1');
      $('#section1 .animation-wrapper .divider').addClass('animation2');
      $('#section1 .animation-wrapper-opacity p').addClass('animation3');
      $('#section1 .animation-wrapper .button-link').addClass('animation1');
    }
    else {
      if ($(window).scrollTop() <= $('#section1').offset().top - $(window).height()) {
        $('#section1 .animation-wrapper p, #section1 .animation-wrapper img, #section1 .animation-wrapper iframe').removeClass('animation1');
        $('#section1 .animation-wrapper .divider').removeClass('animation2');
        $('#section1 .animation-wrapper-opacity p').removeClass('animation3');
        $('#section1 .animation-wrapper .button-link').removeClass('animation1');
      }
    }

    // Section 2 animation
    if ($(window).scrollTop() >= $('#section2').offset().top - 110) {
      $('#section2 .animation-wrapper p, #section2 .animation-wrapper img').addClass('animation1');
      $('#section2 .animation-wrapper .divider').addClass('animation2');
      $('#section2 .animation-wrapper-opacity p').addClass('animation3');
      $('#section2 .animation-wrapper .button-link').addClass('animation1');
      $('#section2 .animation-wrapper-image').addClass('animation4');
    }
    else {
      if ($(window).scrollTop() <= $('#section2').offset().top - $(window).height()) {
        $('#section2 .animation-wrapper p, #section2 .animation-wrapper img').removeClass('animation1');
        $('#section2 .animation-wrapper .divider').removeClass('animation2');
        $('#section2 .animation-wrapper-opacity p').removeClass('animation3');
        $('#section2 .animation-wrapper .button-link').removeClass('animation1');
        $('#section2 .animation-wrapper-image').removeClass('animation4');
      }
    }


    // Section 5 animation
    if ($(window).scrollTop() >= $('#section5').offset().top - 200) {
      $('#section5 .animation-wrapper p, #section5 .animation-wrapper img').addClass('animation1');
      $('#section5 .animation-wrapper .divider').addClass('animation2');
      $('#section5 .animation-wrapper-opacity p').addClass('animation3');
      $('#section5 .animation-wrapper .button-link').addClass('animation1');
      $('#section5 .animation-wrapper-image').addClass('animation4');
    }
    else {
      if ($(window).scrollTop() <= $('#section5').offset().top - $(window).height()) {
        $('#section5 .animation-wrapper p, #section5 .animation-wrapper img').removeClass('animation1');
        $('#section5 .animation-wrapper .divider').removeClass('animation2');
        $('#section5 .animation-wrapper-opacity p').removeClass('animation3');
        $('#section5 .animation-wrapper .button-link').removeClass('animation1');
        $('#section5 .animation-wrapper-image').removeClass('animation4');
      }
    }

    // Section 6 animation
    if ($(window).scrollTop() >= $('#section6').offset().top - 110) {
      $('#section6 .animation-wrapper-1').addClass('animation1');
      $('#section6 .animation-wrapper p').addClass('animation1');
    }
    else {
      if ($(window).scrollTop() <= $('#section6').offset().top - $(window).height()) {
        $('#section6 .animation-wrapper-1').removeClass('animation1');
        $('#section6 .animation-wrapper p').removeClass('animation1');
      }
    }


    // Section 7 animation
    if ($(window).scrollTop() >= $('#section7').offset().top - 110) {
      $('.white-container').addClass('clip-rect');
    }
    else {
      if ($(window).scrollTop() <= $('#section7').offset().top - $(window).height()) {
        $('.white-container').removeClass('clip-rect');
      }
    }

    // Section 8 animation
    // if ($(window).scrollTop() >= $('#section8').offset().top - 110) {
    //   $('#section8 .animation-wrapper-1').addClass('animation1');
    //   $('#section8 .animation-wrapper p').addClass('animation1');
    //   $('.storySwiper .swiper-slide-next .horizontal-accordion .choice:first-child .text-content').addClass('opacity-animation')

    //   // $('.initial-expanded .first-slider .text-content').addClass('opacity-animation');
    // }
    // else {
    //   if ($(window).scrollTop() <= $('#section8').offset().top - $(window).height()) {
    //     $('#section8 .animation-wrapper-1').removeClass('animation1');
    //     $('#section8 .animation-wrapper p').removeClass('animation1');
    //     // $('.initial-expanded .first-slider .text-content').removeClass('opacity-animation');

    //   }
    // }

    // Section 4 animation
    if ($(window).scrollTop() >= $('#section4').offset().top - 90) {
      $('#section4 .white-panel').addClass('translate-x-panel')
      $('#section4 .map-image img').addClass('translate-bg')
      $('#section4 .tab-pane.active').addClass('clip-animate-y-map-delay')
      $('#section4 .map-title').addClass('opacity-map-delay')
      $('.mySection1 .nav-link').addClass('opacity-map-delay')
    }
    else {
      if ($(window).scrollTop() <= $('#section4').offset().top - $(window).height()) {
        $('#section4 .white-panel').removeClass('translate-x-panel')
        $('#section4 .map-image img').removeClass('translate-bg')
        $('#section4 .tab-pane.active').removeClass('clip-animate-y-map-delay')
        $('#section4 .map-title').removeClass('opacity-map-delay')
        $('.mySection1 .nav-link').removeClass('opacity-map-delay')
      }
    }
  });

  $('.mySection1 .nav-link').click(function () {
    val = $(this).attr('data-bs-target');
    $('.tab-pane').removeClass('clip-animate-y-map')
    $(val).addClass('clip-animate-y-map')
  })


  $('.search-icon').click(function () {
    $('.search-form').toggleClass('w-100');
  })


  // $('.animation-wrapper .button-link').ScrollOnReveal({
  //   beforeCss: {
  //     transform: 'translateY(110%)',
  //     opacity: '1'
  //   },
  //   animatedCss: {
  //     transform: 'none',
  //     opacity: '1'
  //   },
  //   speed: 600,
  //   delay: 200,
  //   easing: 'ease-out'
  // })
  // $('.animation-wrapper .button-link.readmore').ScrollOnReveal({
  //   beforeCss: {
  //     transform: 'none'
  //   },
  //   animatedCss: {
  //     transform: 'none'
  //   },
  // })
  // $('.animation-wrapper .divider').ScrollOnReveal({
  //   beforeCss: {
  //     width: '0',
  //     opacity: '1'
  //   },
  //   animatedCss: {
  //     width: '100%',
  //     opacity: '1'
  //   },
  //   speed: 1000,
  //   delay: 500,
  //   easing: 'ease-out'
  // })

  // $('.animation-wrapper-opacity p').ScrollOnReveal({
  //   beforeCss: {
  //     opacity: '0'
  //   },
  //   animatedCss: {
  //     opacity: '1'
  //   },
  //   speed: 1000,
  //   delay: 1.2,
  //   easing: 'ease-out'
  // })

  // $('.animation-wrapper-oblique p').ScrollOnReveal({
  //   beforeCss: {
  //     transform: 'translate(-5%, 110%)',
  //     opacity: '1'
  //   },
  //   animatedCss: {
  //     transform: 'none',
  //     opacity: '1'
  //   },
  //   speed: 600,
  //   delay: 1,
  //   easing: 'ease-out'
  // })
  // $('.animation-wrapper-image img').ScrollOnReveal({
  //   beforeCss: {
  //     width: '0',
  //     opacity: '1'
  //   },
  //   animatedCss: {
  //     width: '100%',
  //     opacity: '1'
  //   },
  //   speed: 600,
  //   delay: 1000,
  //   easing: 'linear'
  // })


  // $('.animation-wrapper.map-section p').ScrollOnReveal({
  //   beforeCss: {
  //     transform: 'translateY(110%)',
  //     opacity: '1'
  //   },
  //   animatedCss: {
  //     transform: 'none',
  //     opacity: '1'
  //   },
  //   speed: 600,
  //   delay: 100,
  //   easing: 'ease-out'
  // })
  // $('.white-container').ScrollOnReveal({
  //   beforeCss: {
  //     "clip-path": "inset(90% 0 0 0)"
  //   },
  //   animatedCss: {
  //     "clip-path": "inset(0 0 0 0)"
  //   },
  //   speed: 600,
  //   delay: 100,
  //   easing: 'ease-out'
  // })


  if (window.matchMedia("(max-width: 991px)").matches) {
    $('.animation-wrapper-opacity p').ScrollOnReveal({
      beforeCss: {
        opacity: '1'
      },
    })
    $('.animation-wrapper p,.animation-wrapper video,.animation-wrapper .button-link, .animation-wrapper .accordion, .animation-wrapper .swiper-slide, .animation-wrapper h5').ScrollOnReveal({
      beforeCss: {
        transform: 'none',
        opacity: '1'
      },
    })
    $('.animation-wrapper .divider').ScrollOnReveal({
      beforeCss: {
        width: '100%',
        opacity: '1'
      }
    });
    $('.animation-wrapper-oblique p').ScrollOnReveal({
      beforeCss: {
        transform: 'none',
        opacity: '1'
      }
    });
    $('.animation-wrapper-image img').ScrollOnReveal({
      beforeCss: {
        width: '100%',
        opacity: '1'
      },
    })

  }




  // $(window).scroll(function () {
  //   if ($('#box').css('opacity') <= 0.2) {
  //     $(".map-text-animation").addClass('clip-animate-y-map');
  //     $(".map-button-animation").addClass('clip-animate-y-map-button');
  //     $(".map-text-animation-x").addClass('clip-animate-x-map');

  //     // $(window).off('scroll');
  //   }
  //   else {
  //     if ($('#box').css('opacity') == 1) {
  //       $(".map-text-animation").css("transform", "translateY(100%);")
  //       $(".map-text-animation-x").css("transform", "translateX(-100%);")
  //       $(".map-button-animation").css("transform", "translateY(100%) translateX(-50%);")
  //       $(".map-text-animation").removeClass('clip-animate-y-map');
  //       $(".map-button-animation").removeClass('clip-animate-y-map-button');
  //       $(".map-text-animation-x").removeClass('clip-animate-x-map');
  //     }

  //   }

  // })
}



function navbarMethod() {
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
  // const elScrollable = document.querySelector("html")
  // const elNav = document.querySelector("#header");
  // const heightNav = $('#header').outerHeight();
  // const handleNav = () => {
  //   const scrollTop = elScrollable.scrollTop;
  //   elNav.classList.toggle("white-navbar", scrollTop >= 100);
  //   elNav.classList.toggle("navigation-sticky", scrollTop >= 100);
  // };

  // addEventListener("scroll", handleNav)
  // addEventListener("resize", handleNav)
  // handleNav();

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
}

function runGsap1() {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 992px)", () => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mySection1",
        // scrub: true,
        pin: ".mySection1",
        pinSpacing: true,

        // start: 'top-=' + header.offsetHeight + ' top',
        // start: 'top-=' + 0 + ' top',
        start: "top top",
        end: "+=100vh",
        onLeave: function () {
          $('.map-title').addClass('clip-animate-y-map');
          $('.map-text-animation').addClass('clip-animate-y-map');
          $(".mySection1 .nav-link").addClass('map-btns');
        },
      }
    });
    tl.fromTo('#box', { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", scale: 1, opacity: 1 }, { scale: 0.8, clipPath: "polygon(60% 15%,90% 15%,90% 90%,60% 90%)", zIndex: -100, opacity: 0, delay: 0.3, duration: 1, ease: "none", })
    // tl.from(".purple p", { scale: 1.2, ease: "power2" });
    // tl.fromTo('#box', { scale: 1, opacity: 1 }, { "clip-path": "polygon(60% 30%,90% 30%,90% 70%,60% 70%)", scale: 0, opacity: 0, delay: 0.2, duration: 1, ease: "none", y: 100, x: 400 })
    // tl.fromTo('#box', { opacity: 1 }, { opacity: 0, delay: 0.2, duration: 1, ease: "none" })
  });
}

function runGsap() {
  let pp = gsap.matchMedia();

  pp.add("(min-width: 992px)", () => {
    gsap.registerPlugin(ScrollTrigger);

    let panels = gsap.utils.toArray(".panel");
    // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
    let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
        pin: true,
        pinSpacing: false
      });
    });

    /* ScrollTrigger.create({
       snap: {
         snapTo: (progress, self) => {
           let panelStarts = tops.map(st => st.start) // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
           snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
           return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
           return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window));
         },
         duration: 0.5
       }
     });*/
  });
}


// function runGsap() {
//   gsap.registerPlugin(ScrollTrigger);

//   gsap.utils.toArray(".panel").forEach((panel, i) => {
//     ScrollTrigger.create({
//       trigger: panel,
//       start: "top top",
//       scrub: true,
//       pin: true,
//       pinSpacing: false
//     });
//   });


//   ScrollTrigger.create({
//     snap: {
//       snapTo: 1 / 4,
//       duration: 0.5
//     }
//   });
// }


// console.clear();

// gsap.registerPlugin(ScrollTrigger);

// const panels = gsap.utils.toArray(".panel1");
// gsap.to(".horizontal-container", {
//   xPercent: -(100 * (panels.length - 1)),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".horizontal-wrapper",
//     start: "center center",
//     end: "+=" + 100 * panels.length + "%",
//     pin: ".swiper-section-1",
//     scrub: 0.5,

//     onLeave: function () {
//       $('html,body').removeClass('overflow-hidden')
//       $('html,body').addClass('overflow-auto')
//     },
//     onLeaveBack: function() {
//       $('html,body').addClass('overflow-hidden')
//       $('html,body').removeClass('overflow-auto')
//     }
//   }
// });









