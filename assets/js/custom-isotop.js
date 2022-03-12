

$(window).load(function () {
	var $container = $('.gamesontainer');
	// Original one above is gamesContainer
	$container.isotope({
		filter: '*',

		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false

		}
	});

	$('.projectFilter a').click(function () {
		$('.projectFilter .current').removeClass('current');
		$(this).addClass('current');

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,

			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});


});

