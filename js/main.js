$(document).ready(function() {
    $(".contact-btn").on("click", function() {
        $('#my-form').submit(function (e) {
      var form = this;
      e.preventDefault();
      
      var progressBtn = $(".progress-btn");
      $(".progress-btn").css('background', '#EDEDF7');
      $(".progress-btn").css('z-index', '120');
      $(".contact-btn").css('box-shadow', 'none');
      $(".contact-btn").css('background', '#EDEDF7');
      if (!progressBtn.hasClass("active")) {
        progressBtn.addClass("active");
        setTimeout(function() {
          progressBtn.removeClass("active");
          
          $(".contact-btn").css('color', '#323264');
          $(".contact-btn").text("Sent");
          $(".progress-btn").css('z-index', '-50');
          $(".progress-btn").css('background', 'transparent');		
        }, 5000);
      }
      
      
      setTimeout(function () {
          form.submit();
          $("input").val('');
          $("textarea").val('');
          if ($(".popup-form").hasClass("popup-form-show")){
            $(".popup-wrapper").removeClass("active-popup");
            $(".popup-form").removeClass("popup-form-show");
            $(".contact-btn").css('color', '#fff');
            $(".contact-btn").text("Send message");
            $(".contact-btn").append('<div class="progress-btn" data-progress-style="indefinite-circle"><svg class="progress circle-loader" width="40" height="40" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="15"></svg></div>');
            $(".contact-btn").css('box-shadow', '0px 0px 20px rgba(36, 163, 255, 0.5)');
            $(".contact-btn").css('background', '#24a3ff');
      }
      }, 7000); 
  });	
      
    });

    $('.achievements-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".team-slider-items").slick({
      arrows: false,
      dots: true
    });

    $(".popup-btn").on("click", function (){
      $(".popup-wrapper").addClass("active-popup");
      $(".popup-form").addClass("popup-form-show");
      $("body").addClass("under-modal");
    });

    $(".close-popup-btn").on("click", function (){
      $(".popup-wrapper").removeClass("active-popup");
      $(".popup-form").removeClass("popup-form-show");
      $("body").removeClass("under-modal");
    });

    $(".check").on("click", function (){
      $("body").toggleClass("under-modal");
    });

    $(".lang-link").on("click", function (){
      $(".lang-link").removeClass("active-lang");
      $(this).addClass("active-lang");
    });

    $(".choice-link").on("click", function (){
      $(".choice-link").removeClass("active-choice-link");
      $(this).addClass("active-choice-link");
    });

    let mixer = mixitup('.publications-wrapper');

  });
  

  