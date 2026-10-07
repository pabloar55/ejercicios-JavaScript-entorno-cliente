/*
6.  Escribe una función que tome un parámetro positivo num y devuelva 
su persistencia multiplicativa, que es el número de veces que debes 
multiplicar los dígitos de num hasta llegar a un solo dígito. 

Por ejemplo (Entrada --> Salida): 
39 --> 3 (porque 3*9 = 27, 2*7 = 14, 1*4 = 4 y el 4 sólo tiene un dígito) 
999 --> 4 (porque 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, y finalmente 1*2 = 
2) 
4 --> 0 (porque el 4 ya es un número de un dígito)
*/

function devuelvePersisenciaMultiplicativa(num) {

  if (typeof num !== "number" || num < 0) {
    return "entrada inválida";
  }

  if (num < 10) {
    return 0;
  }
  let contador = 0;
  while (num >= 10) {
    let copia = num;
    let res = 1;

    while (copia > 0) {
      res *= copia % 10;
      copia = Math.trunc(copia / 10);
    }

    num = res;
    contador++;
  }
  return contador;

}
console.log(devuelvePersisenciaMultiplicativa(999));
