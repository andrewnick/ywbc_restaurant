var tablet = 750;
var desktop = 970;
var large = 1170;

var imgContainerWidth = 0;
var imgContainerHeight = 0;

var menuImgHeightRatioMobile = 0.33; //25% of width
var menuImgHeightRatioDesktop = 0.25


$(document).ready( function(){

	// initialize site depending on initial view port width
	layoutInit();


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

		if ($('button').css('display') != 'none'){
			$("main").addClass('move_right');
			$("main").removeClass('move_left');			
		}

	});

	$(window).on('resize' , function(){
		layoutInit();
	});

});

// This function sets layout classes and parameters the particular view port
function layoutInit() {

		if ($('button').css('display') == 'none'){
			$('.nav_item_container').show();
		}else {
			$('.nav_item_container').hide();
		}

		if ((window).outerWidth >= desktop){

			// Change map ratio for better viewing on mobile
			$("div .embed-responsive").removeClass('embed-responsive-4by3');
			$("div .embed-responsive").addClass('embed-responsive-16by9');

			setImageHeight(menuImgHeightRatioDesktop, $(".menu_img"))

		}else {
			
			// Change map ratio for better viewing on mobile
			$("div .embed-responsive").removeClass('embed-responsive-16by9');
			$("div .embed-responsive").addClass('embed-responsive-4by3');


			setImageHeight(menuImgHeightRatioMobile, $(".menu_img"))
		}
}

// This sets the height of the element as a percentage of the element's width
function setImageHeight (heightPercentage, element) {

		var containerWidth = element.css('width');
		var containerHeight = parseInt(containerWidth) * heightPercentage;
		element.css('height', containerHeight);
}