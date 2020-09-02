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
    url: "https://aliat.herokuapp.com/api/index/contact",
    headers: {
      'Accept-Language': 'es_MX',
    },
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

function maps(){
  let dir = "https://www.google.com/maps/place/Calle+Justo+Sierra+2593,+Arcos+Vallarta,+44130+Guadalajara,+Jal./@20.6774845,-103.3846777,17z/data=!3m1!4b1!4m5!3m4!1s0x8428ae6d283e1f79:0xe51e4e355db325d0!8m2!3d20.6774845!4d-103.382489";
  window.location = dir;
}
