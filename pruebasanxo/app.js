/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/*console.log("Probando, probando, 1, 2, 3!");*/

// outer: for (i = 2; i <= 10; i++) {
//   for (j = 2; j < i; j++) {
//     if (i % j == 0) continue outer;

//     // console.log(i);
//   }
//   alert(i);
// }

// let n = 10;

// nextPrime: for (let i = 2; i <= n; i++) {
//   // for each i...

//   for (let j = 2; j < i; j++) {
//     // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   alert(i); // a prime
// }

// let browser = prompt("Introduce nombre de navegador", 1);

// if (browser == "Edge") {
//   alert("You`ve got the Edge");
// } else if (browser == "Chrome" || browser == "Safari" || browser == "Opera") {
//   alert("Okay I`m support this!!");
// } else {
//   alert(`I hope that this page looks ok!!`);
// }

// let a = +prompt(`a?`, ``);

// switch (a) {
//   case 0:
//     alert(0);
//     break;

//   case 1:
//     alert(1);
//     break;

//   case 2:
//   case 3:
//     alert(`2,3`);

//   default:
//     alert("la liaste");
//     break;
// }

// let edadMinima = +prompt("Introduce edad para conducir", 0); //Introducir números, edad del chaval.
// if (edadMinima != NaN) {
//   alert("No has introducido un número");
// } else if (edadMinima < 18) {
//   alert("No puedes conducir");
// } else if (edadMinima => 18) {
//   alert("Si puedes conducir");
// }

// age = prompt("tienes edad??", 0);
// function chekAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Tienes permiso??");
//   }
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("did pare");
// }

// let a = prompt("introduce a ", 0);

// let b = prompt("introduce b ", 0);

// function min(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

let x = prompt("introduce x ", 0);

let n = prompt("introduce n ", 0);

let resultado;

function pow(x, n) {
  for (n = 1; x < n; n++) {
    resultado = x * x;

    return x;
  }
}

console.log(pow(5, 2));
