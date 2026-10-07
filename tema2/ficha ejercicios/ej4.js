/*Dada un array de enteros, encuentra todo los números que aparecen 
un número impar de veces.*/
/**
 *
 * @param {Array} array
 */
function devuelveAparicionesImpares(array) {
  let mapa = new Map();
  array.forEach((element) => {
    if (!mapa.has(element)) {
      mapa.set(element, 1);
    }else{
        mapa.set(element, mapa.get(element) + 1 );
    }
  });
  let impares = Array();
  mapa.forEach((value, key) => {
    if (value%2===1){
        impares.push(key);
    }
  });
  return impares;
}
console.log(devuelveAparicionesImpares([4,2,4, 3, 4, 3]));
