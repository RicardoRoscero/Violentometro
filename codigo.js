let contRojo = 0;
let contAmarillo = 0;
let contVerde = 0;

var checkbox = document.getElementById("Asesinar");
checkbox.addEventListener("change", corroboraRojo);

var checkbox = document.getElementById("Mutilar");
checkbox.addEventListener("change", corroboraRojo);

var checkbox = document.getElementById("Violar");
checkbox.addEventListener("change", corroboraRojo);

var checkbox = document.getElementById("AbusoSexual");
checkbox.addEventListener("change", corroboraRojo);

var checkbox = document.getElementById("ForzarRelacionSex");
checkbox.addEventListener("change", corroboraRojo);

var checkbox = document.getElementById("AmenMuerte");
checkbox.addEventListener("change", corroboraRojo);

var checkbox = document.getElementById("ContenidoIntimo");
checkbox.addEventListener("change", corroboraRojo);

var checkbox = document.getElementById("AmenazarConArmas");
checkbox.addEventListener("change", corroboraRojo);

var checkbox = document.getElementById("Sextorsion");
checkbox.addEventListener("change", corroboraRojo);

var checkbox = document.getElementById("Encerrar");
checkbox.addEventListener("change", corroboraRojo);

//Fin sección roja

var checkbox = document.getElementById("Patear");
checkbox.addEventListener("change", corroboraAmarillo);

var checkbox = document.getElementById("Cachetear");
checkbox.addEventListener("change", corroboraAmarillo);

var checkbox = document.getElementById("Empujar");
checkbox.addEventListener("change", corroboraAmarillo);

var checkbox = document.getElementById("Pellizcar");
checkbox.addEventListener("change", corroboraAmarillo);

var checkbox = document.getElementById("GolpearJugando");
checkbox.addEventListener("change", corroboraAmarillo);

var checkbox = document.getElementById("CaricasAgresivas");
checkbox.addEventListener("change", corroboraAmarillo);

var checkbox = document.getElementById("Manosear");
checkbox.addEventListener("change", corroboraAmarillo);

var checkbox = document.getElementById("Destruir");
checkbox.addEventListener("change", corroboraAmarillo);

var checkbox = document.getElementById("Prohibir");
checkbox.addEventListener("change", corroboraAmarillo);

var checkbox = document.getElementById("Intimidar");
checkbox.addEventListener("change", corroboraAmarillo);

//Fin seccion amarilla

var checkbox = document.getElementById("Humillar");
checkbox.addEventListener("change", corroboraVerde);

var checkbox = document.getElementById("Ofender");
checkbox.addEventListener("change", corroboraVerde);

var checkbox = document.getElementById("Descalificar");
checkbox.addEventListener("change", corroboraVerde);

var checkbox = document.getElementById("Culpa");
checkbox.addEventListener("change", corroboraVerde);

var checkbox = document.getElementById("Stalkear");
checkbox.addEventListener("change", corroboraVerde);

var checkbox = document.getElementById("Celar");
checkbox.addEventListener("change", corroboraVerde);

var checkbox = document.getElementById("Ignorar");
checkbox.addEventListener("change", corroboraVerde);

var checkbox = document.getElementById("Mentir");
checkbox.addEventListener("change", corroboraVerde);

var checkbox = document.getElementById("Chantaje");
checkbox.addEventListener("change", corroboraVerde);

var checkbox = document.getElementById("Bromas");
checkbox.addEventListener("change", corroboraVerde);

function corroboraRojo() {
  if (this.checked) {
    //alert("Seleccionaste una casilla de la zona roja");
    contRojo = contRojo + 1;
    console.log(contRojo);
  }
}

function corroboraAmarillo() {
  if (this.checked) {
    //alert("Seleccionaste una casilla de la zona amarilla");
    contAmarillo = contAmarillo + 1;
    console.log(contAmarillo);
  }
}

function corroboraVerde() {
  if (this.checked) {
    //alert("Seleccionaste una casilla de la zona verde");
    contVerde = contVerde + 1;
    console.log(contVerde);
  }
}


function MostrarResultados() {

  var porcentajeRojo;
  var porcentajeAmarillo;
  var porcentajeVerde;

  porcentajeRojo = (contRojo / 10) * 100;
  porcentajeAmarillo = (contAmarillo / 10) * 100;
  porcentajeVerde = (contVerde / 10) * 100;

  if (contRojo !== 0 && contAmarillo!==0 && contVerde!==0) {
    alert(
      '¡Necesitas ayuda profesional!, obtuviste ' +
      porcentajeRojo +
      "% de la zona roja")
      alert(
        '¡Reacciona!, ¡No te dejes destruir!, obtuviste ' +
        porcentajeAmarillo +
        "% de la zona amarilla"
      )
      alert(
        '¡Ten cuidado!, ¡La violencia aumentará!, obtuviste ' +
        porcentajeVerde +
        "% de la zona verde"
      )
  }
  else if (contAmarillo !==0 && contRojo!==0){
  alert(
    '¡Reacciona!, ¡No te dejes destruir!, obtuviste ' +
    porcentajeAmarillo +
    "% de la zona amarilla"
  )
  alert(
    '¡Necesitas ayuda profesional!, obtuviste ' +
    porcentajeRojo +
    "% de la zona roja")
  }
  else if (contVerde !==0 && contAmarillo!==0){
  alert(
    '¡Ten cuidado!, ¡La violencia aumentará!, obtuviste ' +
    porcentajeVerde +
    "% de la zona verde"
  )
  alert(
    '¡Reacciona!, ¡No te dejes destruir!, obtuviste ' +
    porcentajeAmarillo +
    "% de la zona amarilla"
  )
  }
  else if (contVerde !==0 && contRojo!==0){
    alert(
      '¡Ten cuidado!, ¡La violencia aumentará!, obtuviste ' +
      porcentajeVerde +
      "% de la zona verde"
    )
    alert(
      '¡Necesitas ayuda profesional!, obtuviste ' +
      porcentajeRojo +
      "% de la zona roja")
    }
    else if (contRojo!==0) {
      alert(
        '¡Necesitas ayuda profesional!, obtuviste ' +
        porcentajeRojo +
        "% de la zona roja")
      }
    else if (contAmarillo!==0){
      alert(
        '¡Reacciona!, ¡No te dejes destruir!, obtuviste ' +
        porcentajeAmarillo +
        "% de la zona amarilla")
    }
    else if (contVerde!==0){
      alert(
        '¡Ten cuidado!, ¡La violencia aumentará!, obtuviste ' +
        porcentajeVerde +
        "% de la zona verde"
      )
    }

  else if (contRojo == 0 && contAmarillo == 0 && contVerde == 0){
    alert('Necesita seleccionar al menos una casilla');
  }
  else{
    alert('Ocurrió un error')
  }
}