"use strict";
const assert = require("assert");
const { esCasiEscalonado } = require("./Ejercicio1");
const { recorrerRobot } = require("./Ejercicio2");
const { eliminarBloques } = require("./Ejercicio3");

let correctas = 0;
let totales = 0;
function probar(nombre, funcion) {
  totales++;
  try { funcion(); correctas++; console.log(`OK  ${nombre}`); }
  catch (error) { console.log(`FAIL ${nombre}\n     ${error.message}`); }
}

probar("E1 - puede eliminar una cifra intermedia", () => assert.strictEqual(esCasiEscalonado(1324), true));
probar("E1 - número imposible", () => assert.strictEqual(esCasiEscalonado(4432), false));
probar("E1 - número ya escalonado", () => assert.strictEqual(esCasiEscalonado(1234), true));

probar("E2 - recorrido sin repetición", () => assert.deepStrictEqual(
  recorrerRobot(["N2", "E3", "S1"]),
  { x: 3, y: 1, distanciaMaxima: 5, primeraRepetida: null }
));
probar("E2 - regreso al origen", () => assert.deepStrictEqual(
  recorrerRobot(["N2", "E1", "S2", "O1"]),
  { x: 0, y: 0, distanciaMaxima: 3, primeraRepetida: [0, 0] }
));

probar("E3 - eliminación completa", () => assert.strictEqual(eliminarBloques("aaabbb", 3), ""));
probar("E3 - eliminaciones encadenadas", () => assert.strictEqual(eliminarBloques("deeedbbcccbdaa", 3), "aa"));
probar("E3 - bloque mayor que la cantidad", () => assert.strictEqual(eliminarBloques("aabbbaa", 3), "a"));

console.log(`\nResultado de las pruebas públicas: ${correctas}/${totales}`);
if (correctas !== totales) process.exitCode = 1;
