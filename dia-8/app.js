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
} while (valores != null && valores != "" && isFinite(valores)); typeof(valores)=="number"

function sumatorio() {
  let suma = 0;
  for (let numero of array) {
    // alert(numero);
    suma += numero;
  }
  return suma;
}

alert(sumatorio()); */

// let arr = [1, 2, 3, 4];
// function maxSum(arr) {
//   let actual = 0;
//   let maxima = 0;

//   for (let i = 0; i < arr.length; i++) {
//     actual = actual + arr[i];
//     console.log(actual);
//     if (actual < 0) {
//       maxima = 0;
//     } else if (actual > maxima) {
//       maxima = actual;
//     }
//   }

//   return maxima;
// }

// alert(maxSum([-1, 2, 3, -9]));
// alert(maxSum([5, 3, 2]));

// let arr = [1, 2, 3, 4];
// let maxima = 0;
// let actual = 0;

// for (i = 0; i < arr.length; i++) {
//   actual = actual + arr[i];

//   if (actual < 0) {

//   }
// }

/* class Calculadora {
  constructor(numero1, numero2) {
    this.numero1 = numero1;
    this.numero2 = numero2;
  }

  suma() {
    return this.numero1 + this.numero2;
  }

  resta() {
    return this.numero1 - this.numero2;
  }
}

let resultado = new Calculadora(5, 2);
alert(resultado.resta()); */

class Persona {
  constructor(nombre, edad, sexo, dni, parejade) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.dni = dni;
    this.parejade = parejade;
  }

  static nam(min1) {
    let b = min1.nombre.toLowerCase();
    return b;
  }

  static cada(per1, per2) {
    let pareja = "";
    if (per1.nombre === per2.parejade) {
      pareja = "son pareja";
    } else {
      pareja = "no son pareja";
    }
    return pareja;
  }
}

let p1 = new Persona("MARIA", 18, "Femenino", 123456, "PAco");

let p2 = new Persona("PAco", 25, "Masculino", 234567, "MAria");

console.log(p1);
console.log(p2);
console.log(Persona.nam(p1));
console.log(Persona.cada(p1, p2));

/* str = "HOLA AMAPOLA";

strmin = str.toLowerCase();

console.log(strmin); */

// console.log(resultado);
// console.log(resultado2);
// comparar();

////PALÍNDROMOS

// let str = "reconocer";

// let longitudStr = str.length;

// let shiftStr = "";

// while (longitudStr >= 0) {
//   // console.log(str[x]);
//   shiftStr = shiftStr + str.charAt(longitudStr);
//   longitudCadena--;
// }
// if (shiftCadena === str) {
//   alert("son palindromos");
// } else {
//   alert("no son palíndormos");
// }

// alert(lonStr);

/* function palindromos(str) {
  let str = "";
  // alert(str);
  let lonStr = str.length;
  let shiftStr = "";
  while (lonStr >= 0) {
    // console.log(str[lonStr]);
    shiftStr = shiftStr + str.charAt(lonStr);

    lonStr--;
  }
  // console.log(shiftStr);

  if (shiftStr == str) {
    // console.log("son palindromos");
  }
}

palindromos("reconocer"); */
