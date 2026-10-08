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
  let valor1;
  let valor2;
  let valor3;
  let valor4;
  do {
    valor1 = Math.floor(Math.random() * (numero + 1));
    valor2 = Math.floor(Math.random() * (numero + 1));
    valor3 = Math.floor(Math.random() * (numero + 1));
    valor4 = Math.floor(Math.random() * (numero + 1));
  } while (
    numero !==
    valor1 * valor1 + valor2 * valor2 + valor3 * valor3 + valor4 * valor4
  );

  return [valor1, valor2, valor3, valor4];
}

console.log(devuelveCuatroNumerosLagrange(500));
