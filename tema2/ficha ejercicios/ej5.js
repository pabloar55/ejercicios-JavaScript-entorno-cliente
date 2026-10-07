/*
5.  Implementar  la  función  que  toma  como  argumento  una  array  de 
enteros  o  string,  pueden  ser  híbrido,  y  devuelve  una  array  de 
elementos  sin  ningún  elemento  repetido  y  preservando  el  orden 
original de los elementos.
*/

/**
 * 
 * @param {Array} array 
 */
function quitarRepetidos(array)
{
    let set = new Set();
    array.forEach(element => {
        if (!set.has(element)){
            set.add(element);
        }
    });
    return [...set];
}

console.log(quitarRepetidos([2,1,1,"e", "e", "a", 2, 4]));