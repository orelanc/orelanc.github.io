$(document).ready(function(){
	var servicesSlider = $("#services-slider .slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinite: false,
		// autoplay: true,
		// autoplaySpeed: 2000,
		// fade: true,
		// adaptiveHeight: true,
		// appendArrows: $('.slider-arrows'),
		// nextArrow: '<button type="button" class="slick-next">Previous</button>',
		// prevArrow: '<button type="button" class="slick-prev">Previous</button>'
	});

	var projectSlider = $("#project .slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinite: false,
		// autoplay: true,
		// autoplaySpeed: 2000,
		// fade: true,
		// adaptiveHeight: true,
		// appendArrows: $('.slider-arrows'),
		// nextArrow: '<button type="button" class="slick-next">Previous</button>',
		// prevArrow: '<button type="button" class="slick-prev">Previous</button>'
	});

	var touch 	= $('#touch-menu');
	var menu 	= $('.menu');
	var menuIcon 	= $('#nav-icon');
	// var close = true;
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle( 600, "swing", function(){
			menuIcon.toggleClass('open');
			// if(close){
			// 	close = false;
			// 	// touch.css("transform", "rotate(90deg)");
			// 	menuIcon.toggleClass('open');
			// }
			// 	else {
			// 		close = true;
			// 		// touch.css("transform", "rotate(0deg)");
			// 		menuIcon.toggleClass('open');
			// 	}
		});
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});

function initMap() {

	var myLatLng = {lat: -25.363, lng: 131.044};

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: myLatLng
	});

	var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: "Title",
		icon: image
	});
}