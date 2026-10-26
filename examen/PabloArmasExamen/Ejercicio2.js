"use strict";
/**
 *
 * @param {Array} instrucciones
 */
function recorrerRobot(instrucciones) {
  let x = 0;
  let y = 0;
  let distanciaMaxima = 0;
  let arrayPrimeraRepetida = null;
  let mapaPosiciones = new Set();
  mapaPosiciones.add([0, 0]);
  instrucciones.forEach((element) => {
    const puntoCardenal = element.slice(0, 1);
    const numeroMovimientos = parseInt(element.slice(1, element.length));
    switch (puntoCardenal) {
      case "N":
        y += numeroMovimientos;
        break;
      case "S":
        y -= numeroMovimientos;
        break;
      case "E":
        x += numeroMovimientos;
        break;
      case "O":
        x -= numeroMovimientos;
        break;
    }
    mapaPosiciones.forEach(element => {
      
    });
    if (mapaPosiciones.has([x, y])) {
      arrayPrimeraRepetida = [x, y];
    } else {
      mapaPosiciones.add([x, y]);
    }

    if (Math.abs(x) + Math.abs(y) > distanciaMaxima) {
      distanciaMaxima = Math.abs(x) + Math.abs(y);
    }
  });
  return {x: x, y: y, distanciaMaxima: distanciaMaxima, primeraRepetida: arrayPrimeraRepetida};

  

}
 console.log(recorrerRobot(["N2", "E1", "S2", "O1"]));
   (module.exports = { recorrerRobot });
