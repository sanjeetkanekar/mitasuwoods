(function ($) {
    "use strict";

    // loader
    setTimeout(function () {
        $('#preloader').fadeOut(600, function () {
            $(this).remove();
        });
    }, 1500);

    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').removeClass('container').addClass('sticky-top container-fluid px-4');
        } else {
            $('.nav-bar').removeClass('container-fluid px-4').addClass('container');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    $('.typed-title').typed({
        stringsElement: $('.typing-title'),
        backDelay: 2000,
        typeSpeed: 30,
        loop: true
    });


    // Testimonials carousel
    $(".product-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 15,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 800,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        stagePadding: 100, // space on both sides for faded items
        navText: [
            '<span>&#10094;</span>',
            '<span>&#10095;</span>'
        ],
        responsive: {
            0: { items: 1, stagePadding: 50 },
            576: { items: 2, stagePadding: 60 },
            768: { items: 3, stagePadding: 80 },
            992: { items: 3, stagePadding: 100 }
        }
    });


    $(".product-carousel").on("mouseleave", function () {
        $(this).trigger("play.owl.autoplay", [2000]);
    });

})(jQuery);

