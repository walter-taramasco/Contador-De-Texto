let textareaEscribirId = document.getElementById('textarea-id');
let botonReiniciar = document.getElementById('botonReiniciar');
let botonContar = document.getElementById('botonContar');
var contadorId = document.getElementById('contador-id');
let contadorCaracteresId = document.getElementById('contador-caracteres-id');
let contadorPalabrasId = document.getElementById('contador-palabras-id');
let caracteresCalculados = document.getElementById('caracteres-calculados');
let palabrasCalculadas = document.getElementById('palabras-calculadas');

function textareaEscribir() {
  if (textareaEscribirId.value.length == 0) {
    botonContar.style.pointerEvents = 'none';
    botonContar.style.opacity = '0.6';
    botonContar.style.transition = '0.3s';
    botonReiniciar.style.pointerEvents = 'none';
    botonReiniciar.style.opacity = '0.6';
    botonReiniciar.style.transition = '0.3s';
  } else {
    botonContar.style.pointerEvents = 'all';
    botonContar.style.opacity = '1';
    botonContar.style.transition = '1';
    botonReiniciar.style.pointerEvents = 'all';
    botonReiniciar.style.opacity = '1';
    botonReiniciar.style.transition = '0.3s';
  }
}

function funcContar() {
let caracteresCE = textareaEscribirId.value.length;
let caracteresSE = caracteresCE.replace(' ', '');
caracteresCalculados.textContent = caracteresSE + " caracteres";
contadorId.style.display = 'flex';
let palabrasRecibidas = textareaEscribirId.value;
palabrasRecibidas.replace(" ", "");

}

function funcReiniciar() {
textareaEscribirId.value = "";
caracteresCalculados.textContent = "";
contadorId.style.display = "none";
}
