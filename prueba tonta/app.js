/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/* console.log("Probando, probando, 1, 2, 3!"); */

let user = {
  name: "john",
  age: 30
};

for (let key in user) {
  alert(user[key]);
}

user.sayHi = function() {
  alert("helo");
};

/* user.sayHi(); */
