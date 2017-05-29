//======menu fixo
 jQuery(document).ready(function(a) {
         var b = a("#navbar-main").offset().top,
         c = a(window);
     c.scroll(function() {
         c.scrollTop() >= b ? a("#navbar-main").removeClass("navbar-fixed-top").addClass("navbar-fixed-top") : a("#navbar-main").removeClass("navbar-fixed-top")
     })
 });
 //=====parallax
$('div.bg-parallax').each(function(){
			var $obj = $(this);
		 
			$(window).scroll(function() {
				var yPos = -($(window).scrollTop() / $obj.data('speed')); 
		 
				var bgpos = '50% '+ yPos + 'px';
		 
				$obj.css('background-position', bgpos );
		 
			}); 
		});

//=====relógio

	function time()
               {
                   today=new Date();
                   h=today.getHours();
                   m=today.getMinutes();
                   s=today.getSeconds();
                  document.getElementById('txt').innerHTML=h+":"+m+":"+s;
                    setTimeout('time()',500);
               }
               
               
		
//=====mapa 
 var map;
      function initMap(){
        var myLatLng = {lat: -23.9436298, lng: -46.3331562};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 10,
            center: myLatLng
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Midia 4 Bus!'
        });
    }		