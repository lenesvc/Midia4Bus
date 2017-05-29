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
               
               
		
		