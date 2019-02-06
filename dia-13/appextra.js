/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// console.log("Probando, probando, 1, 2, 3!");

/*
*
* crear una función,
numero >10
*
*crear una promesa que si el numero es mayor que diez se resuelva
y si no
**
**llamar a la funcion y coger los datos o controlar los errores
**
***
*/

let num = 0;

function comparar(num) {
  let promise = new Promise(function(resolve, reject) {
    if (num > 10) {
      return 9;
    }
  });
}

alert(comparar(50));
