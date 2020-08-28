// $(".me-flecha").hover(function () {
//   $(this).fadeOut(100);
//   $(this).fadeIn(500);
// });

// function toggleHam() {
//   $(".me-top-menu").toggle();
// }


// $("a").mouseover(function (event) {
//   $("#capa").addClass("clasecss");
// });

// $(document).ready(function () {
//   //aquí meteremos las instrucciones que modifiquen el DOM

// });

$(window).resize(function () {
  //aqui el codigo que se ejecutara cuando se redimencione la ventana
  var alto = $(window).height();
  var ancho = $(window).width();
  if (ancho > 1050) {
    $(".me-menu-mv").toggle();
    $("#me-title-toggle").toggle();
  }
});
$(document).ready(function () { //Hacia arriba
  irArriba();
});

function irArriba() {
  $('.ir-arriba').click(function () { $('body,html').animate({ scrollTop: '0px' }, 1000); });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) { $('.ir-arriba').slideDown(600); } else { $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function () { $('body,html').animate({ scrollTop: '1000px' }, 1000); });
}

$("#me-show-menu").click(function () {
  $(".me-menu-mv").toggle();
  $("#me-title-toggle").toggle();
});

