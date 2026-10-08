/*
9.  Haz  una  función  que  pueda  tomar  cualquier  número  entero  no 
negativo  como  argumento  y  devolverlo  con  sus  dígitos  en  orden 
descendente.  Esencialmente,  reordenar  los  dígitos  para  crear  el 
mayor número posible. 
 
Entrada: 42145 Salida: 54421 
 
Entrada: 145263 Salida: 654321 
 
Entrada: 123456789 Salida: 987654321 
*/

/**
 * 
 * @param {number} numero 
 */
function devuelveMayor(numero) {
    let resultado = "";
    for (let i = 9; i >= 0; i--) {
        for (let aux = numero; aux > 0; aux = Math.trunc(aux / 10)) {
            if (aux % 10 === i) {
                resultado = resultado.concat(aux % 10);
            }
        }
    }
    return resultado;
}

/**
 * 
 * @param {number} numero 
 */
function devuelveMayorFacil(numero) {
    return numero.toString().split("").sort().reverse().join("");
}


console.log(devuelveMayor(42145));
console.log(devuelveMayor(145263));
console.log(devuelveMayor(123456789));

console.log(devuelveMayorFacil(42145));
console.log(devuelveMayorFacil(145263));
console.log(devuelveMayorFacil(123456789));