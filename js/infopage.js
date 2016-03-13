jQuery(document).ready( 
		function(){ 	

		var h = $(this).height();
		var w = $(this).width();
		var fleft = (w-960)/2;

		$('#footer').css('margin-left', fleft);
		$('#headerback').css('width', w);

		$(window).resize(function(){
			w = $(document).width();
			fleft = (w-960)/2;
			$('#footer').css('margin-left', fleft);
			$('#headerback').css('width', w);
		})


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

// 	footer		

		$('#footer').on({
			mouseenter: function(){
				$('#footer').stop().animate({height: '30px'}, 300);
			},
			mouseleave: function(){
				$('#footer').stop().animate({height: '20px'}, 300);
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
			$('.homefooter').css('color', '#ffff00');
		}, function(){
			$('.homefooter').css('color', '#999');
		})

		$('.aboutusfooter').hover(function(){
			$('.aboutusfooter').css('color', '#ffff00');
		}, function(){
			$('.aboutusfooter').css('color', '#999');
		})

		$('.galleryfooter').hover(function(){
			$('.galleryfooter').css('color', '#ffff00');
		}, function(){
			$('.galleryfooter').css('color', '#999');
		})

	});