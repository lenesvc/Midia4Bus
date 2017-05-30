//======menu fixo
 jQuery(document).ready(function(a) {
         var b = a("#navbar-main").offset().top,//armazenamos em uma variável o elemento #navbar-main
         c = a(window);//variavel, tendo como elemento o window (que é a janela do seu monitor) 
         
     c.scroll(function() {//// informamos que o método utilizado para essa função será o SCROLL.
         c.scrollTop() >= b ? a("#navbar-main").removeClass("navbar-fixed-top").addClass("navbar-fixed-top") : a("#navbar-main").removeClass("navbar-fixed-top")
     }) // scrollTop verifica se a rolagem da pagina é maior q b.Caso o usuário tenha rolado a página mais que b, 
     //adiciona ao elemento #navbar-main a classe menuFixo;
     //Caso não tenha rolado a página mais que b, remove a classe menuFixo.
 });
 //=====parallax
$('div.bg-parallax').each(function(){ // identifica os elementos que o efeito será aplicado,são todos os elementos com a classe bgParallax.
			var $obj = $(this);
		 
			$(window).scroll(function() {
				var yPos = -($(window).scrollTop() / $obj.data('speed')); //velocidade do scroll dos backgrounds é diferente da velocidade do scroll da página. 
				//É isso que causa o efeito de Parallax,por isso colocamos o atributo data-speed. 
				//Iremos utilizar aquele valor para definir quão rápido será a rolagem do background.
		        //Colocamos esse valor dentro de uma variável yPos. O valor é negativo por que o background tem que se mover para cima.
				//O $(window).scrollTop() pega o valor de quanto a página já rolou do topo, esse valor é dividido pelo $obj.data(‘speed’), 
				//que é o valor que colocamos no atributo data-speed de cada div.bgParallax.
				var bgpos = '50% '+ yPos + 'px';//define que esse valor seja o valor do TOP no background-position dos divs. 
		 
				$obj.css('background-position', bgpos ); //aplica as definições ao objeto
		 
			}); //scroll identifica quando o usuário rola a pagina
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
    
    //foto rotação
rotate = 0; // Declaramos uma variável com a rotação 0.
          
            document.addEventListener("DOMContentLoaded", function(){ // Usando eventListener, e quando a página for carregada...
             
                document.getElementById("frente").addEventListener("mouseover", function(){ //Quando houver passar o mouse sobre o elemento..
                    
                    if(rotate == 360){rotate = 0} //Verificamos se o valor da variável rotate é 360, se for zeramos o valor.
                 
                    rotate = rotate + 30; //Fazemoz um incremento de 30, ou seja se antes tinha 0 e incrementamos 30 temos o valor de 30, na próxima execução se temos 30 e incrementamos mais 30, vamos para 60 e assim por diante.
                     
                    document.getElementById("frente").style.transform = "rotate("+rotate+"deg)"; //Acessamos o elemento img e através do style.transform atribuimos o rotate com o valor atual de nossa variável.
                });
            });
            
    //gallery
    
    $(document).ready(function() {

            $("#gallery").mouseover(function() {
            $(this).css("background-color","#4682B4");
        });      
            $("#gallery").mouseout(function() {
            $(this).css("backgroundColor","#F3F1F1");
        });      

});    

//collapse

$(main)

function main(){
	$(".content").hide();
	$(".heading").click(function(){
		$(this).next().slideToggle(500);
	});
}

//contato

$(main2)
function main2(){
    $("#btn").on('click',function(){
    alert ("Email enviado com Sucesso!")
    });
}