$(document).ready(function() {

    /* Vertical dot navigation. */
    var sectionPosition = [];
    $('section').each(function() {
        sectionPosition.push($(this).offset().top);
    });

    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    $('.vNav ul li a').click(function() {
        $('.vNav ul li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.vNav a').hover(function() {
        $(this).find('.label').show();
    }, function() {
        $(this).find('.label').hide();
    });

    $(document).scroll(function() {
        var position = $(document).scrollTop(),
            index;
        for (var i = 0; i < sectionPosition.length; i++) {
            if (position <= sectionPosition[i]) {
                index = i;
                break;
            }
        }
        $('.vNav ul li a').removeClass('active');
        $('.vNav ul li a:eq(' + index + ')').addClass('active');
    });

    $('.vNav ul li a').click(function() {
        $('.vNav ul li a').removeClass('active');
        $(this).addClass('active');
    });

    $('#carousel-prev').click(function() {
            plusSlides(-1);
     });
      $('#carousel-next').click(function() {
            plusSlides(1);
     });

    /* Carousel section. */
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("carousel-item");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      setTimeout(function() {
        slides[slideIndex-1].style.display = "block";
      }, 200);
    }

    /* Background svgs. */
    $('#one').hover(function() {
        $('.starOne').css('animation', 'spin 1.8s linear;')
    });
});