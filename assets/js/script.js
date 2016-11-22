$(document).ready(function() {

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

    //Implement the "slide to left" when the user clicks on #carousel-next here
    $('#carousel-next').click(function() {
        var marginLeft = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (marginLeft == -3840) {
            return false;
        } else {
            $('#carousel').css("margin-left", marginLeft - 960);
        }
    });

    //Implement the "slide to right" when the user clicks on #carousel-prev here
    $('#carousel-prev').click(function() {
        var marginLeft = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (marginLeft == 0) {
            return false;
        } else {
            $('#carousel').css("margin-left", marginLeft + 960);
        }
    });

    // Implement a "smooth scroll" when the user clicks on the sidebar links here
    $("a[href='#carousel-section']").click(function() {
        $('body').removeClass('no-scroll');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 300);
        setTimeout(function() {
            $('.sidebar-container').removeClass('sidebar-active');
        }, 300);
        setTimeout(function() {
            $('#sidebar-button').removeClass('button-active');
        }, 300);
        setTimeout(function() {
            $('.page-wrapper').removeClass('wrapper-active');
        }, 300);
        return false;
    });
    $("a[href='#name-section']").click(function() {
        $('body').removeClass('no-scroll');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 300);
        setTimeout(function() {
            $('.sidebar-container').removeClass('sidebar-active');
        }, 300);
        setTimeout(function() {
            $('#sidebar-button').removeClass('button-active');
        }, 300);
        setTimeout(function() {
            $('.page-wrapper').removeClass('wrapper-active');
        }, 300);
        return false;
    });
    $("a[href='#major-section']").click(function() {
        $('body').removeClass('no-scroll');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 300);
        setTimeout(function() {
            $('.sidebar-container').removeClass('sidebar-active');
        }, 300);
        setTimeout(function() {
            $('#sidebar-button').removeClass('button-active');
        }, 300);
        setTimeout(function() {
            $('.page-wrapper').removeClass('wrapper-active');
        }, 300);
        return false;
    });
    $("a[href='#fact-section']").click(function() {
        $('body').removeClass('no-scroll');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 300);
        setTimeout(function() {
            $('.sidebar-container').removeClass('sidebar-active');
        }, 300);
        setTimeout(function() {
            $('#sidebar-button').removeClass('button-active');
        }, 300);
        setTimeout(function() {
            $('.page-wrapper').removeClass('wrapper-active');
        }, 300);
        return false;
    });
});