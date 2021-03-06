var $nav = $('#nav--main');
var $header = $('.header');
var $headerHight = $header.height();
var $navbarToggler = $('.navbar-toggler');
var $hambg = $('.hamburger-menu');

$(window).scroll(function() {
	if($(this).scrollTop() > $headerHight - 100){
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

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
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

function animateShopItems() {
    $('.shop-item-card').addClass('hidden').viewportChecker({
    classToAdd: 'animated flipInY visible'
  });
}

function animateAll(){
	animateItems();
	animateAbout();
	animateMyValues();
	animateSigniture();
	animateFooterQuote();
  animateShopItems();
}

animateAll();

