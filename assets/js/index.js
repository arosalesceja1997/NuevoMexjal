// $(".me-flecha").hover(function () {
//   $(this).fadeOut(100);
//   $(this).fadeIn(500);
// });

function toggleHam() {
  $(".me-top-menu").toggle();
}


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
  console.log(alto);
});
