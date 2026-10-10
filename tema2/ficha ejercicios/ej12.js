/**
 * 12. Ejercicio colorear triángulo 
Un triángulo de color se crea a partir de una fila de colores, cada uno de los 
cuales es rojo, verde o azul. Las filas sucesivas, cada una con un color 
menos que la anterior, se generan considerando los dos colores que se 
tocan en la fila anterior.  
 
Si estos colores son idénticos, se utiliza el mismo color en la nueva fila. Si 
son diferentes, se utiliza el color que falta en la nueva fila. Así se continúa 
hasta que se genera la última fila, con un solo color. 
*/
/**
 * 
 * @param {string} cadena 
 */
function pintarColores(cadena) {

    console.log(cadena.split("").join(" "));
    let array = cadena.split("");
    let espacios = " ";
    while (array.length > 1) {

        let arrayNuevo = Array();

        for (let i = 0; i < array.length - 1; i++) {

            if ((array[i] === "R" && array[i + 1] == "G") || (array[i] === "G" && array[i + 1] == "R")) {
                arrayNuevo.push("B");
            } else if ((array[i] === "B" && array[i + 1] == "G") || (array[i] === "G" && array[i + 1] == "B")) {
                arrayNuevo.push("R");
            } else if ((array[i] === "B" && array[i + 1] == "R") || (array[i] === "R" && array[i + 1] == "B")) {
                arrayNuevo.push("G");
            } else if (array[i] == array[i + 1]) {
                arrayNuevo.push(array[i]);
            }

        }
        console.log(espacios + arrayNuevo.join(" "));
        array = arrayNuevo;
        espacios = espacios.concat(" ");
    }
    return "Color: " + array;
}

console.log(pintarColores("RGB"));