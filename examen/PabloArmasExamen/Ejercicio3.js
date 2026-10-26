"use strict";
/**
 *
 * @param {string} texto
 * @param {number} cantidad
 */
function eliminarBloques(texto, cantidad) {
  let arrayTexto = texto.split("");
  let haQuitado = false;
  for (let i = 0; i < arrayTexto.length; i++) {
    if (haQuitado) {
      i = 0;
      haQuitado = false;
    }
    if (cumpleCondicion(texto.slice(i, i + cantidad).split(""))) {
      arrayTexto.splice(i, cantidad);
      texto = arrayTexto.join("");
      haQuitado = true;
    }
  }
  return arrayTexto.join("");
}
function cumpleCondicion(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] !== undefined && array[i] !== array[i + 1]) {
      return false;
    }
  }
  return true;
}
module.exports = { eliminarBloques };
