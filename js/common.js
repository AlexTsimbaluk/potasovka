var dateStart = new Date().getTime();

$(document).ready(function() {

	var nav = responsiveNav(".nav-collapse", {
		label: ''
	});

	// Header sticky state
	/*if ($('header').length) {
		var pageNav = $('.page-nav');
		$(window).on('scroll', function() {
			if ($(window).scrollTop() > 0) {
				// pageNav.addClass('sticked');
			} else {
				// pageNav.removeClass('sticked');
			}
		});
	}*/

	// navigation
	// $('li a', '.page-nav, .side-nav').click(function() {
	$('.page-nav li a, .side-nav li a').click(function() {
		// $('li', '.page-nav, .side-nav').removeClass('active');
		$('.page-nav li, .side-nav li').removeClass('active');
		$(this).parent().addClass('active');
		// var miniOffset = ($(this).attr('href') == '#restr' ? 35 : 0);
		// $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top - miniOffset}, 500);
		$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
		return false;
	});

	// anchor movement
	if (window.location.hash != '' && $(window.location.hash).length) {
		$('html, body').animate({scrollTop: $(window.location.hash).offset().top}, 500);
	}

});

$(window).scroll(function() {
	/*menu active item on scroll
	$('.page-nav li').removeClass('active');
	console.log($('.page-nav li a').reverse());
	var links = $('.page-nav li a').reverse();
	console.log(links);*/
	/*$('.page-nav li a').reverse().each(function() {
		if ($($(this).attr('href')).offset().top < $(window).scrollTop() + 10) {
			$(this).parent().addClass('active');
			return false;
		}
	});*/
}).scroll();

$(window).load(function() {

	var dateLoad = new Date().getTime();
	// console.log(dateLoad, dateStart);
	console.log((dateLoad - dateStart) + ' ms');

	// Preloader
	/*$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");*/

});

