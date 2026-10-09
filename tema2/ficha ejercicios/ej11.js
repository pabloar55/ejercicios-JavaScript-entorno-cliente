/*11. El teorema de los cuatro cuadrados de Lagrange, también conocido 
como  conjetura  de  Bachet, afirma que todo número natural puede 
representarse como la suma de cuatro cuadrados enteros.

Haz una función que devuelva un array con los cuatro números naturales 
que cumplan el teorema dado un número natural pasado como argumento.

*/
/**
 *
 * @param {number} numero
 */
function devuelveCuatroNumerosLagrange(numero) {
  let arrayResultado = Array();
  let valorActual = 0;
  for (numero; arrayResultado.length <= 3; numero -= valorActual * valorActual) {
    valorActual = 0;
    for (valorActual; valorActual <= numero; valorActual++) {
      if (valorActual * valorActual > numero) {
        valorActual--;
        arrayResultado.push(valorActual);
        break;
      }
      if (valorActual * valorActual === numero) {
        arrayResultado.push(valorActual);
        break;
      }
    }
  }
  return arrayResultado;
}

console.log(devuelveCuatroNumerosLagrange(30));
