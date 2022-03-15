/************* Main Js File ************************
    Template Name: Faf
    Author: Themescare
    Version: 1.0
    Copyright 2020
*************************************************************/


/*------------------------------------------------------------------------------------
    
JS INDEX
=============
01 - Menu Toggle JS
02 - Search Toggle
03 - Main Slider JS
04 - Testimonial Slider JS
05 - Counter JS
06 - Mouse Cursor JS
07 - Youtube Popup JS
08 - Quantity Js
09 - Range sliders
10 - Header Scroll

-------------------------------------------------------------------------------------*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {


		/* 
		=================================================================
		01 - Menu Toggle JS
		=================================================================	
		*/
		$(".menu-toggle").on("click", function () {
			$(this).toggleClass("is-active");
		});

		/* 
		=================================================================
		02 - Search Toggle
		=================================================================	
		*/
        
        $("#search-trigger").on("click", function () {
			$(".search-block").toggleClass("active");
		});
        
        $(".search-block input").on("click", function () {
			$(".search-block span").toggleClass("active");
		});
        
        $(".search-toggle").on("click", function () {
			$(".search-block").removeClass("active");
			$(".search-block span").removeClass("active");
		});
        


		/* 
		=================================================================
		03 - Main Slider JS
		=================================================================	
		*/

		$(".covert-slide").owlCarousel({
			animateOut: 'fadeOutLeft',
			animateIn: 'fadeIn',
			items: 2,
			nav: true,
			dots: true,
			autoplayTimeout: 7000,
			autoplaySpeed: 2000,
			autoplay: false,
			loop: true,
			navText: ["<img class='hero-left' src='assets/img/homepage/right-arrow (1).png'>", "<img class='hero-right' src='assets/img/homepage/right-arrow (1).png'>"],
			mouseDrag: true,
			touchDrag: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				750: {
					items: 1
				},
				1000: {
					items: 1
				},
				1200: {
					items: 1
				}
			}
		});

		$(".covert-slide").on("translate.owl.carousel", function () {
			$(".covert-main-slide h2, .covert-main-slide p").removeClass("animated fadeInUp").css("opacity", "0");
			$(".covert-main-slide .covert-btn-outline").removeClass("animated fadeInDown").css("opacity", "0");
			$(".covert-main-slide h3").removeClass("animated fadeInLeft").css("opacity", "0");
		});
		$(".covert-slide").on("translated.owl.carousel", function () {
			$(".covert-main-slide h2, .covert-main-slide p").addClass("animated fadeInUp").css("opacity", "1");
			$(".covert-main-slide .covert-btn-outline").addClass("animated fadeInDown").css("opacity", "1");
			$(".covert-main-slide h3").addClass("animated fadeInLeft").css("opacity", "1");
		});


		/* 
		=================================================================
		04 - Testimonial Slider JS
		=================================================================	
		*/

		$(".testimonial-slider").owlCarousel({
			margin: 20,
			nav: true,
			dots: false,
			autoplayTimeout: 7000,
			autoplaySpeed: 2000,
			autoplay: true,
			loop: true,
			navText: ["<i class='fa fa-angle-left'><i>", "<i class='fa fa-angle-right'><i>"],
			mouseDrag: true,
			touchDrag: true,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				750: {
					items: 2
				},
				1000: {
					items: 2
				},
				1200: {
					items: 2
				}
			}
		});

		$(".skin-slider").owlCarousel({
			// animateOut: 'fadeOutLeft',
			// animateIn: 'fadeIn',
			items: 3,
			nav: true,
			// dots: true,
			// autoplayTimeout: 7000,
			// autoplaySpeed: 2000,
			// autoplay: false,
			// loop: true,
			rewind: true,
			slideBy: '50%',
			scrollPerPage : true,
			lazyLoad: true,
			navText: ["<img class='hero-left' src='assets/img/homepage/right-arrow.svg'><img id='hover-arrow' class='hero-left hover-arrow' src='assets/img/homepage/right-hover.svg'>", "<img class='hero-right' src='assets/img/homepage/right-arrow.svg'><img class='hero-right hover-arrow' src='assets/img/homepage/right-hover.svg'>"],
			mouseDrag: true,
			touchDrag: true,
			autoWidth: true,
			responsive: {
				0: {
					items: 1,
					slideBy: 1
				},
				445: {
					items: 2,
					slideBy: 1
				},
				657: {
					items: 3,
					slideBy: 2
				},
				850: {
					items: 4,
					slideBy: 3
				},
				920: {
					items: 4,
					slideBy: 3
				},
				1200: {
					items: 5,
					slideBy: 4
				}
			// 750: {
			// 	items: 2
			// },
			// 1000: {
			// 	items: 2
			}
		});

		/* 
		=================================================================
		05 - Counter JS
		=================================================================	
		*/


		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});


		/* 
		=================================================================
		06 - Mouse Cursor JS
		=================================================================	
		*/


		$('body').on("mouseup", function () {
			$('#cursor-small').removeClass("click");
		});

		$('body').on('click', function (e) {
			$('#cursor-small').css({
				left: e.pageX,
				top: e.pageY
			});
			$('#cursor-small').addClass("click");
		});

		var cursorLarge = $('#cursor-large');
		var cursorSmall = $('#cursor-small');

		$(document).mousemove(function (e) {
			var x = e.clientX;
			var y = e.clientY;

			cursorLarge.css({
				"left": `${x}px`,
				"top": `${y}px`
			});
			cursorSmall.css({
				"left": `${x}px`,
				"top": `${y}px`
			});
		});

		/* 
		=================================================================
		07 - Youtube Popup JS
		=================================================================	
		*/
		var $animation_elements = $('.heading_animation');
		var $window = $(window);

		function check_if_in_view() {
			var window_height = $window.height();
			var window_top_position = $window.scrollTop();
			var window_bottom_position = (window_top_position + window_height);

			$.each($animation_elements, function () {
				var $element = $(this);
				var element_height = $element.outerHeight();
				var element_top_position = $element.offset().top + 150;
				var element_bottom_position = (element_top_position + element_height);

				//check to see if this current container is within viewport
				if ((element_bottom_position >= window_top_position) &&
					(element_top_position <= window_bottom_position)) {
					$element.addClass('extend');
				}
			});
		}
		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');


		/* 
		=================================================================
		07 - Youtube Popup JS
		=================================================================	
		*/

		$('.popup-youtube, .play-video').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			preloader: true,
		});

		/*==============================
		08 - Quantity Js
		==============================*/
        $(".num-in span").on("click", function () {
			var $input = $(this).parents('.num-block').find('input.in-num');
			if ($(this).hasClass('minus')) {
				var count = parseFloat($input.val()) - 1;
				count = count < 1 ? 1 : count;
				if (count < 2) {
					$(this).addClass('dis');
				} else {
					$(this).removeClass('dis');
				}
				$input.val(count);
			} else {
				var count = parseFloat($input.val()) + 1
				$input.val(count);
				if (count > 1) {
					$(this).parents('.num-block').find(('.minus')).removeClass('dis');
				}
			}

			$input.change();
			return false;
		});
        


		/*==============================
		09 - Range sliders
		==============================*/

		if ($('#filter_range').length) {
			var firstSlider = document.getElementById('filter_range');
			noUiSlider.create(firstSlider, {
				range: {
					'min': 0,
					'max': 500
				},
				step: 1,
				connect: true,
				start: [18, 300],
				format: wNumb({
					decimals: 0,
					prefix: '$'
				})
			});
			var firstValues = [
				document.getElementById('filter_range-start'),
				document.getElementById('filter_range-end')
			];
			firstSlider.noUiSlider.on('update', function (values, handle) {
				firstValues[handle].innerHTML = values[handle];
			});
		} else {
			return false;
		}


	});

	/*==============================
	10 - Header Scroll
	==============================*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('.covert-header').addClass('scroll');
		} else {
			$('.covert-header').removeClass('scroll');
		}

	});


}(jQuery));

function showPage() {
	document.getElementById("loading").classList.add("removed");
	setTimeout(function() {document.getElementById('loading').style.display = 'none'}, 900)
}