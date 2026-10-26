"use strict";
/**
 * 
 * @param {number} numero 
 */
function esCasiEscalonado(numero) {
  const arrayNumero = numero.toString().split("");
  if (arrayNumero.length === 1){
    return true;
  }
  let numEncontrados = 0;
  for (let i = 0 ; i < arrayNumero.length ; i++ ){
    if (arrayNumero[i] > arrayNumero[i+1]){
      numEncontrados++;
    }
    if (numEncontrados >= 2) {
      return false;
    }
  }
  return true;
}
module.exports = { esCasiEscalonado };
