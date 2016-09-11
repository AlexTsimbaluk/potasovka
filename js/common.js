var dateStart = new Date().getTime();

$.fn.reverse = [].reverse;

$(document).ready(function() {

	var screenWidth = screen.width;
	var windowWidth = $(window).width();
	var scrollWidth = screenWidth - windowWidth;
	if (screenWidth > 1200 && scrollWidth < 35) {
		// $('.header-main').css({'height' : screen.height});
	}


	if (screenWidth > 600) {
		$('.rules-list .rule div:first-child, .small-visible > div:odd').addClass("wow fadeInLeft").attr("data-wow-offset", "200");
		$('.rules-list .rule div:last-child, .small-visible > div:even').addClass("wow fadeInRight").attr("data-wow-offset", "200");
		$('.contacts .side-contacts .contact-wrapper').addClass("wow bounceIn").attr("data-wow-offset", "50");
	}

	var nav = responsiveNav(".nav-collapse", {
		// customToggle: 'nav-toggle-custom',
		label: ''
	});

	var navToggle = $('.nav-toggle');
	console.log(navToggle);

	navToggle.click(function(e) {
		var navCollapseLayer = $(this).parents('.nav-collapse-layer');
		console.log(navCollapseLayer);
		console.log('navCollapseLayer');
		console.log(e.target);
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
		$('.page-nav li, .side-nav li').removeClass('active');
		$(this).parent().addClass('active');
		$('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 500);
		return false;
	});

	// anchor movement
	if (window.location.hash != '' && $(window.location.hash).length) {
		$('html, body').animate({scrollTop: $(window.location.hash).offset().top}, 500);
	}

	//показ формы обратного звонка
	$(".show-register").click(function (e) {
		e.preventDefault();
		$('.popup-form, .popup-overlay').fadeIn(500);
	});

	//закрытие модального окна и формы, сброс полей формы
	$(".popup-overlay, .close-popup").click(function (e){
		$(".popup-form, .popup-overlay").fadeOut(500);
		$(':input', ".popup-form").not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
	});

	/* Calendar */
	$('#calendar').datepicker({
		inline: true,
		firstDay: 1,
		showOtherMonths: true,
		monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
		dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
	});

});


// menu active item on scroll
$(window).scroll(function() {
	// console.log('scroll');
	$('.side-nav li').removeClass('active');
	$('.side-nav li a').reverse().each(function() {
		if ($($(this).attr('href')).offset().top < $(window).scrollTop() + 50) {
			$(this).parent().addClass('active');
			return false;
		}
	});

	$('.page-nav li').removeClass('active');
	$('.page-nav li a').reverse().each(function() {
		if ($($(this).attr('href')).offset().top < $(window).scrollTop() + 50) {
			$(this).parent().addClass('active');
			return false;
		}
	});
}).scroll();

$(window).load(function() {

	new WOW().init();

	var dateLoad = new Date().getTime();
	// console.log((dateLoad - dateStart) + ' ms');

	// Preloader
	/*$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");*/

});

