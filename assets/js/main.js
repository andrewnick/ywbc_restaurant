var tablet = 750;
var desktop = 970;
var large = 1170;

$(document).ready( function(){

	$('button').on('click', function () {

		$(".nav_item_container").show();

		if ($('main').hasClass('move_left')) {

			$("main").addClass('move_right');
			$("main").removeClass('move_left');

		} else {

			$("main").addClass('move_left');
			$("main").removeClass('move_right');
		}

		
	});

	$(".nav_item_container").on('click', function(){

		$("main").addClass('move_right');
		$("main").removeClass('move_left');
	});

	$(window).on('resize' , function(){
		if ($('button').css('display') == 'none'){
			$('.nav_item_container').show();
		}else {
			$('.nav_item_container').hide();
		}
	});

});