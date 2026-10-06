/*2.  Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los 
códigos  PIN  no  pueden  contener  más que exactamente 4 dígitos o 
exactamente 6 dígitos. Si a la función se le pasa una cadena de PIN 
válida, devuelve true, de lo contrario devuelve false.*/
/**
 * 
 * @param {string} pin 
 */
function compruebaPIN(pin){
    if (pin.length === 4 || pin.length === 6){
        return true;
    }
    return false;
}

// console.log(compruebaPIN("asdeee"))