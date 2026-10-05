/*Haz una función que calcule y devuelva el número de vocales en la 
cadena dada. Consideraremos a, e, i, o, u como vocales. La cadena de 
entrada sólo consta de letras minúsculas y/o espacios.*/
/**
 * @param {string} cadena
 */
function devuelveVocales(cadena){
    const valores = "aeiou";
    if (valores.includes(cadena)){
        return true;
    }
    
    return false;
}
console.log(devuelveVocales("rte"));