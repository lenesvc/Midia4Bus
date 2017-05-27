//======menu fixo
 jQuery(document).ready(function(a) {
         var b = a("#navbar-main").offset().top,
         c = a(window);
     c.scroll(function() {
         c.scrollTop() >= b ? a("#navbar-main").removeClass("navbar-fixed-top").addClass("navbar-fixed-top") : a("#navbar-main").removeClass("navbar-fixed-top")
     })
 });