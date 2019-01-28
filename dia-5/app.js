/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/*() => alert("you agreed"), () => alert("you desagre");*/

// let user={

//     user.name:"jhon"

// }

// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }

//  posible cambiar un objeto declarado con const..creo que si

// let salaries = {
//   jhon: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = salaries.jhon + salaries.Ann + salaries.Pete;

// let sum = 0;
// for (key in salaries) {
//   sum += salaries[key]; /// para recorrer con parantesis,es salaries, mi objeto y luego mis propiedades con key
// }
// console.log(sum);

// alert(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

for (key in menu) {
  // alert(typeof menu[key]);
  if (typeof menu[key] == "number") {
    alert(menu[key] * 2);
  }
}
