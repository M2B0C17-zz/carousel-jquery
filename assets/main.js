/* JQuery */ 

$(document).ready(function() {
    $('.carousel').carousel({interval: 5000}); // cambia con tiempo definido - Va cambiando solito 5 segundos
    $('#myCarousel .slide').animate({'margin-left': -720}) // para que se mueva hacia la izquierda
  });