const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//* La letra "e" es convertida para "enter"
//* La letra "i" es convertida para "imes"
//* La letra "a" es convertida para "ai"
//* La letra "o" es convertida para "ober"
//* La letra "u" es convertida para "ufat"

function btnEncriptar() {
  const textoEncriptado = encriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  mostrarBtn();
  ocultarTxt1();
  ocultarTxt2();

  if (window.innerWidth < 480) {
    mensaje.focus();
  }
}

function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoEncriptado = desencriptar(textArea.value);
  mensaje.value = textoEncriptado;
  textArea.value = "";

  if (window.innerWidth < 480) {
    mensaje.focus();
  }
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

var visible = document.getElementsByClassName("btn-copiar")[0];

function mostrarBtn() {
  visible.style.display = "flex";
}

var nmInvisible = document.getElementsByClassName("ningun-mensaje")[0];

function ocultarTxt1() {
  nmInvisible.style.display = "none";
}

var itInvisible = document.getElementsByClassName("ingrese-texto")[0];

function ocultarTxt2() {
  itInvisible.style.display = "none";
}

function btnCopiar() {
  var mensaje = document.getElementsByClassName("mensaje")[0];
  var textarea = document.getElementsByClassName("text-area")[0];

  textarea.value = mensaje.value;

  mensaje.value = "";

  if (window.innerWidth < 480) {
    textArea.focus();
  }
}

function validarTexto(textarea) {
  const inputValue = textarea.value;
  const regex = /^[a-z\s]*$/i;
  const isValid = regex.test(inputValue);

  if (!isValid) {
    alert(
      "¡Recuerda que solo se permiten letras minúsculas, sin acentos ni otros caraccteres especiales!"
    );
    textarea.value = inputValue.replace(/[^a-z\s]/gi, "");
  }
}
