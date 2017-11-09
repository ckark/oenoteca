$(document).ready(function($) {
        window.onload = function() {
                let navLinks = document.querySelector('.narrow');
                let narrowlinks = document.querySelector('.narrowlinks');
                navLinks.addEventListener('click', toggle);

                function toggle() {
                        narrowlinks.classList.toggle('hidden');
                }
        };
});
$(document).on("click", "a[href^='#']", function(e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
                e.preventDefault();
                // trigger scroll
                controller.scrollTo(id);
                // if supported by the browser we can even update the URL.
                if (window.history && window.history.pushState) {
                        history.pushState("", document.title, id);
                }
        }
});
$(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,
                                '') || location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(
                                1) + ']');
                        if (target.length) {
                                $('html,body').animate({
                                        scrollTop: target.offset().top -
                                                32
                                }, 1000);
                                return false;
                        }
                }
        });
});
$(function() {
        $.scrollify({
                section: ".panel",
                sectionName: false,
                scrollSpeed: 1200,
                setHeights: false,
                scrollbars: false,
                updateHash: false,
                interstitialSection: ".container-footer"
        })
});
