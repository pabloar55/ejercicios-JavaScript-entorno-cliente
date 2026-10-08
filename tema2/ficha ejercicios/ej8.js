/*
8.  Implementa  una  función  de  diferencia,  que  devuelva  un  array  que 
tenga  todos  los  valores  de  la  lista  pasada  como  primer parámetro 
que  no  están  presentes  en  la  lista  b  manteniendo  su  orden.  Si un 
valor está presente en b, todas sus apariciones deben ser eliminadas 
de la otra: 
 
arrayDiff([1,2],[1]) == [2] 
arrayDiff([1,2,2,2,3],[2]) == [1,3] 

*/

/**
 * 
 * @param {Array} array1 
 * @param {Array} array2 
 */
function arrayDiff(array1, array2){
   for (let i = 0 ; i< array2.length; i++) {
        for (let j = 0 ; j < array1.length; j++){
            if (array2.at(i) === array1.at(j)){
                array1.splice(j, 1);
                j--;
            }
        }
    }
    return array1;
}

console.log(arrayDiff([1,2], [1]));
console.log(arrayDiff([1,2,2,2,3,2],[2, 3])); 