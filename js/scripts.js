$(document).ready(function(){

	/*- promo__slider -*/
	$('.promo__slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		speed: 500,
		cssEase: 'linear'
	});

	/*- down scroll -*/	
	var $page = $('html, body');
		$('.to-bottom').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 700);
	    return false;
	});

	/*- animation -*/
	jQuery('.first-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animate__animated animate__fadeInBottomLeft',
		offset: 100    
	}); 

	jQuery('.second-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animate__animated animate__fadeInBottomRight',
		offset: 100    
	}); 

	jQuery('.third-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animate__animated animate__fadeInUp',
		offset: 100    
	});  

	jQuery('.fourth-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animate__animated animate__fadeInDown',
		offset: 100    
	});

	jQuery('.five-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animate__animated animate__fadeInTopLeft',
		offset: 100    
	}); 

	jQuery('.six-animation').addClass("invisible").viewportChecker({
		classToAdd: 'visible animate__animated animate__fadeInTopRight',
		offset: 100    
	}); 

	/*- entertainments-slider -*/
	$('.entertainments-slider').slick({
		autoplay: false,
  		autoplaySpeed: 3000,
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		speed: 500,
		responsive: [
			{
			breakpoint: 1600,
			settings: {
				arrows: true,
				slidesToShow: 3
				}
	    	},
	    	{
			breakpoint: 1200,
			settings: {
				arrows: true,
				slidesToShow: 2
				}
	    	},
	    	{
			breakpoint: 479,
			settings: {
				arrows: true,
				slidesToShow: 1
				}
	    	}
	  	]
	});

	/*- partners-slider -*/
	$('.partners-slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 5,
		speed: 500,
		responsive: [
			{
			breakpoint: 991,
			settings: {
				arrows: true,
				slidesToShow: 4
				}
	    	},
	    	{
			breakpoint: 767,
			settings: {
				arrows: true,
				slidesToShow: 3
				}
	    	},
	    	{
			breakpoint: 580,
			settings: {
				arrows: true,
				slidesToShow: 2
				}
	    	}
	  	]
	});

	/*- gallery-slider -*/
	$('.gallery-slider').slick({
		arrows: true,
		dots: false,
		infinite: false,
		slidesToShow: 5,
		speed: 500,
		responsive: [
			{
			breakpoint: 991,
			settings: {
				arrows: true,
				slidesToShow: 4
				}
	    	},
	    	{
			breakpoint: 767,
			settings: {
				arrows: true,
				slidesToShow: 3
				}
	    	},
	    	{
			breakpoint: 580,
			settings: {
				arrows: true,
				slidesToShow: 2
				}
	    	},
	    	{
			breakpoint: 420,
			settings: {
				arrows: true,
				slidesToShow: 1
				}
	    	}
	  	]
	});

	/*- menu-btn -*/
	var siteToggle = $('.menu-btn'),
		siteMenu= $('.header__sub-menu');


	siteToggle.on('click', function(){
		$(this).toggleClass("collapsed");
		  siteMenu.toggleClass("show");
		$('body').toggleClass('overflow-hd');
	});

	/*- vacancy -*/
    $('span.btn').click(function(e) {
        
        if($(this).parent().hasClass('open')) {
            $(this).parent().removeClass('open');
        } else {
            $(this).parent().addClass('open');
        }
    });

	/*- mixitup -*/
	var containerEl = document.querySelector('[data-ref~="mixitup-container"]');
	
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '[data-ref~="mixitup-target"]'
        }
    });

});











