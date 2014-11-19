$(document).ready(function() {
/*	$('.language a').click(function() {
		$(this).siblings().find('.active').removeClass('active');
		// $(this).addClass('active');
	});
	return false
*/
	// ##############################

// variant 1  - robo4iy

		$('.language a').click(function() {
		if ($(this).hasClass('is-active')) {
			// $(this).prev().removeClass('active');
			// $(this).next().removeClass('active');
			// $(this).siblings().removeClass('active');

		}
		else {$(this).addClass('is-active')};
					$(this).siblings().removeClass('is-active');
	});
	return false
});