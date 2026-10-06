/*
3.  Haz una función  que como parámetro reciba un array de números y 
obtenga el número que menos repeticiones haya tenido. En caso de 
empate devuelve el número más pequeño. 
*/
/**
 * 
 * @param {Array} numeros 
 */
function devuelveNumeroMenosRepetido(numeros){
    let repeticiones = new Map();
    for (let i = 0 ; i < numeros.length; i++){
        if (!repeticiones.has(numeros.at(i))){
            repeticiones.set(numeros.at(i), 1);
        }else{
            repeticiones.set(i, repeticiones.get(i) + 1);
        }
    }
    let min = Infinity;
    let igualRepeticiones = Array();
    repeticiones.forEach((value) => {
        if (value < min){
            min = value;
            igualRepeticiones = Array();
        } else if (value === min){
            igualRepeticiones.push(value);
        }
    });
    if (igualRepeticiones.length === 0){
        return min;
    }
    let menor = igualRepeticiones.at(0);
    igualRepeticiones.forEach(element => {
        if (element < menor){
            menor = element;
        }
    });
    return menor;

}
console.log(devuelveNumeroMenosRepetido([2,2,1,1]));