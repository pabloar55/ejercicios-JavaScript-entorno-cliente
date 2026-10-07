/*
3.  Haz una función  que como parámetro reciba un array de números y 
obtenga el número que menos repeticiones haya tenido. En caso de 
empate devuelve el número más pequeño. 
*/
/**
 *
 * @param {Array} numeros
 */
function devuelveNumeroMenosRepetido(numeros) {
  let repeticiones = new Map();
  for (let i = 0; i < numeros.length; i++) {
    if (!repeticiones.has(numeros.at(i))) {
      repeticiones.set(numeros.at(i), 1);
    } else {
      repeticiones.set(numeros.at(i), repeticiones.get(numeros.at(i)) + 1);
    }
  }
  let min = Infinity;
  let clave;
  let igualRepeticiones = Array();
  repeticiones.forEach((value, key) => {
    if (value < min) {
      min = value;
      clave = key;
      igualRepeticiones = [key];
    } else if (value === min) {
      igualRepeticiones.push(key);
    }
  });
  if (igualRepeticiones.length === 0) {
    return clave;
  }
  let menor = igualRepeticiones.at(0);
  igualRepeticiones.forEach((element) => {
    if (element < menor) {
      menor = element;
    }
  });
  return menor;
}
console.log(
  "El número que menos repeticiones ha tenido es el " +
    devuelveNumeroMenosRepetido([2,  1, 3, 1]),
);
