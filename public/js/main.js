/*
Author       : Theme-Family
Template Name: Al-Akhir - Kingdergarden School Website Template
Version      : 1.0
*/
(function($) {
    "use strict";
	
	
	/*--------------------------------------------------------------
       PRELOADER
      --------------------------------------------------------------*/
		/*PRELOADER JS*/
			$(window).load(function() { 
				$(".book_preload").delay(2000).fadeOut(200);
				$(".book").on('click', function() {
					 $(".book_preload").fadeOut(200);
				}) 
			}); 
		/*END PRELOADER JS*/
		
	/*--------------------------------------------------------------
       Sticky Header
      --------------------------------------------------------------*/
	
		$(window).on("scroll", function() {
			 var scroll = $(window).scrollTop();
			if (scroll >= 10) {
				$('.atf-sticky-header').addClass('atf-sticky-active');
			} else {
				$('.atf-sticky-header').removeClass('atf-sticky-active');
			}
		});

     
    /*--------------------------------------------------------------
       Mobile Menu
      --------------------------------------------------------------*/

        $('.atf-nav').append('<span class="atf-menu-toggle"><span></span></span>');
        $('.menu-item-has-children').append('<span class="atf-menu-dropdown-toggle"></span>');
        $('.atf-menu-toggle').on('click', function() {
            $(this).toggleClass("atf-toggle-active").siblings('.atf-nav-list').slideToggle();;
        });
        $('.atf-menu-dropdown-toggle').on('click', function() {
            $(this).toggleClass('active').siblings('ul').slideToggle();
        });

    
    /*--------------------------------------------------------------
       One Page Navigation
      --------------------------------------------------------------*/
        // Click To Go Top
        $('.atf-smooth-move').on('click', function() {
            var thisAttr = $(this).attr('href');
            if ($(thisAttr).length) {
                var scrollPoint = $(thisAttr).offset().top - 50;
                $('body,html').animate({
                    scrollTop: scrollPoint
                }, 800);
            }
            return false;
        });

        // One Page Active Class
        var topLimit = 300,
            ultimateOffset = 200;

        $('.atf-onepage-nav').each(function() {
            var $this = $(this),
                $parent = $this.parent(),
                current = null,
                $findLinks = $this.find("a");

            function getHeader(top) {
                var last = $findLinks.first();
                if (top < topLimit) {
                    return last;
                }
                for (var i = 0; i < $findLinks.length; i++) {
                    var $link = $findLinks.eq(i),
                        href = $link.attr("href");

                    if (href.charAt(0) === "#" && href.length > 1) {
                        var $anchor = $(href).first();
                        if ($anchor.length > 0) {
                            var offset = $anchor.offset();
                            if (top < offset.top - ultimateOffset) {
                                return last;
                            }
                            last = $link;
                        }
                    }
                }
                return last;
            }

            $(window).on("scroll", function() {
                var top = window.scrollY,
                    height = $this.outerHeight(),
                    max_bottom = $parent.offset().top + $parent.outerHeight(),
                    bottom = top + height + ultimateOffset;

                var $current = getHeader(top);

                if (current !== $current) {
                    $this.find(".active").removeClass("active");
                    $current.addClass("active");
                    current = $current;
                }
            });
        });

	/*--------------------------------------------------------------
       Sticky Back To Top
      --------------------------------------------------------------*/
  
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.atf-sticky-header').addClass('atf-nav');
				$('.atf-back-to-top').addClass('open');
			} else {
				$('.atf-sticky-header').removeClass('atf-nav');
				$('.atf-back-to-top').removeClass('open');
			}
		  });
	
	    
		  $(window).on('scroll', function() {
			if ($(window).scrollTop() > 50) {
				$('.atf-sticky-header').addClass('atf-nav');
				$('.atf-back-to-top1').addClass('open');
			} else {
				$('.atf-sticky-header').removeClass('atf-nav');
				$('.atf-back-to-top1').removeClass('open');
			}
		  });
		  
	/*--------------------------------------------------------------
       Scroll UP
      --------------------------------------------------------------*/

			if ($('.atf-back-to-top').length) {
			  $(".atf-back-to-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
	}
	
	if ($('.atf-back-to-top1').length) {
		$(".atf-back-to-top1").on('click', function () {
		  var target = $(this).attr('data-targets');
		  // animate
		  $('html, body').animate({
			scrollTop: $(target).offset().top
		  }, 1000);

		});
	  }
			
	/*--------------------------------------------------------------
      Main slider
      --------------------------------------------------------------*/		
	  
			$('.slider-active').owlCarousel({
				loop:true,
				navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				animateIn: 'fadeIn',
				animateOut: 'fadeOut',
				smartSpeed:450,
				autoplay:true,
				autoplayTimeout:6000,
				mouseDrag:true,
				nav:true,
				dots:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			})	
			
	/*--------------------------------------------------------------
		ODOMETER JS
      --------------------------------------------------------------*/		
	  
			$('.odometer').appear(function() {
				var odo = $(".odometer");
				odo.each(function() {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
			
	/*--------------------------------------------------------------
		CLASS SLIDER
      --------------------------------------------------------------*/	
		$('#atf-class-slider').owlCarousel({
				margin: 10,
				autoplay: true,
				autoplayTimeout: 4000,
				nav: false,
				smartSpeed: 1000,
				dots: true,
				autoplayHoverPause: true,
				loop: true,
				responsiveClass:true,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 3
					}
				}
			});
			
		/*--------------------------------------------------------------
			TESTIMONIAL SLIDER
		  --------------------------------------------------------------*/	

			$('#testimonial-slider').owlCarousel({
				margin: 10,
				autoplay: true,
				autoplayTimeout: 4000,
				nav: false,
				smartSpeed: 1000,
				dots: true,
				autoplayHoverPause: true,
				loop: true,
				responsiveClass:true,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 2
					}
				}
			});
		
		/*END Testimonials LOGO*/
		
		/*--------------------------------------------------------------
			NEWS SLIDER
		  --------------------------------------------------------------*/	
		$('#blog-slider').owlCarousel({
				margin: 10,
				autoplay: true,
				autoplayTimeout: 4000,
				nav: false,
				smartSpeed: 1000,
				dots: true,
				autoplayHoverPause: true,
				loop: true,
				responsiveClass:true,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 2
					},
					1000: {
						items: 3
					}
				}
			});
		
		/*END NEWS SLIDER */
		
		/*--------------------------------------------------------------
		   START Countdown JS
		  --------------------------------------------------------------*/ 
		  $('#countdown').countdown('2040/3/10', function(event) {
			var $this = $(this).html(event.strftime(''
				
				+ '<div><strong>%D</strong> <br />Days </div>'
				+ '<div><strong>%H</strong> <br />Hours </div>'
				+ '<div><strong>%M</strong> <br />Minutes </div>'
				+ '<div class="sec"><strong>%S</strong> <br />Seconds</div>'));
			});
		/*--------------------------------------------------------------
		
      
      --------------------------------------------------------------*/ 
	/*--------------------------------------------------------------
		MAILCHAMP
      --------------------------------------------------------------*/		
			
		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
		
	/*--------------------------------------------------------------
		Porfolio isotope
      --------------------------------------------------------------*/
 
			// image loaded portfolio init
		
				$('.atf-tour-grid').imagesLoaded(function() {
					$('.portfolio-filter').on('click', 'button', function() {
						var filterValue = $(this).attr('data-filter');
						$grid.isotope({
							filter: filterValue
						});
					});
					var $grid = $('.atf-tour-grid').isotope({
						itemSelector: '.grid-item',
						percentPosition: true,
						masonry: {
							columnWidth: '.grid-item',
						}
					});
				});        
					
				// portfolio Filter
				$('.portfolio-filter button').on('click', function(event) {
					$(this).siblings('.active').removeClass('active');
					$(this).addClass('active');
					event.preventDefault();
				});
			
		//**===================END Porfolio isotope ===================**//	
		
		//**===================Magnific Popup ===================**//

				$('.image-popup').magnificPopup({
					type: 'image',
					callbacks: {
						beforeOpen: function() {
						   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInUp');
						}
					},
					gallery: {
						enabled: true
					}
				});
		//**===================END Magnific Popup ===================**//
		
			//  POPUP VIDEO
			$('.popup-video').magnificPopup({
				type: 'iframe',
			});
		
	
	  
	  /*--------------------------------------------------------------
      MOUSE HOVER TILE EFFECT JS
      --------------------------------------------------------------*/	

			$(".card-s").tilt({
			  maxTilt: -20,
			  perspective: 2400,
			  speed: 2200,
			  easing: "cubic-bezier(.03,.98,.52,.99)",
			  scale: 1,
			  
			  });
		 /*--------------------------------------------------------------
		START PARALLAX JS
      --------------------------------------------------------------*/	
			(function () {

				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				 
				} else {
					$(window).stellar({
						horizontalScrolling: false,
						responsive: true
					});
				}

			}());
	
	/*--------------------------------------------------------------
		END PARALLAX JS
      --------------------------------------------------------------*/	
	  
	 /*--------------------------------------------------------------
		WOW SCROLL SPY
      --------------------------------------------------------------*/	
			 var wow = new WOW({
				  //disabled for mobile
					mobile: false
				});

			wow.init();
			
		/* --------------------------------------------------------
             Nice Select
        --------------------------------------------------------- */
        $('select').niceSelect();
		
		/*START PARTNER LOGO*/
			$('.atf-brand-active').owlCarousel({
				margin:10,
				autoplay:true,
				items: 3,
				loop:true,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					600:{
						items:3
					},
					1000:{
						items:5
					}
				}
			})
			/*END PARTNER LOGO*/
			

    
})(jQuery);
