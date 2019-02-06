/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// console.log("Probando, probando, 1, 2, 3!");

// let str = "back-ground";

// // console.log(str);

// let arr = str.split("-");

// // let arr2 = arr.join("");
// arr.map((item, index) => {
//   //   console.log(item);
//   if (index > 0) {
//     // console.log("10");
//     // console.log(index);

//     let arr4 = item.toUpperCase();
//     let primeraLetra = arr4.charAt(0);

//     console.log(primeraLetra + item.slice(1));
//   }
// });

// // let arr5 = arr.join("");
// alert(arr);
// for (let name of arr) {
//   alert(``);
// }

// // console.log(arr);
// // console.log(arr2);

// function camelize(str) {
//   let arr = str.split("-");
//   let result = arr.map(function(item, index, array) {
//     if (index > 0) {
//       return item.charAt(0).toUpperCase() + item.slice(1);
//     } else {
//       return item;
//     }
//   });
//   result = result.join("");
//   return result;
// }

// alert(camelize("cara-de-sapo"));

// function filterRange(a, b, arr) {
//   let result = arr.map(a, b, arr);
// }

let arr = [5, 3, 8, 1];

alert(arr.splice(1, 4));
