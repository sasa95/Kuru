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

// Animations

function animateItems() {
    $('.what-i-do__item').css('opacity','0').viewportChecker({
    classToAdd: 'animated fadeIn',
  });
}

function animateAbout() {
    $('.who-am-i p').css('opacity','0').viewportChecker({
    classToAdd: 'animated fadeIn',
    offset: 150
  });
}

function animateSigniture() {
    $('.who-am-i .signiture').css('opacity','0').viewportChecker({
    classToAdd: 'animated fadeIn'
  });
}

function animateMyValues() {
    $('.my-values li').css('opacity','0').viewportChecker({
    classToAdd: 'animated fadeIn'
  });
}

function animateFooterQuote() {
    $('.quote--footer').css('opacity','0').viewportChecker({
    classToAdd: 'animated fadeIn'
  });
}

function animateAll(){
	animateItems();
	animateAbout();
	animateMyValues()
	animateSigniture()
	animateFooterQuote()
}

animateAll();

