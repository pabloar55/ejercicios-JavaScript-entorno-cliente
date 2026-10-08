/*10. Escriba  una función que tome un número decimal como entrada, y 
devuelva  el  número  de  bits  que  son  iguales  a  uno  en  la 
representación binaria de ese número. Comprueba que la entrada no 
sea negativa.  

La  representación  binaria de 1234 es 10011010010, por lo que la función 
debería devolver 5 en este caso. 

*/

/**
 *
 * @param {number} decimal
 */
function devuelveBinario(decimal) {
  let binario = "";
  for (let aux = decimal; aux > 0; aux = Math.trunc(aux / 2)) {
    binario = binario.concat(aux % 2);
  }
  return binario.split("").reverse().join("");
}

function cuentaUnos(decimal) {
  let binario = devuelveBinario(decimal);
  return binario
    .split("")
    .filter(i => i === "1").length;
}

console.log(cuentaUnos(1234));
