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
                offset: 0,
                setHeights: false,
                scrollbars: false,
                updateHash: false,
                interstitialSection : ".container-footer"
        })
});
