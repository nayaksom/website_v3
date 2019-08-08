/* Flexslider */
$(window).load(function() {
  "use strict";
	$('.flexslider').flexslider({
		animation: "fade",
		start: function(slider) {
			$('.np-controls a.next').click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("next"));
			});
			$('.np-controls a.previous').click(function(event){
				event.preventDefault();
				slider.flexAnimate(slider.getTarget("previous"));
			});
		}
	});
});

/* Nivo - Lightbox */
jQuery(document).ready(function($) {
  "use strict";
    $('.nivo-lbox').nivoLightbox({ effect: 'fade' });
});

/* Google map */
$(function () {
  "use strict";
	var map = new GMaps({
	el: "#map",
	lat: 25.046883,
	lng: 55.132301,
          zoom: 15, 
          zoomControl : true,
          zoomControlOpt: {
            style : "BIG",
            position: "TOP_LEFT"
          },
          panControl : true,
          streetViewControl : false,
          mapTypeControl: false,
          overviewMapControl: false
      });
        
      var styles = [
            {
              stylers: [
                { hue: "#00ffe6" },
                { saturation: -100 }
              ]
            }
      ];
        
      map.addStyle({
            styledMapName:"Styled Map",
            styles: styles,
            mapTypeId: "map_style"  
      });
        
      map.setStyle("map_style");

      map.addMarker({
        lat: 25.046883,
        lng: 55.132301,
        icon: "images/marker.png"
      });
});

/* Contact Form Submit Message */
$(document).ready(function(){
    $("#show").click(function(){
        $('#successMessage').show();
    });
});
