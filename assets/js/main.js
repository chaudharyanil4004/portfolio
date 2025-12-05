
/*======================================================================
 Table of Content:
 
 01. One Page Scrollspy
 02. Mobile Menu Toggle
 03. Counter up
 04. Bootstrap Tooltip
 05. Circle Progress Bar
 06. Magnific Popup
 6.1. Youtube - Vimeo - SoundCloud Popup
 6.2. Image Popup
 6.3. Porfolio Detail Popup
 6.4. Porfolio Popup Gallery
 07. Slick Slider
 7.1. Slider Fade One
 7.2. Testimonial Slider
 7.3. Blog Slider
 7.4. Portfolio Thumbnail Gallery
 08. Contact form submission
 09. Scroll Top
 10. Porfolio Isotope Filter
 11. WOW Animate
 12. Preloader
 ========================================================================*/


(function ($) {
    // Start of use strict
    'use strict';

    jQuery(document).ready(function () {
        /*--------------------------------
         01. One Page Scrollspy
         ----------------------------------*/
        $('#mainmenu').onePageNav({
            currentClass: 'current',
            changeHash: false,
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            filter: '',
            easing: 'swing',
            begin: function () {
            },
            end: function () {
            },
            scrollChange: function ($currentListItem) {
            }
        });

        // Link will target id and scroll
        $('.contact-link, .portfolio-link, .about-link').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top + 80
            }, 1000);
            event.preventDefault();
        });

        /*-----------------------------
         02. Mobile Menu Toggle
         -----------------------------*/
        $('.menu-toogle-icon').on('click', function () {
            $('.side-menu').toggleClass('mobile-menu-hide');
            $('.menu-toogle-icon').toggleClass('active');
        });
        function mobileMenuHide() {
            var windowWidth = $(window).width(),
                    siteHeader = $('.side-menu');
            if (windowWidth < 992) {
                siteHeader.addClass('mobile-menu-hide');
                $('.menu-toogle-icon').removeClass('active');
                setTimeout(function () {
                    siteHeader.addClass('active');
                }, 500);
            } else {
                siteHeader.removeClass('active');
            }
        }
        $('.side-menu #mainmenu').on("click", "a:not(.sublink)", function (e) {
            e.preventDefault();
            mobileMenuHide();
        });

        /*-----------------------------
         03. Counter up
         -----------------------------*/
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });

        /*-----------------------------
         04. Bootstrap Tooltip
         -----------------------------*/
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });

        /*-----------------------------
         05. Circle Progress Bar
         -----------------------------*/
        $(".circle-progress").loading();


        /*-----------------------------
         6.1. Youtube - Vimeo - SoundCloud Popup
         -----------------------------*/
        $('.youtube-popup, .vimeo-popup, .soundcloud-popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        /*--------------------------------
         6.2. Image Popup
         ----------------------------------*/
        $('.img-popup').magnificPopup({
            type: 'image',
            preloader: false
        });

        /*--------------------------------
         6.3. Porfolio Detail Popup
         ----------------------------------*/
        $('.portfolio-popup').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            preloader: false
        });

        /*--------------------------------
         6.4. Porfolio Popup Gallery
         ----------------------------------*/
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });


        /*-----------------------------
         7.1. Slider Fade One
         -----------------------------*/
        $('.slider-fade-one').slick({
            infinite: true,
            speed: 500,
            fade: true,
            dots: false,
            arrows: true,
            prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
            nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
            autoplay: true,
            autoplayTimeout: 2000,
            animateOut: 'fadeOut'
        });

        /*-----------------------------
         7.2. Testimonial Slider
         -----------------------------*/
        $(".testimonial-slider").slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>',
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        dots: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        /*-----------------------------
         7.3. Blog Slider
         -----------------------------*/
        $(".blog-slider").slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>',
            autoplay: false,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        dots: true,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        dots: true,
                        slidesToShow: 1
                    }
                }
            ]
        });

        /*-----------------------------
         7.4. Portfolio Thumbnail Gallery
         -----------------------------*/
        $('.gallery-main-img').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.gallery-thumbnail-img'
        });
        $('.gallery-thumbnail-img').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.gallery-main-img',
            dots: false,
            arrows: true,
            prevArrow: '<i class="fa fa fa-chevron-left slick-prev"></i>',
            nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
            centerPadding: '0px',
            centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        vertical: false,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });
        $('.portfolio-popup').on('click', function () {
            $('.gallery-main-img, .gallery-thumbnail-img').resize();
            $('.gallery-main-img, .gallery-thumbnail-img').slick('refresh');
        });

    });


    /*--------------------------------
     08. Contact form submission
     ----------------------------------*/
    $(document).on('click', '.mailsendbtn .btn', function () {
        var frm = $(this).parents('form');
        var name = $('input[name="name"]').val();
        var subject = $('input[name="subject"]').val();
        var message = $('textarea[name="message"]').val();
        var mail = $('input[name="email"]').val();
        var emailreg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        var valid = true;

        if (name.trim() === "") {
            $('#name_error').html("Please enter name.");
            valid = false;
        } else {
            $('#name_error').html("");
        }
        if (mail.trim() === "") {
            $('#email_error').html("Please enter email.");
            valid = false;
        } else if (!emailreg.test(mail)) {
            $('#email_error').html("Please enter valid email.");
            valid = false;
        } else {
            $('#email_error').html("");
        }
        if (subject.trim() === "") {
            $('#subject_error').html("Please enter subject.");
            valid = false;
        } else {
            $('#subject_error').html("");
        }
        if (message.trim() === "") {
            $('#message_error').html("Please enter message.");
            valid = false;
        } else {
            $('#message_error').html("");
        }

        if (valid) {
            $.ajax({
                type: "POST",
                url: "assets/php/mail.php",
                data: frm.serialize(),
                beforeSend: function () {
                    $(".loading").show();
                },
                success: function (response) {
                    $(".loading").hide();
                    var response = JSON.parse(response);
                    if (response.success) {
                        $('.response-msg').html(response.success);
                        $('#contact-form')[0].reset();
                    }
                    if (response.error) {
                        $('.response-msg').html(response.error);
                    }
                }
            });
        }
        return false;
    });

    /*-----------------------------
     09. Scroll Top
     -----------------------------*/
    $(document).on('click', '#scrollTop', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    /*-----------------------------
     window Scroll
     -----------------------------*/
    $(window).on('scroll', function () {
        /* Scroll Top show / hide */
        if ($(this).scrollTop() > 1000) {
            $("#scrollTop").fadeIn();
        } else {
            $("#scrollTop").fadeOut();
        }
    });

    /*-----------------------------
     window Load
     -----------------------------*/
    $(window).on('load', function () {
        /* 10. Porfolio Isotope Filter */
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('active');
            $(this).addClass('active');
            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });

        /* 11. WOW Animate */
        $("html,body").animate({
            scrollTop: 0
        }, 100);
        new WOW().init();

        /* 12. Preloader */
        $('.preloader').removeClass("active");

        /* Scroll Top */
        var backtoTop = $('#scrollTop');
        backtoTop.fadeOut(100);

    });

})(jQuery);

