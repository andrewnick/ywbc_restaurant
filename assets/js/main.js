// var tablet = 750;
// var desktop = 970;
// var large = 1170;

$(document).ready( function(){
	
	$('button').on('click', function () {
		$(".nav_item_container").slideToggle();
	})

	// $(window).on('resize', function  () {
	// 	var self = $(this);
	// 	var winWidth = self.outerWidth();

	// 	if( winWidth >= tablet) {
	// 		$('nav_item').removeAttr('style');
	// 	}
	// })

});