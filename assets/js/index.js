$(window).resize(function () {
  //aqui el codigo que se ejecutara cuando se redimencione la ventana
  var alto = $(window).height();
  var ancho = $(window).width();
  if (ancho > 1050) {
    $(".me-menu-mv").hide();
    $("#me-title-toggle").show();
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

$("#me-close").click(function () {
  $(".me-show-text").hide();
});

$("#me-show-div").click(function () {
  $(".me-show-text").show();
});

$("#me-send-mensaje").click(function () {
  let agencia = $("#me-agencia").val();
  let ubicacion = $("#me-ubicacion").val();
  let ciudad = $("#me-ciudad").val();
  let estado = $("#me-ciudad").val();
  let cp = $("me-cp").val();
  let telefono = $("#me-telefono").val();
  let mail = $("#me-mail").val();
  let mensaje = $("#me-data-mensaje").val();
  let agente = $("#me-agente").val();

  $.ajax({
    url: "http://aliat.herokuapp.com/api/index/contact",
    type: "Post",
    data: JSON.stringify({
      name: agente,
      email: mail,
      phone: telefono,
      message: `${agencia} | ${ubicacion} | ${ciudad} | ${estado} | ${cp} | ${mensaje}`,
      source: "5f4848f9fc3e867433f8ace0",
      public_key: "duDJQV580jkdveLln5V3SHEcyTBcfMpr"
    }),
    contentType: 'application/json; charset=utf-8',
    success: function (data) {
      alert('Registro aregado exitosamente !!!');
    },
    failure: function (data) {
      alert(data.responseText);
    },
    error: function (data) {
      alert(data.responseText);
    }
  });
});
