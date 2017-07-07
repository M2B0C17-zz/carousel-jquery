/* JQuery */ 

$(document).ready(function() {
    $('.carousel').carousel({interval: 5000}); // cambia con tiempo definido - Va cambiando solito 5 segundos
    
  });


/* INTENTOS CUECK

$(document).ready(function() {
    var transicion = 5000;
    var valocidad = 1000;
    var pausa = 7000;
    var diapoImg = 1;

    var $slider = $('#myCarousel');
    var $sliderCaja = $slider.find('.slides');
    var $slider2 = $sliderCaja.find('.slide');

    setInterval(function(){
    	$sliderCaja.animate({'margin-left': '-=' + transicion}, valocidad, function(){
    		diapoImg++;
    		if(diapoImg === $slider2.length){
    			diapoImg = 1;
    			sliderCaja.css('margin-left', 0);
    		}
    	});
    }, pausa);
    
  });

*/