jQuery(document).ready( 
		function(){

			
			
			var $img = $('.background');
			var h = $(this).height();
			var w = $(this).width();
			var fleft = (w-960)/2;

			//    Footer in the middle

			$('#footer').css('left', fleft);
			$('#homebtn').css('margin-left', fleft);

			$(window).resize(function(){
				w = $(document).width();
				fleft = (w-960)/2;
				$('#footer').css('left', fleft);
				$('#homebtn').css('margin-left', fleft);
			})


			$('#homebtn').on({
				mouseenter: function(){
					$(this).css('opacity', '1');
				},
				mouseleave: function(){
					$(this).css('opacity', '0.4');
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

			$('#footer').on({
				mouseenter: function(){
					$(this).css('opacity', '0.8');
					$(this).stop().animate({height: '30px'}, 300);
				},
				mouseleave: function(){
					$(this).css('opacity', '0.2');
					$(this).stop().animate({height: '20px'}, 300);
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
		});