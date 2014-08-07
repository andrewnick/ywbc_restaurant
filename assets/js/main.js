var tablet = 750;
var desktop = 970;
var large = 1170;

$(document).ready( function(){

	$('button').on('click', function () {
		// Trigger animation

		// Toggle in and out
		//$(".nav_item_container").show();// 
		$(".nav_item_container").slideToggle();// 
	})

	// // if ((window).outerWidth >= tablet) {		
	// // 	$('.nav_item_container').removeAttr('style');
	// // 	$('.nav_item_container').css({'display':'block'});
	// // }

	// // $(window).on('resize', function  () {
	// // 	var self = $(this);
	// // 	var winWidth = self.outerWidth();

	// // 	if( winWidth >= tablet) {
	// // 		$('.nav_item_container').removeAttr('style');
	// // 		$('.nav_item_container').css({'display':'block'});
	// // 	}
	// // })

	$(window).on('resize' , function(){
		if ($('button').css('display') == 'none'){
			$('.nav_item_container').show();
		}else {
			$('.nav_item_container').hide();
		}
	});

});