$(function(){
//Click events
	$('.btn').click(function(){
		$('.btn div:first').toggleClass('rot');

		$('.btn div:nth-child(3)').toggleClass('rot_2');

		$('.btn div:nth-child(2)').toggleClass('op');

		$(this).delay(1000).toggleClass('ro_all');

		$('.wrapper_two').slideToggle('slow');

		 $('.social').slideToggle('slow');


	});

//Scroll Animation
	$(window).scroll(function(){
	var scroll = $(this).scrollTop();
		if(scroll >= 590){
			$('.github').addClass('slideL');
			$('.linkedin').addClass('slideR');
		}else{
			$('.github').removeClass('slideL');
			$('.linkedin').removeClass('slideR');
		
		}

	 $('.type').css({
	 	'transform' : 'translate(0px, '+ scroll /4  +'%)'
	 });



	 		if (scroll >= 300){
	 			$('.type').fadeOut('fast');
	 		}else{
	 			$('.type').fadeIn('slow');
	 		}

	});

	//TYPE EFFECT

	var str = "Hi! I'm Haaruun";
	var split = str.split("");

	var counter=0;
	setInterval(function(){
		$('.write_on').append(split[counter]);
		counter++;
		if(counter==str.length){
			clearInterval
		}
	}, 150);


});