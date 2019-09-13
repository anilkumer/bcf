$(document).ready(function(){
	$('#home-slider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:10,
		animateIn: 'fadeIn', 
		animateOut: 'fadeOut',
		dots:false,
		nav:true,
		navText:['<i class="fa fa-angle-double-left homeSlider_left" aria-hidden="true"></i>','<i class="fa fa-angle-double-right homeSlider_right" aria-hidden="true"></i>'],
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
	});
	$('#team_slider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:10,
		animateIn: 'fadeIn', 
		animateOut: 'fadeOut',
		dots:false,
		nav:true,
		navText:['<i class="fa fa-chevron-left teamSlider_left" aria-hidden="true"></i>','<i class="fa fa-chevron-right teamSlider_right" aria-hidden="true"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});

	$('#partner_slider').owlCarousel({
		loop:true,
		autoplay:true,
		margin:10,
		animateIn: 'fadeIn', 
		animateOut: 'fadeOut',
		dots:false,
		nav:false,
		navText:['<i class="fa fa-chevron-left homeSlider_left" aria-hidden="true"></i>','<i class="fa fa-chevron-right homeSlider_right" aria-hidden="true"></i>'],
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
	});
})

$(document).ready(function() {
  $('.popup-img').magnificPopup({type:'image'});
});