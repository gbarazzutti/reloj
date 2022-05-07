let fecha = document.querySelector("#fecha");
let hora = document.querySelector("#hora");

function obtenerFecha() {
  let time = new Date();
  // console.log(time);
  // console.log(time.getMonth()); // 0-11
  // console.log(time.getDay()); // entrega numeros del 0-6 y corresponde a los dias de la semana
  // console.log(time.getDate()); // de 1 a 31 dia de la fecha
  // console.log(time.getFullYear());
  // console.log(time.getHours());
  // console.log(time.getMinutes());
  // console.log(time.getSeconds());

  let diaSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // fecha objetivo
  fecha.innerHTML = `${diaSemana[time.getDay()]} ${time.getDate()} de ${
    meses[time.getMonth()]
  } de ${time.getFullYear()}`;

  // modificar segundos
  let segundos = time.getSeconds();
  let horas = time.getHours();
  let minutos = time.getMinutes();

  if (segundos < 10) {
    // agregar un cero delante del numero
    segundos = "0" + segundos;
  }
  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }

  // modificar hora

  hora.innerHTML = `${horas}:${minutos}:${segundos}`;
}

setInterval(obtenerFecha, 1000);

function cambiarColor(color) {
  console.log("cambiar el color a rosa");
  switch (color) {
    case 'rosa':
      fecha.className = "fecha relojRosa";
      hora.className = "hora relojRosa";
      break;
    case 'verde':
      fecha.className = "fecha relojVerde";
      hora.className = "hora relojVerde";
      break;
    case 'celeste':
      fecha.className = "fecha relojCeleste";
      hora.className = "hora relojCeleste";
      break;
    default:
      fecha.className = "fecha relojVerde";
      hora.className = "hora relojVerde";
  }
}
