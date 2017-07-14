var $nav = $('#nav--main');
var $header = $('.header--main');
var $headerHight = $header.height();
var $navbarToggler = $('.navbar-toggler');
var $hambg = $('.hamburger-menu');

$(window).scroll(function() {
	if($(this).scrollTop() > $headerHight){
		$nav.addClass('scrolledNav');
		$navbarToggler.addClass('togglerScrolled');
		$hambg.addClass('hambgScrolled');
	}
	else {
		$nav.removeClass('scrolledNav');
		$navbarToggler.removeClass('togglerScrolled');
		$hambg.removeClass('hambgScrolled');
	}
});