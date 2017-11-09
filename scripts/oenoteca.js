$(function() {
        var navLinks = document.querySelector('.narrow');
        navLinks.addEventListener('click', toggle);
        var narrowlinks = document.querySelector('.narrowlinks');

        function toggle() {
                narrowlinks.classList.toggle('hidden');
        };
});
$(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(
                                /^\//, '') || location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(
                                1) + ']');
                        if (target.length) {
                                $('html,body').animate({
                                        scrollTop: target.offset().top -
                                                0
                                }, 1000);
                                return false;
                        }
                }
        });
});
$(function() {
    "use strict";
    var $navbar = $(".container-nav"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();

    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > y_pos + height) {
            $navbar.addClass("navbar-fixed").animate({
                top: 0
            });
        } else if (scrollTop <= y_pos) {
            $navbar.removeClass("navbar-fixed").clearQueue().animate({
                top: "-30px"
            }, 0);
        }
    });
});
