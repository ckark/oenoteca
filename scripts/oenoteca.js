/*Preloading Animation*/
$(window).on('load', function() {
	  $('html, body').css({
	    'overflow': 'hidden',
	    'height': '100%'
	  });
	  $(".se-pre-con").delay(2000).fadeOut("slow");
	});
	$(window).on('load', function() {
	  setTimeout(function() {
	    $('html, body').removeAttr('style');
	  }, 2000)
	});
/* Toggle Navbar Menu on Small Viewports */
$(function() {
	var navLinks = document.querySelector('.narrow');
	navLinks.addEventListener('click', toggle);
	var narrowlinks = document.querySelector('.narrowlinks');

	function toggle() {
		narrowlinks.classList.toggle('hidden');
	};
});
/* Sticky Navbar */
$(function() {
	"use strict";
	window.addEventListener("hashchange", function() {
		scrollBy(0, -50)
	})
	var $navbar = $(".container-nav"),
		y_pos = $navbar.offset().top,
		height = $navbar.height();
	$(document).scroll(function() {
		var scrollTop = $(this).scrollTop();
		if (scrollTop > y_pos + height) {
			$navbar.addClass("navbar-sticky").animate({
				top: "-1px"
			});
		} else if (scrollTop <= y_pos) {
			$navbar.removeClass("navbar-sticky").clearQueue().animate({
				top: "-30px"
			}, 0);
		}
	});
});
/* Smooth Scrolling */
$(function() {
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 96
				}, 1000);
				return false;
			}
		}
	});
});
