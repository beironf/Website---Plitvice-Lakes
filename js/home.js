
    jQuery(document).ready( 
		function(){ 

		//	fade bildspel

	    $('#faderotator').innerfade({ 
	        animationtype: 'fade', 
	        speed: 2000, 
	        timeout: 5000, 
	        type: 'random_start', 
	        containerheight: '320px'
	    });

		//	rörande objekt

		$('#home').hover(function(){
			$(this).stop().animate({ marginTop: "3" }, 150);
		}, function() {
			$(this).animate({ marginTop: "0px" }, 300);
		});

		$('#aboutus').hover(function(){
			$(this).stop().animate({ marginTop: "3" }, 150);
		}, function() {
			$(this).animate({ marginTop: "0px" }, 300);
		});

		$('#gallery').hover(function(){
			$(this).stop().animate({ marginTop: "3" }, 150);
		}, function() {
			$(this).animate({ marginTop: "0px" }, 300);
		});


		//	About Plitvice knappen

		$('#button1').on({
			mouseenter: function(){
				$('#aboutplitvicelakes').attr('src', 'design/home/buttons/buttonover_03.jpg');
				$('#imageplaceholder').stop().animate({opacity: 0},{duration: 150, complete: function(){
					$('#imageplaceholder').attr('src','design/home/aboutplitviceimg.jpg');			
					$('#imageplaceholder').stop().animate({opacity: 1}, 150);
				}});
			},
			mouseleave: function(){
				$('#aboutplitvicelakes').attr('src', 'design/home/buttons/Homepage_03.jpg');
				$('#imageplaceholder').stop().animate({opacity: 0},{duration: 600, complete: function(){
					$('#imageplaceholder').attr('src','design/home/welcomeimg.jpg');			
					$('#imageplaceholder').stop().animate({opacity: 1}, 600);
				}});
			}
		})


		//	about Split knappen

		$('#button2').on({
			mouseenter: function(){
				$('#aboutsplit').attr('src', 'design/home/buttons/buttonover_06.jpg');
				$('#imageplaceholder').stop().animate({opacity: 0},{duration: 150, complete: function(){
					$('#imageplaceholder').attr('src','design/home/aboutsplitimg.jpg');			
					$('#imageplaceholder').stop().animate({opacity: 1}, 150);
				}});
			},
			mouseleave: function(){
				$('#aboutsplit').attr('src', 'design/home/buttons/Homepage_06.jpg');
				$('#imageplaceholder').stop().animate({opacity: 0},{duration: 600, complete: function(){
					$('#imageplaceholder').attr('src','design/home/welcomeimg.jpg');			
					$('#imageplaceholder').stop().animate({opacity: 1}, 600);
				}});
			}
		})


		//	Our trip knappen

		$('#button3').on({
			mouseenter: function(){
				$('#ourtrip').attr('src', 'design/home/buttons/buttonover_08.jpg');
				$('#imageplaceholder').stop().animate({opacity: 0},{duration: 150, complete: function(){
					$('#imageplaceholder').attr('src','design/home/ourtripimg.jpg');			
					$('#imageplaceholder').stop().animate({opacity: 1}, 150);
				}});
			},
			mouseleave: function(){
				$('#ourtrip').attr('src', 'design/home/buttons/Homepage_08.jpg');
				$('#imageplaceholder').stop().animate({opacity: 0},{duration: 600, complete: function(){
					$('#imageplaceholder').attr('src','design/home/welcomeimg.jpg');			
					$('#imageplaceholder').stop().animate({opacity: 1}, 600);
				}});
			}
		})


		//	Experiences knappen
		
		$('#button4').on({
			mouseenter: function(){
				$('#experiences').attr('src', 'design/home/buttons/buttonover_10.jpg');
				$('#imageplaceholder').stop().animate({opacity: 0},{duration: 150, complete: function(){
					$('#imageplaceholder').attr('src','design/home/experiencesimg.jpg');			
					$('#imageplaceholder').stop().animate({opacity: 1}, 150);
				}});
			},
			mouseleave: function(){
				$('#experiences').attr('src', 'design/home/buttons/Homepage_10.jpg');
				$('#imageplaceholder').stop().animate({opacity: 0},{duration: 600, complete: function(){
					$('#imageplaceholder').attr('src','design/home/welcomeimg.jpg');			
					$('#imageplaceholder').stop().animate({opacity: 1}, 600);
				}});
			}
		})

		// Gallerybox

		$('#gallerybox').on({
			mouseenter: function(){
				$('#gallerybox').css('background-image', 'url(design/home/Homeover_07.png)');		
			},
			mouseleave: function(){
				$('#gallerybox').css('background-image', 'url(design/home/Home_07.png)');
			}
		})

		// Moviebox

		$('#moviebox').on({
			mouseenter: function(){
				$('#moviebox').css('background-image', 'url(design/home/Homeover_09.png)');		
			},
			mouseleave: function(){
				$('#moviebox').css('background-image', 'url(design/home/Home_09.png)');
			}
		})

		$('#footer').on({
			mouseenter: function(){
				$('#footer').css('opacity', '1');
				$('#footer').stop().animate({height: '30px'}, 300);
			},
			mouseleave: function(){
				$('#footer').css('opacity', '0.2');
				$('#footer').stop().animate({height: '20px'}, 300);
			}
		})

		$('.homefooter').hover(function(){
			$('.homefooter').css('color', '#ffff00');
		}, function(){
			$('.homefooter').css('color', 'white');
		})

		$('.aboutusfooter').hover(function(){
			$('.aboutusfooter').css('color', '#ffff00');
		}, function(){
			$('.aboutusfooter').css('color', 'white');
		})

		$('.galleryfooter').hover(function(){
			$('.galleryfooter').css('color', '#ffff00');
		}, function(){
			$('.galleryfooter').css('color', 'white');
		})

	});