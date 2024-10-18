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
      const horizontalAccordions = $(".accordion.width");

      horizontalAccordions.each((index, element) => {
        const accordion = $(element);
        const collapse = accordion.find(".collapse");
        const bodies = collapse.find("> *");
        accordion.height(accordion.height());  
        bodies.width(bodies.eq(0).width());
        collapse.not(".show").each((index, element) => {
          $(element).parent().find("[data-bs-toggle='collapse']").addClass("collapsed");

        });
      });
      
      $('.next').click(function(){
        if($('#collapseOne').hasClass("show")){
          $('.card-header[data-bs-target="#collapseOne"]').addClass("collapsed")
          $('.card-header[data-bs-target="#collapseTwo"]').removeClass("collapsed")
          $('#collapseOne').removeClass("show")
          $('#collapseTwo').addClass("show")
          $('.next').prop("disabled", false);
          $('.previous').prop("disabled", false);
        }else{
          if($('#collapseTwo').hasClass("show")){
            $('.card-header[data-bs-target="#collapseTwo"]').addClass("collapsed")
            $('.card-header[data-bs-target="#collapseThree"]').removeClass("collapsed")
            $('#collapseTwo').removeClass("show")
            $('#collapseThree').addClass("show")
            $('.next').prop("disabled", true);
            $('.previous').prop("disabled", false);
          }
        }
      })
      $('.previous').click(function(){
        if($('#collapseTwo').hasClass("show")){
          $('.card-header[data-bs-target="#collapseTwo"]').addClass("collapsed")
          $('.card-header[data-bs-target="#collapseOne"]').removeClass("collapsed")
          $('#collapseTwo').removeClass("show")
          $('#collapseOne').addClass("show")
          $('.next').prop("disabled", false);
          $('.previous').prop("disabled", true);
        }else{
          if($('#collapseThree').hasClass("show")){
            $('.card-header[data-bs-target="#collapseThree"]').addClass("collapsed")
            $('.card-header[data-bs-target="#collapseTwo"]').removeClass("collapsed")
            $('#collapseThree').removeClass("show")
            $('#collapseTwo').addClass("show")
            $('.next').prop("disabled", true);
            $('.previous').prop("disabled", false);
          }
        }
    
      })
      $('.card-header').click(function(){
        if($(this).hasClass('first-one')){
          $('.previous').prop("disabled", true);
          $('.next').prop("disabled", false);
        }
        if($(this).hasClass('second-one')){
          $('.previous').prop("disabled", false);
          $('.next').prop("disabled", false);
        }
        if($(this).hasClass('third-one')){
          $('.previous').prop("disabled", false);
          $('.next').prop("disabled", true);
        }
        if($(this).hasClass('collapsed')){
          $(this).removeClass('collapsed')
        }
      })
   $('.cost-calculator .next-btn').click(function(){
    $('html, body').animate({
      scrollTop: $(".cost-calculator").offset().top
  });
        switch($(this).parents().eq(1).attr('id')) {
          case 'v-pills-personal':
            $('#v-pills-company-tab').click()
            $('#v-pills-personal-tab').addClass('success')
            break;
          case 'v-pills-company':
            $('#v-pills-license-tab').click()
            $('#v-pills-company-tab').addClass('success')
            break;
          case 'v-pills-license':
            $('#v-pills-leasing-tab').click()
            $('#v-pills-license-tab').addClass('success')
            break;
          case 'v-pills-leasing':
            $('#v-pills-summary-tab').click()
            $('#v-pills-leasing-tab').addClass('success')
              break;
          default:
        }
   })
   $('.cost-calculator .previous-btn').click(function(){
    $('html, body').animate({
      scrollTop: $(".cost-calculator").offset().top
  });
    switch($(this).parents().eq(1).attr('id')) {
      case 'v-pills-company':
        $('#v-pills-personal-tab').click()
        $('#v-pills-personal-tab').removeClass('success')
        break;
      case 'v-pills-license':
        $('#v-pills-company-tab').click()
        $('#v-pills-company-tab').removeClass('success')
        break;
      case 'v-pills-leasing':
        $('#v-pills-license-tab').click()
        $('#v-pills-license-tab').removeClass('success')
        break;
      case 'v-pills-summary':
        $('#v-pills-leasing-tab').click()
        $('#v-pills-leasing-tab').removeClass('success')
        break;
      default:
    }
})
$('.cost-calculator .form-check-input').click(function(){
  $(this).closest(".tab-pane").find('.selected').removeClass('selected')
  $(this).closest(".step-card-link").addClass('selected');
})
$('.view-details').click(function(){
  $('.detailed-content').toggleClass('height-0')
})
});