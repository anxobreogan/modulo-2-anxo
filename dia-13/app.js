/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// console.log("Probando, probando, 1, 2, 3!");

/* let user = {
  name: "john Smith",
  age: 35
};

let user2 = JSON.parse(JSON.stringify(user));
 */

/* let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    /*console.log(`${key}:${value}`);*/
//return key != "" && value == meetup ? undefined : value;
//})
//); */

/* let a = 5;
let b = 6;

let x = a + b;

alert(x);
 */

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
//   script => {
//     console.log(`Cool, the ${script.src} is loaded`);
//     console.log(_); // function declared in the loaded script
//     console.log(_.chunk(["a", "b", "c", "d"], 2));
//     // => [['a', 'b'], ['c', 'd']]
//   }
// );

/* function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Script load error: " + src));

    document.head.append(script);
  });
}

let promise = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodsh.js/3.2.0/lodash.js"
);

promise.then(script => alert(`${script.src} is loaded!`));

promise.catch(script => alert(`${script.src} is error!`));
 */

/* function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(3000).then(() => alert("run after 3 seconds"));
 */

// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error("Script load error: " + src));

//     document.head.append(script);
//   });
// }

// loadScript("./one.js")
//   .then(function(script) {
//     return loadScript("./two.js");
//   })
//   .then(function(script) {
//     return loadScript("./three.js");
//   })
//   .then(function(script) {
//     // use functions declared in scripts
//     // to show that they indeed loaded
//     one();
//     two();
//     three();
//   });

// let num = 0;

// function comparar(num) {
//   let promise = new Promise(function(resolve, reject) {
//     if (num > 10) {
//       resolve(num);
//     } else {
//       reject(new Error("menor que 10"));
//     }
//   });

//   return promise;
// }

// comparar(num)
//   .then(res => console.log(res))
//   .catch(error => console.log(error));

//////////////////

// let arr = ["primera", "segunda", "tercera"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i].toUpperCase());
// }

function mayusculas(arr) {
  let result = arr.map(item => item.toUpperCase());
}

mayusculas(["una", "dos", "tres", "cuatro"]);

alert(mayusculas);
