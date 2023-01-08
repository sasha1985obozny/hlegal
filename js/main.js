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
      }, 7000); 
  });	
      
    });
  });
  