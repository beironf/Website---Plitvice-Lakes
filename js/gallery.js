jQuery(document).ready( 
		function(){

			$('#thumbs').css('opacity', '0');
			$('#thumbs').animate({opacity: 0.05}, 800);
			$('#thumbs').animate({opacity: 1}, 500);
			$('#thumbs a img').animate({opacity: 0.6}, 50);

			
			var $img = $('.background');
			var h = $(this).height();
			var w = $(this).width();
			var fleft = (w-960)/2;
			var homeleft = fleft-74;
			var homeright = fleft-74+1034;

			//    Footer in the middle

			$('#footer').css('margin-left', fleft);
			$('#homebtn').css('left', homeleft);
			$('#splitbtn').css('left', homeleft - 50);
			$('#gallerybtn').css('left', homeleft - 10);
			$('#homebtn2').css('left', homeright);
			$('#splitbtn2').css('left', homeright);
			$('#gallerybtn2').css('left', homeright);

			$(window).resize(function(){
				w = $(document).width();
				fleft = (w-960)/2;
				homeleft = fleft-74;
				homeright = fleft-74+1034;
				$('#footer').css('margin-left', fleft);
				$('#homebtn').css('left', homeleft);
				$('#splitbtn').css('left', homeleft - 50);
				$('#gallerybtn').css('left', homeleft - 10);
				$('#homebtn2').css('left', homeright);
				$('#splitbtn2').css('left', homeright);
				$('#gallerybtn2').css('left', homeright);
			})

			$('#thumbs a img').hover(function(){
				$(this).stop().animate({opacity:1}, 1);
			}, function(){
				$(this).stop().animate({opacity:0.6}, 300);
			});


			$('#homebtn').on({
				mouseenter: function(){
					$(this).css('opacity', '1');
					$(this).stop().animate({ width: '90px', marginLeft:'-20px' }, 200);
				},
				mouseleave: function(){
					$(this).css('opacity', '0.6');
					$(this).stop().animate({ width: '70px', marginLeft:'0px' }, 200);
				}
			})

			$('#splitbtn').on({
				mouseenter: function(){
					$(this).css('opacity', '1');
					$(this).stop().animate({ width: '140px', marginLeft:'-20px' }, 200);
				},
				mouseleave: function(){
					$(this).css('opacity', '0.6');
					$(this).stop().animate({ width: '120px', marginLeft:'0px' }, 200);
				}
			})

			$('#gallerybtn').on({
				mouseenter: function(){
					$(this).css('opacity', '1');
					$(this).stop().animate({ width: '100px', marginLeft:'-20px' }, 200);
				},
				mouseleave: function(){
					$(this).css('opacity', '0.6');
					$(this).stop().animate({ width: '80px', marginLeft:'0px' }, 200);
				}
			})

			$('#homebtn2').on({
				mouseenter: function(){
					$(this).css('opacity', '1');
					$(this).stop().animate({width: '90px'}, 200);
				},
				mouseleave: function(){
					$(this).css('opacity', '0.6');
					$(this).stop().animate({width: '70px'}, 200);
				}
			})

			$('#splitbtn2').on({
				mouseenter: function(){
					$(this).css('opacity', '1');
					$(this).stop().animate({width: '140px'}, 200);
				},
				mouseleave: function(){
					$(this).css('opacity', '0.6');
					$(this).stop().animate({width: '120px'}, 200);
				}
			})

			$('#gallerybtn2').on({
				mouseenter: function(){
					$(this).css('opacity', '1');
					$(this).stop().animate({width: '100px'}, 200);
				},
				mouseleave: function(){
					$(this).css('opacity', '0.6');
					$(this).stop().animate({width: '80px'}, 200);
				}
			})

			$('#plitvicebox').on({
				mouseenter: function(){
					$(this).css('opacity', '1');
					$(this).stop().animate({width: '626px'}, 300);
					$('#splitbox').stop().animate({width: "196px"}, 300);
					$('#moviebox').stop().animate({width: "126px"}, 300);
					$('#splitbox').css('opacity', '0.4');
					$('#moviebox').css('opacity', '0.4');
				}
			})

			$('#splitbox').on({
				mouseenter: function(){
					$(this).css('opacity', '1');
					$(this).stop().animate({width: '526px'}, 300);
					$('#plitvicebox').stop().animate({width: "296px"}, 300);
					$('#moviebox').stop().animate({width: "126px"}, 300);
					$('#plitvicebox').css('opacity', '0.4');
					$('#moviebox').css('opacity', '0.4');
				}
			})

			$('#moviebox').on({
				mouseenter: function(){
					$(this).css('opacity', '1');
					$(this).stop().animate({width: '456px'}, 300);
					$('#plitvicebox').stop().animate({width: "296px"}, 300);
					$('#splitbox').stop().animate({width: "196px"}, 300);
					$('#plitvicebox').css('opacity', '0.4');
					$('#splitbox').css('opacity', '0.4');
				}
			})

			$('#footer').on({
				mouseenter: function(){
					$(this).stop().animate({height: '30px'}, 300);
				},
				mouseleave: function(){
					$(this).stop().animate({height: '20px'}, 300);
				}
			})

			$('#footer img').on({
				mouseenter: function(){
					$(this).css('opacity', '1');
				},
				mouseleave: function(){
					$(this).css('opacity', '0.6');
				}
			})

			$('.homefooter').hover(function(){
				$(this).css('color', '#ffff00');
			}, function(){
				$(this).css('color', '#999');
			})

			$('.aboutusfooter').hover(function(){
					$(this).css('color', '#ffff00');
				}, function(){
					$(this).css('color', '#999');
				})

				$('.galleryfooter').hover(function(){
					$(this).css('color', '#ffff00');
				}, function(){
					$(this).css('color', '#999');
			})

			$('#plitvicebox').hover(function(){
					$('.innertext1').animate({opacity: '1'}, 200);
				}, function(){
					$('.innertext1').animate({opacity: '0'}, 200);
			})

			$('#splitbox').hover(function(){
					$('.innertext2').animate({opacity: '1'}, 200);
				}, function(){
					$('.innertext2').animate({opacity: '0'}, 200);
			})

			$('#moviebox').hover(function(){
					$('.innertext3').animate({opacity: '1'}, 200);
				}, function(){
					$('.innertext3').animate({opacity: '0'}, 200);
			})

		});