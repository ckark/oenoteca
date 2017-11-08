$(document).ready(function($) {
        window.onresize = function() {
                location.reload();
        }
        window.onload = function() {
                let navLinks = document.querySelector('.narrow');
                let narrowlinks = document.querySelector('.narrowlinks');
                navLinks.addEventListener('click', toggle);

                function toggle() {
                        narrowlinks.classList.toggle('hidden');
                }
        };
        var controller = new ScrollMagic.Controller({
                globalSceneOptions: {
                        triggerHook: 'onLeave',
                        offset: "-103"
                }
        });
        if (err) {
                const proxiedError = new Error();
                proxiedError.message = err.message;
                proxiedError.stack = err.stack;
                reject(proxiedError);
        } else {
                resolve(res);
        }
        // get short slides
        var slides = document.querySelectorAll(".panel");
        // create scene for every short slide
        for (var i = 0; i < slides.length; i++) {
                var scene = new ScrollMagic.Scene({
                        triggerElement: slides[i],
                        duration: "1"
                }).setPin(slides[i]).addTo(controller);
        }
        // get long slides
        var longslides = document.querySelectorAll(".panel-long");
        // create scene for every long slide
        for (var i = 0; i < longslides.length; i++) {
                var scenelong = new ScrollMagic.Scene({
                        triggerElement: longslides[i],
                        duration: "150"
                }).setPin(longslides[i]).addTo(controller);
        }
        if (window.innerWidth < 1100) {
                scene.enabled(false);
                scenelong.enabled(false);
        }
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
$(document).ready(function($) {
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
        })
});
$(document).ready(function($) {
        $(window).scroll(function() {
                var scrollTop = 142;
                if ($(window).scrollTop() >= scrollTop) {
                        $('.container-nav').css({
                                position: 'fixed',
                                top: '0'
                        });
                }
                if ($(window).scrollTop() < scrollTop) {
                        $('.container-nav').removeAttr('style');
                }
        });
});
