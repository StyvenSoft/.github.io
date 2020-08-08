jQuery(document).ready(function(){ 
	
		// Logo
	var $logo 	= $('#logo');

    if (location.href.indexOf("#") != -1) {
        $logo.show();
    }
	// Show logo 
	$('.menu .tabs a').click(function() {
	  $logo.fadeIn('slow');
	});
	// Hide logo
	$('.tab-profile').click(function() {
	  $logo.fadeOut('slow');
	});	

	$('#yellow-color').click(function(e){
		$(".main-wrapper-resume").attr("id", "yellow")
	});
	$('#red-color').click(function(e){
		$(".main-wrapper-resume").attr("id", "red")
	});
	$('#blue-color').click(function(e){
		$(".main-wrapper-resume").attr("id", "blue")
	});
	$('#green-color').click(function(e){
		$(".main-wrapper-resume").attr("id", "green")
	});

	$('.setting-icon').click(function(){
		$('.color-box').toggleClass("main");
	});

	// Rating bars
	$(".skills li .rating").each(function(index,e) { 

		// Vars
		var 
			$ratNum = 7,
			$rat = $(e).attr("data-rat"),
			$point = "<span></span>";

		// Append points
		while($ratNum > 0){
		     $(e).append($point);
		     $ratNum--;
		}

		$(e).find("span").each(function(index,e) { 
			if(index >= $rat) return false;
			// Append Disabled Rats
			$(e).animate({
			    opacity: 1
			  });
		});

    });
	
	// Profile Photo Slider
	 $(".photo-inner ul").carouFredSel({
        direction           : "left",
 	    circular: true,
        auto    			: true,
        scroll 			: {
            items           : 1,
            fx 				: 'crossfade',
            duration        : 1500,                        
            wipe    		: true
        },
	    swipe: {
	        onTouch: true
	    },
        items: {
            width: 153
        }           
    });

	var $content 		= $("#content");
	
	// Run easytabs
  	$content.easytabs({
	  animate			: true,
	  updateHash		: false,
	  transitionIn		:'slideDown',
	  transitionOut		:'slideUp',
	  animationSpeed	:600,
	  tabs				:".tmenu",
	  tabActiveClass	:'active',
	});

	
	// Hover menu effect
	$content.find('.tabs li a').hover(
		function() {
			$(this).stop().animate({ marginTop: "-7px" }, 200);
		},function(){
			$(this).stop().animate({ marginTop: "0px" }, 300);
		}
	);

	// Menu Navigation
	 $(".menu .tabs").carouFredSel({
        responsive          : true,
        direction           : "left",
 	    circular: false,
    	infinite: false,
        pagination  		: "#menu-controls",  
        auto    			: false,
        scroll 			: {
            items           : 1,
            duration        : 300,                        
            wipe    : true
        },
		prev	: {	
			button	: "#menu-prev",
			key		: "right"
		},
		next	: { 
			button	: "#menu-next",
			key		: "left"
		},
	    swipe: {
	        onTouch: true
	    },
        items: {
            width: 140,
            visible: {
              min: 2,
              max: 5
            }
        }           
    });
	
	var $catsfilter 		= $('.cats-filter');

	// Copy categories to item classes
	$catsfilter.find('a').click(function() {
		var currentOption = $(this).attr('data-filter');
		$(this).parent().parent().find('a').removeClass('current');
		$(this).addClass('current');
	});	
	
	// Needed variables
	var $plist	 	= $('#portfolio-list');
	var $pfilter 		= $('#portfolio-filter');
		
	// Run Isotope  
	$plist.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});	
	
	// Isotope Filter 
	$pfilter.find('a').click(function(){
	  var selector = $(this).attr('data-filter');
		$plist.isotope({ 
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false,
	   }
	  });
	  return false;
	});	 

	$('.test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true} 
      });
});	

particlesJS('particles-js', 
{
	"particles": {
	  "number": {
		"value": 62,
		"density": {
		  "enable": true,
		  "value_area": 800
		}
	  },
	  "color": {
		"value": "#00c4fc"
	  },
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#000000"
		},
		"polygon": {
		  "nb_sides": 5
		},
		"image": {
		  "src": "img/github.svg",
		  "width": 100,
		  "height": 100
		}
	  },
	  "opacity": {
		"value": 0.5,
		"random": false,
		"anim": {
		  "enable": false,
		  "speed": 1,
		  "opacity_min": 0.1,
		  "sync": false
		}
	  },
	  "size": {
		"value": 3,
		"random": true,
		"anim": {
		  "enable": false,
		  "speed": 40,
		  "size_min": 0.1,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": true,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 6,
		"direction": "none",
		"random": false,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 1200
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": false,
		  "mode": "repulse"
		},
		"onclick": {
		  "enable": false,
		  "mode": "push"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 400,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 400,
		  "size": 40,
		  "duration": 2,
		  "opacity": 8,
		  "speed": 3
		},
		"repulse": {
		  "distance": 200,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
  }

);