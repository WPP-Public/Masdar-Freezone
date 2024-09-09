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
    $('.preloader-inside').hide();
    // document.querySelector(".progress-animation").addEventListener("animationend", () => {
    //   // $('.preloader-inside').hide();
    //   // if ($('.preloader').is(":hidden")) {
    //   //   $('html,body').css('overflow-y', 'scroll');
    //   // }
    //   // else {
    //   //   $('html,body').css('overflow', 'hidden');
    //   // }
    // })



    navbarMethod();
    heroParallax();
    animationMethod();

    if (document.getElementById("about") !== null) {
      runSwiper1();
      runSwiper();
    }
  
    if (document.getElementById("sustainable-page") !== null) {
      runSwiper();
    }
    if (document.getElementById("news") !== null) {
      runSwiper();
    }
    if (document.getElementById("tech") !== null) {
      runSwiper();
    }
    if (document.getElementById("article") !== null) {
      runSwiper();
      $('#share-article-button-inside').on('click', function () {
        navigator.clipboard.writeText(window.location.href)
        alert("Link copied to clipboard");
      })
    }
    if (document.getElementById("search-page") !== null) {
      runSwiper();
    }

    if (document.getElementById("media") !== null) {
      runSwiper();
      runSwiper1();
      runSwiper2();
      runSwiper3();
      runSwiper4();
      runSwiper5();
      runSwiper6();
      runSwiper7();
      runSwiper8();
      runSwiper9();
      runSwiper10();
      runSwiper11();
    }
    if (document.getElementById("tech") !== null) {
      $('#load-more-content-1').click(function () {
        $('.underlined-top.hidden-partner').toggleClass('d-none')
        if ($('body').hasClass('en')) {
          if (!$('.underlined-top.hidden-partner').hasClass('d-none')) {
            $('#load-more-content-1').html('Show Less')
          }
          else {
            $('#load-more-content-1').html('Explore More')
          }
        }
        if ($('body').hasClass('ar')) {
          if (!$('.underlined-top.hidden-partner').hasClass('d-none')) {
            $('#load-more-content-1').html('عرض الأقل')
          }
          else {
            $('#load-more-content-1').html('عرض المزيد')
          }
        }

      })
    }
  
    // Libraries are loaded, proceed with your code
    // console.log('Both jQuery and GSAP and Swiper are loaded. You can proceed with your code.');
  } else {
    if (window.jQuery) {
      $('.preloader-inside').hide();
      // document.querySelector(".progress-animation").addEventListener("animationend", () => {
      //   // $('.preloader-inside').hide();
      //   // if ($('.preloader').is(":hidden")) {
      //   //   $('html,body').css('overflow-y', 'scroll');
      //   // }
      //   // else {
      //   //   $('html,body').css('overflow', 'hidden');
      //   // }
      // })
      navbarMethod();
      heroParallax();
      animationMethod();
      // contact()
      // $('.close-accordion').click(function () {
      //   $('.sticky-section .sticky-section-child').css('transform', 'translateY(100%)');
      // })
    }
    else {

      // One or more libraries are not loaded
      // We should handle the error appropriately
      // console.error('One or more of jQuery, GSAP, or Swiper are not loaded.');

      Promise.all([
        loadScript('https://code.jquery.com/jquery-3.6.1.min.js')
      ]).then(() => {
        // All scripts are loaded, you can use them here
        console.log('All scripts are loaded in a second try, you can use them here')

        navbarMethod();
        heroParallax();
        animationMethod()
      }).catch(() => {
        // There was an error loading one or more scripts
        console.error("Something is blocking one or more needed scripts");
      });
    }
  }
});


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

  $(window).scroll(function () {
    var targt = $(".taregt").offset().top + 145;
    if ($(document).scrollTop() > targt) {
      $('header').addClass('navigation-sticky');
    }
    else {
      $('header').removeClass('navigation-sticky');

    }
  });
  $('.search-icon').click(function () {
    $('.search-form').toggleClass('w-100');
  })
}

function heroParallax() {
  // Find the initial scroll top when the page is loaded.
  var initScrollTop = $(window).scrollTop();

  // Set the image's vertical background position based on the scroll top when the page is loaded.
  $('.parallax1').css({ 'object-position': '0 ' + (initScrollTop / 30) + '%' });
  $('.parallax2').css({ 'object-position': '0 ' + (initScrollTop / 30) + '%' });

  // When the user scrolls...
  $(window).scroll(function () {

    // Find the new scroll top.
    var scrollTop = $(window).scrollTop();

    // Set the new background position.
    $('.parallax1').css({ 'object-position': '0 ' + (scrollTop / 30) + '%' });
    $('.parallax2').css({ 'object-position': '0 ' + (scrollTop / 30) + '%' });
  });
}

function animationMethod() {

  $(window).scroll(function () {

    ///////////// ABOUT PAGE ANIMATIONS
    if (document.getElementById("about") !== null) {
      // Section 1 animation
      if ($(window).scrollTop() >= $('#breadcrumb').offset().top - 110) {

        $('#about-section-1 .animation-wrapper p, #about-section-1 .animation-wrapper img,#about-section-1 .animation-wrapper h1,#about-section-1 .animation-wrapper h5').addClass('animation1');
        $('#about-section-1 .animation-wrapper-image-rev').addClass('clip-animate-x-reverse');
        $('#about-section-1 .animation-wrapper-opacity p, #about-section-1 .animation-wrapper-opacity button, #about-section-1 .animation-wrapper-opacity h1').addClass('animation3');
      }
      else {
        if ($(window).scrollTop() <= $('#about-section-1').offset().top - $(window).height()) {
          $('#about-section-1 .animation-wrapper p, #about-section-1 .animation-wrapper img,#about-section-1 .animation-wrapper h1,#about-section-1 .animation-wrapper h5').removeClass('animation1');
          $('#about-section-1 .animation-wrapper-image-rev').removeClass('clip-animate-x-reverse');
          $('#about-section-1 .animation-wrapper-opacity p, #about-section-1 .animation-wrapper-opacity button, #about-section-1 .animation-wrapper-opacity h1').removeClass('animation3');
        }
      }


      // Section 2 animation
      if ($(window).scrollTop() >= $('#image-section').offset().top + 30) {
        $('#about-section-3 .animation-wrapper p, #about-section-3 .animation-wrapper img,#about-section-3 .animation-wrapper h3,#about-section-3 .animation-wrapper h6').addClass('animation1');
        $('#about-section-3 .animation-wrapper-image-rev').addClass('clip-animate-x-reverse');
        $('#about-section-3 .animation-wrapper-opacity p, #about-section-3 .animation-wrapper-opacity button').addClass('animation3');
      }
      else {
        if ($(window).scrollTop() <= $('#about-section-3').offset().top - $(window).height()) {
          $('#about-section-3 .animation-wrapper p, #about-section-3 .animation-wrapper img,#about-section-3 .animation-wrapper h3,#about-section-3 .animation-wrapper h6').removeClass('animation1');
          $('#about-section-3 .animation-wrapper-image-rev').removeClass('clip-animate-x-reverse');
          $('#about-section-3 .animation-wrapper-opacity p, #about-section-3 .animation-wrapper-opacity button').removeClass('animation3');
        }
      }

      // Section 3 animation
      if ($(window).scrollTop() >= $('#videos-section').offset().top - 110) {
        $('#about-section-4 .animation-wrapper p, #about-section-4 .animation-wrapper img').addClass('animation1');
        $('#about-section-4 .animation-wrapper-image-rev').addClass('clip-animate-x-reverse');
        $('#about-section-4 .animation-wrapper-opacity p, #about-section-4 .animation-wrapper-opacity button').addClass('animation3');

      }
      else {
        if ($(window).scrollTop() <= $('#about-section-4').offset().top - $(window).height()) {
          $('#about-section-4 .animation-wrapper p, #about-section-4 .animation-wrapper img').removeClass('animation1');
          $('#about-section-4 .animation-wrapper-image-rev').removeClass('clip-animate-x-reverse');
          $('#about-section-4 .animation-wrapper-opacity p, #about-section-4 .animation-wrapper-opacity button').removeClass('animation3');

        }
      }


      // last section animation
      if ($(window).scrollTop() >= $('#about-section-4').offset().top + 400) {
        $('.static-img-section .section-wrapper').addClass('clip-animate-x-static-img');
      }
      else {
        if ($(window).scrollTop() <= $('#about-section-4').offset().top - $(window).height()) {
          $('.static-img-section .section-wrapper').removeClass('clip-animate-x-static-img');
        }
      }
    }

    //////////// FREEZONE PAGE ANIMATIONS
    if (document.getElementById("freezone") !== null) {

      // Section 1 animation
      if ($(window).scrollTop() >= $('#breadcrumb').offset().top - 110) {

        $('#section-1 .animation-wrapper p, #section-1 .animation-wrapper img').addClass('animation1');
        $('#section-1 .animation-wrapper-image-rev').addClass('clip-animate-x-reverse');
        $('#section-1 .animation-wrapper-opacity p, #section-1 .animation-wrapper-opacity button, #section-1 .animation-wrapper-opacity h1, #section-1 .animation-wrapper-opacity h2').addClass('animation3');
      }
      else {
        if ($(window).scrollTop() <= $('#section-1').offset().top - $(window).height()) {
          $('#section-1 .animation-wrapper p, #section-1 .animation-wrapper img').removeClass('animation1');
          $('#section-1 .animation-wrapper-image-rev').removeClass('clip-animate-x-reverse');
          $('#section-1 .animation-wrapper-opacity p, #section-1 .animation-wrapper-opacity button, #section-1 .animation-wrapper-opacity h1, #section-1 .animation-wrapper-opacity h2').removeClass('animation3');
        }
      }

      // second section animation
      if ($(window).scrollTop() >= $('.static-img-section .section-wrapper').offset().top - 1000) {
        $('.static-img-section .section-wrapper').addClass('clip-animate-x-static-img-right');
      }
      else {
        if ($(window).scrollTop() <= $('.static-img-section .section-wrapper').offset().top - $(window).height()) {
          $('.static-img-section .section-wrapper').removeClass('clip-animate-x-static-img-right');
        }
      }


      if ($(window).scrollTop() >= $('#section-2').offset().top - 200) {

        $('#section-2 .animation-wrapper p, #section-2 .animation-wrapper img, #section-2 .animation-wrapper .note, #section-2 .animation-wrapper .tenants').addClass('animation1');
        $('#section-2 .animation-wrapper-image-rev').addClass('clip-animate-x-reverse');
        $('#section-2 .animation-wrapper-opacity p, #section-2 .animation-wrapper-opacity button,#section-2 .animation-wrapper-opacity h1').addClass('animation3');
      }
      else {
        if ($(window).scrollTop() <= $('#section-2').offset().top - $(window).height()) {
          $('#section-2 .animation-wrapper p, #section-2 .animation-wrapper img, #section-2 .animation-wrapper .note, #section-2 .animation-wrapper .tenants').removeClass('animation1');
          $('#section-2 .animation-wrapper-image-rev').removeClass('clip-animate-x-reverse');
          $('#section-2 .animation-wrapper-opacity p, #section-2 .animation-wrapper-opacity button,#section-2 .animation-wrapper-opacity h1').removeClass('animation3');
        }
      }

      if ($(window).scrollTop() >= $('#section-3').offset().top - 110) {

        $('#section-3 .animation-wrapper p, #section-3 .animation-wrapper img, #section-3 .animation-wrapper .note, #section-3 .animation-wrapper .grey-card').addClass('animation1');
        $('#section-3 .animation-wrapper-image-rev').addClass('clip-animate-x-reverse');
        $('#section-3 .animation-wrapper-opacity p, #section-3 .animation-wrapper-opacity button,#section-3 .animation-wrapper-opacity h1').addClass('animation3');
      }
      else {
        if ($(window).scrollTop() <= $('#section-3').offset().top - $(window).height()) {
          $('#section-3 .animation-wrapper p, #section-3 .animation-wrapper img, #section-3 .animation-wrapper .note, #section-3 .animation-wrapper .grey-card').removeClass('animation1');
          $('#section-3 .animation-wrapper-image-rev').removeClass('clip-animate-x-reverse');
          $('#section-3 .animation-wrapper-opacity p, #section-3 .animation-wrapper-opacity button,#section-3 .animation-wrapper-opacity h1').removeClass('animation3');
        }
      }

    }

    //////////// FREEZONE Business PAGE ANIMATIONS
    if (document.getElementById("freezone-business") !== null) {
      checkOffset();
    }
    if (document.getElementById("podcast") !== null) {
      $('.close-accordion').click(function () {
        $('.sticky-section .sticky-section-child').css('transform', 'translateY(100%)');
      })
      stickySectionPodcast()
    }
    if (document.getElementById("article1") !== null) {
      if ($(window).scrollTop() >= $('.static-img-section .section-wrapper').offset().top - 1000) {
        $('.static-img-section .section-wrapper').addClass('clip-animate-x-static-img-right-full');
      }
      else {
        if ($(window).scrollTop() <= $('.static-img-section .section-wrapper').offset().top - $(window).height()) {
          $('.static-img-section .section-wrapper').removeClass('clip-animate-x-static-img-right-full');
        }
      }
    }
    if (document.getElementById("net-zero") !== null || document.getElementById("صافي-الصفر-بحلول-عام-2050") !== null) {
      if ($(window).scrollTop() >= $('.static-img-section .section-wrapper').offset().top - 1000) {
        $('.static-img-section .section-wrapper').addClass('clip-animate-x-static-img-right-full');
      }
      else {
        if ($(window).scrollTop() <= $('.static-img-section .section-wrapper').offset().top - $(window).height()) {
          $('.static-img-section .section-wrapper').removeClass('clip-animate-x-static-img-right-full');
        }
      }
    }
    if (document.getElementById("reit") !== null) {
      if ($(window).scrollTop() >= $('.static-img-section .section-wrapper').offset().top - 1000) {
        $('.static-img-section .section-wrapper').addClass('clip-animate-x-static-img-right-full');
      }
      else {
        if ($(window).scrollTop() <= $('.static-img-section .section-wrapper').offset().top - $(window).height()) {
          $('.static-img-section .section-wrapper').removeClass('clip-animate-x-static-img-right-full');
        }
      }
    }
    if (document.getElementById("sustainable-page") !== null) {
      if ($(window).scrollTop() >= $('.static-img-section .section-wrapper').offset().top - 1000) {
        $('.static-img-section .section-wrapper').addClass('clip-animate-x-static-img-right-full');
      }
      else {
        if ($(window).scrollTop() <= $('.static-img-section .section-wrapper').offset().top - $(window).height()) {
          $('.static-img-section .section-wrapper').removeClass('clip-animate-x-static-img-right-full');
        }
      }
    }
    if (document.getElementById("sustainable-design") !== null) {
      if ($(window).scrollTop() >= $('.static-img-section .section-wrapper').offset().top - 1000) {
        $('.static-img-section .section-wrapper').addClass('clip-animate-x-static-img-right-full');
      }
      else {
        if ($(window).scrollTop() <= $('.static-img-section .section-wrapper').offset().top - $(window).height()) {
          $('.static-img-section .section-wrapper').removeClass('clip-animate-x-static-img-right-full');
        }
      }
    }
    if (document.getElementById("parks") !== null) {
      if ($(window).scrollTop() >= $('.static-img-section .section-wrapper').offset().top - 1000) {
        $('.static-img-section .section-wrapper').addClass('clip-animate-x-static-img-right-full');
      }
      else {
        if ($(window).scrollTop() <= $('.static-img-section .section-wrapper').offset().top - $(window).height()) {
          $('.static-img-section .section-wrapper').removeClass('clip-animate-x-static-img-right-full');
        }
      }
    }
    if (document.getElementById("resources") !== null) {
      if ($(window).scrollTop() >= $('.static-img-section.right .section-wrapper').offset().top - 1000) {
        $('.static-img-section.right .section-wrapper').addClass('clip-animate-x-static-img-right-full');
      }
      else {
        if ($(window).scrollTop() <= $('.static-img-section.right .section-wrapper').offset().top - $(window).height()) {
          $('.static-img-section.right .section-wrapper').removeClass('clip-animate-x-static-img-right-full');
        }
      }

      if ($(window).scrollTop() >= $('#resources-section-2 .static-img-section .section-wrapper').offset().top - 1000) {
        $('#resources-section-2 .static-img-section .section-wrapper').addClass('clip-animate-x-static-img-2');
      }
      else {
        if ($(window).scrollTop() <= $('#resources-section-2').offset().top - $(window).height()) {
          $('#resources-section-2 .static-img-section .section-wrapper').removeClass('clip-animate-x-static-img-2');
        }
      }

    }

  });

}

function contact() {
  if (document.getElementById("contact") !== null) {
    // $('#contact-section .nav-link').click(function () {
    //   $('#contact-section .tab-content').removeClass('transform-left')
    //   $('#contact-section .tab-content').addClass('transform-0')
    // })
    // $('#contact-section .go-back').click(function () {
    //   $('#contact-section .tab-content').removeClass('transform-0')
    //   $('#contact-section .tab-content').addClass('transform-left')
    // })
    $('#contact-section .copy-clipboard').click(function () {
      navigator.clipboard.writeText('freezone@masadarcity.ae')
      alert("Link copied to clipboard");
    })


    // Open sidebar for all buttons
    const openSidebarButtons = document.querySelectorAll('.openSidebarBtn');
    openSidebarButtons.forEach(button => {
      button.addEventListener('click', function () {
        openNav();
        // Decide title and description based on clicked button
        if ($("body").hasClass("en")) {
          switch (button.id) {
            case "pills-masdar-tab":
              updateContent("Masdar City Free Zone", "assets/images/dynamic/contact-icon-1.svg");
              break;
            case "pills-licensing-tab":
              updateContent("Licensing", "assets/images/dynamic/contact-icon-2.svg");
              break;
            case "pills-marketing-tab":
              updateContent("Marketing", "assets/images/dynamic/contact-icon-3.svg");
              break;
            case "pills-visit-tab":
              updateContent("Visit and Tours", "assets/images/dynamic/contact-icon-4.svg");
              break;
            case "pills-partnership-tab":
              updateContent("Corporate Partnershiops", "assets/images/dynamic/contact-icon-5.svg");
              break;
            case "pills-info-tab":
              updateContent("General Information", "assets/images/dynamic/contact-icon-6.svg");
              break;
            default:
              updateContent("Default Title", "Default Description");
          }
        }
        else {
          if ($("body").hasClass("ar")) {
            switch (button.id) {
              case "pills-masdar-tab":
                updateContent("Masdar City Free Zone", "../assets/images/dynamic/contact-icon-1.svg");
                break;
              case "pills-licensing-tab":
                updateContent("Licensing", "../assets/images/dynamic/contact-icon-2.svg");
                break;
              case "pills-marketing-tab":
                updateContent("Marketing", "../assets/images/dynamic/contact-icon-3.svg");
                break;
              case "pills-visit-tab":
                updateContent("Visit and Tours", "../assets/images/dynamic/contact-icon-4.svg");
                break;
              case "pills-partnership-tab":
                updateContent("Corporate Partnershiops", "../assets/images/dynamic/contact-icon-5.svg");
                break;
              case "pills-info-tab":
                updateContent("General Information", "../assets/images/dynamic/contact-icon-6.svg");
                break;
              default:
                updateContent("Default Title", "Default Description");
            }
          }
        }

      });
    });

    document.getElementById('go-back').addEventListener('click', closeNav);
  }
}


function openNav() {
  // document.getElementById("sidebar").style.width = "100%";
  $('#sidebar').removeClass('transform-left')
  $('#sidebar').addClass('transform-0')
}

function closeNav() {
  // document.getElementById("sidebar").style.width = "0";
  $('#sidebar').removeClass('transform-0')
  $('#sidebar').addClass('transform-left')
}

function updateContent(title, description) {
  document.getElementById('sidebarTitle').textContent = title;
  document.getElementById('sidebarIcon').src = description;
}
function stickySectionPodcast() {

  $('#podcast .accordion-button').on('click', function () {
    $('.sticky-section .sticky-section-child').css('position', 'relative');
  })
  if ($('.sticky-section .sticky-section-child').offset().top + $('.sticky-section .sticky-section-child').height() >= $('footer').offset().top) {
    $('.sticky-section .sticky-section-child').css('position', 'relative');
    // $('.stepper-wrapper').addClass('d-block')
    // $('.stepper-wrapper').removeClass('d-none')
    // $('.close-accordion1').removeClass('d-lg-block')
    // $('.close-accordion2').addClass('d-none')

  }


  if ($(document).scrollTop() + window.innerHeight < $('footer').offset().top) {
    $('.sticky-section .sticky-section-child').css('position', 'fixed');
    // $('.stepper-wrapper').addClass('d-none')
    // $('.stepper-wrapper').removeClass('d-block')
    // $('.close-accordion1').addClass('d-lg-block')
    // $('.close-accordion2').removeClass('d-none')
  }

  if ($(document).scrollTop() + window.innerHeight >= $('footer').offset().top - 180) {
    $('.sticky-section .sticky-section-child').css('transform', 'none');

  }

}
function checkOffset() {
  // if ($('.sticky-section .sticky-section-child').offset().top + $('.sticky-section .sticky-section-child').height() >= $('.subscribe-section').offset().top) {
  //   $('.sticky-section .sticky-section-child').css('position', 'relative');
  //   $('.stepper-wrapper').addClass('d-block')
  //   $('.stepper-wrapper').removeClass('d-none')
  //   $('.close-accordion1').removeClass('d-lg-block')
  //   $('.close-accordion2').addClass('d-none')
  // }


  // if ($(document).scrollTop() + window.innerHeight < $('.subscribe-section').offset().top) {
  //   $('.sticky-section .sticky-section-child').css('position', 'fixed');
  //   $('.stepper-wrapper').addClass('d-none')
  //   $('.stepper-wrapper').removeClass('d-block')
  //   $('.close-accordion1').addClass('d-lg-block')
  //   $('.close-accordion2').removeClass('d-none')
  // }

  // if ($(document).scrollTop() + window.innerHeight >= $('.subscribe-section').offset().top - 180) {
  //   $('.sticky-section .sticky-section-child').css('transform', 'none');

  // }

  $('input[type=radio]').click(function () {
    // $('.sticky-section .sticky-section-child').css('transform', 'none');

    $('.step-card').find(".form-check input[type=radio]:not(:checked)").parents('.step-card').addClass('bg-grey');
    $('.step-card').find(".form-check input[type=radio]:not(:checked)").parents('.step-card').removeClass('change-color');
    $(this).parents('.step-card').removeClass('bg-grey');
    $(this).parents('.step-card').addClass('change-color');

  })
}











