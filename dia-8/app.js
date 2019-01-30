/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/* console.log("Probando, probando, 1, 2, 3!");
 */

/* let ucFirst("jhon")=="jhon";

 function pepe(){

    if (!str) retrun str;

    retrun str

 } */

/* function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes(`viagra`) || lowerStr.includes(`xxx`);

  alert(checkSpam(`buy Viagra now`));
} */

// crea la funcion.
// verificar la longitud.
// si es mayor que maxlength reemplaza.

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + "....";
//   } else {
//     return str;
//   }
// }

// let pepe = truncate("hola amapola ", 100);
// alert(pepe);

//primero leer la cadena.
//extraer valores numericos.

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

/* alert("kjhdfkjakjf");

let styles = ["Jazz", "Blues"];
styles.push("Rock-nRoll");

styles[1] = "classics";

styles.shift();

styles.unshift("rap", "reggae");

alert(styles[0]);
alert(styles[1]);
alert(styles[2]);
alert(styles[3]); */

/* let array = [];
 Do{
  let valores = prompt("Valores a introducir en el array", 0);

  array.push(+valores);
}while ((valores = "" || valores == null))
 */

/* let array = [];

do {
  let valores = prompt("Valores a introducir en el array", 0);

  // array.push(+valores);
} while (valores != "" || valores != null); */
/* let valores;
do {
  valores = prompt("valores a ingresar", 0);

  alert(typeof valores);
  alert(valores);
} while ((valores = !"")); */
/* 
let array = [];
let valores;
do {
  valores = prompt("introduce valores", 0);
  if (isFinite(valores)) {
    array.push(+valores);
  }
} while (valores != null && valores != "" && isFinite(valores));

function sumatorio() {
  let suma = 0;
  for (let numero of array) {
    // alert(numero);
    suma += numero;
  }
  return suma;
}

alert(sumatorio()); */

/* arr = [1, 2, 3, 4, 11, 0, 25];

for (let i = 0; i < arr.length; i++) {
  let sumaj = 0;
  for (j = i; j < arr.length; j++) {
    sumaj += arr[j];
  }

  console.log(sumaj);
} */

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < i; j++) {
    alert(i);
  }
}
