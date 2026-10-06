/*Haz una función que calcule y devuelva el número de vocales en la 
cadena dada. Consideraremos a, e, i, o, u como vocales. La cadena de 
entrada sólo consta de letras minúsculas y/o espacios.*/
/**
 * @param {string} cadena
 */
function devuelveVocales(cadena){
    const regExp = /[aeiou]/g;
    const arrayCoincidencias = cadena.match(regExp);
    return arrayCoincidencias ? arrayCoincidencias.length : 0;
}
 // console.log(devuelveVocales("ppp"));
 // console.log(devuelveVocales("hola"));