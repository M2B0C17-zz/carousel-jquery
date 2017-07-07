/* JQuery */ 
    $(function(){
        setInterval(function(){
            $('#carousel ul').animate({marginLeft: '-800px'}, 800, function(){
            $('#carousel ul li:last').after($('#carousel ul li:first'));
            $(this).css('margin-left', '0');
        });
        },5000);
    });
    
/*
    var imagenes = $('.slide img').length; // posicion de diapo o imagen (5)

    // Agregamos las paginaciones de circulos
    for(var i = 1; i <= imagenes; i++){
        $('.paginas').append('<li><span class="fa fa-circle"></span></li>');

    }

    $('.slides img').hide(); // ocultar el carousel 
    $('.slides img:first').show(); // muestra el carousel
    
    // Funcionalidades
    $('.paginas li').click(paginas);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);

    

    
  });

*/
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

  // FUNCIONA
    $('.carousel').carousel({interval: 5000}); // cambia con tiempo definido - Va cambiando solito 5 segundos

    // NO FUNCIONA

    // Fin Funciones
    function paginacion(){
        var posicionDePag = $(this).index() + 1;

        $('.slides li').hide();
        $('.slides li:nth-child('+ posicionDePag +')').fadeIn();

        $(this).css(('color': 'black'));
    }

    function nextDiapo(){
        $('.paginas li').hide();
        $('.')
    }
*/
