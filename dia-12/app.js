/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// console.log("Probando, probando, 1, 2, 3!");

/* let arr = [1, 2, 2, 3, 4, 4];

let set = new Set(arr);

alert(set.size);
/* 
for (let value of set) {
} */

/* console.log(set);
 */

//////

// function aclean(arr) {
//   let map = new Map();

//   for (let ff of map) {
//     let minusculas = ff
//       .toLowerCase()
//       .split("")
//       .sort()
//       .join("");

//     map.set(ff, minusculas);
//     console.log(map);
//   }

//   return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean());

//////////////

/* et map = new Map();

map.set("name", "John");

let keys = map.keys();

keys.push("more");
 */

////////////////////////////////////////////////////////////////////
// let arr = [5, 3, 8, 1];

// function filtro(arr, a, b) {
//   for (i = 0; i < arr.length; i++) {
//     let recorrido = arr[i];

//     console.log(arr[i]);

//     if (a <= arr[i] || b >= arr[i]) {
//       recorrido.splite(i, 1);
//       i--;
//     }
//   }
// }

/////////////////////////////////////////////////////////

// let arr = [5, 2, 1, -10, 8];

// alert(arr.sort().reverse());

///////////////////////////////////////////////////////////////

// let arr = ["HTML", "JavaScript", "CSS"];

// let newArr = Array.from(arr).sort();

// console.log(newArr);

////////////////////////////////////////////////////////////////

// let john = { name: "John", age: 25 };
// let pete = { name: "pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];
// let edad = [25, 30, 28];

// let names = users.map(tu => tu.name);

// let fff = edad.map(tu => tu.edad);

// /* Arrow function ... */

// console.log(names);
// console.log(edad);

/////////////////////////////////
/* function pepe() {
  let salaries = {
    john: 100,
    pete: 300,
    mary: 250
  };

  let suma = 0;

  for (let key of Object.values(salaries)) {
    suma += key;
  }
  return suma;
}
alert(suma); */

///ejercicio count..

/* let user = {
  name: "john",
  age: 30
};

let a = 0;
for (let keys of Object.values(user)) {
  //   a = a + 1;
  a++;
}

console.log(a);
 */

///////////////////////////////////////////////////////

// let user = {
//   name: "john",
//   years: 30
// };

// let { name, years: age, isdamin = false } = user;

// function suma(a = 2, b = 5) {
//   return a + b;
// }

// suma(5, 1);

///////////////////////////////////////////////

// let salaries = {
//   john: 100,
//   pete: 300,
//   mary: 250
// };

// let max = 0;
// let maxName = null;

// for (let [name, salary] of Object.defineProperties(salaries)) {
//   if (max < salary) {
//     max = salary;
//     maxName = name;
//   }
// }

////////////////////////////////////////////////////////

// let fecha = new Date(2012, 1, 20, 3, 12);

// alert(fecha);

//////////////////////////////////////////////////////////////

/* let dia = ["su", "mo", "tu", "we", "th", "fr", "sa"];

let fecha = new Date(2012, 0, 3);

alert(dia[fecha.getDay()]); */

/////////////////////////////////////////////////////////////////
/* function getEuropeanDate(date) {
  let date = new Date();

  let arr = [
    "noday",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado",
    "domingo"
  ];

  return arr[date.getDate()];
}

alert(getEuropeanDate((2015, 2, 6))); */

////////////////////////////////////////////////////////////

/* let date = new Date();

// alert(date);

let day = 2;
alert(date.getDate() - day);
alert(date.getFullYear() - day);
// alert(date.getMonth() - day);
// alert(date.getMonth() - 3);
date.setDate(date.getMonth() - day);
alert(date.getMonth()); */

///////////////////////////////////////////////////////

// let date = new Date(2019, 1, 4);
// let dateNow = new Date();

// console.log(date.getHours());
// console.log(dateNow.getHours() - date.getHours());

//////////////////////////////////////////////////////////////////

// function horasMañana() {
//   let date = new Date();

//   // alert(date.getHours());

//   let b = 24 - date.getHours();

//   return b;
// }

// alert(horasMañana(2019, 1, 4));


