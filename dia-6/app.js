/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

// console.log("Probando, probando, 1, 2, 3!");

// let user = {
//   name: "John",
//   go: function() {
//     alert(this.name);
//   }
// };
// user.go();

// let obj, method;

// obj = {
//   go: function() {
//     alert(this);
//   }
// };

// obj.go();
// obj.go();

// (method = obj.go)(); //perdemos el this por asignarlo a una variable.
// (obj.go || obj.stop)();

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// alert(user.ref().name); //

// let a;
// let b;

// let calculator = {
//   a: 0,
//   b: 0,

//   read() {
//     this.a = +prompt("valor a", 0);
//     this.b = +prompt("valor b", 0);
//   },

//   sum() {
//     return this.a + this.b;
//   },

//   null() {
//     return this.a * this.b;
//   }
// };

// calcualtor.read();
// alert(calculator.sum());
// alert(calculator.null());

// let adder={
//   step:0,
//   up(){
//     this.step++;
//   }
// },
// down(){
//   this.step--;
// },

// showStep:function (){
//   alert(this.step)
// }

// le paso funcion de saludar y le pases un parametro a quien quieres saludar

// Para poder saludar, el nombre tiene que tener una a

// let name;
// let saludar;

// function Objetosaludo(name, saludar) {
//   for (key in Objetosaludo) {
//     this.name = name;
//     this.saludar = saludar;
//     console.log()
//     console.log(saludar + " " + name);
//   }
// }

// function Objetosaludo(name, saludar) {
//   (this.name = name), (this.saludar = saludar);
// }

// let objetosaludo = new obejetosaludo(name);

// function saludar() {
//   return alert("hola" + this.name);
// }

// Objetosaludo("anxo", "hola");

// function saludo(name) {
//   alert("hola " + name);
// }

// function User(func, name) {
//   this.name = name;
//   this.sayHi = func;
// } ///esta es la función constructora.

// let name = new User(saludo); //Creas una  variable para ejecutar la función.

// name.sayHi("anxo");

// function saludo2() {
//   return alert("hola amapola");
// }

// console.log(saludo2());
// let value;

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt("how much add", 0);
//   };
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator, value);

// function Clock({ template }) {
//   this._template = template;
// }

// Clock.prototype._render = function() {
//   let date = new Date();

//   let hours = date.getHours();
//   if (hours < 10) hours = "0" + hours;

//   let mins = date.getMinutes();
//   if (mins < 10) mins = "0" + mins;

//   let secs = date.getSeconds();
//   if (secs < 10) secs = "0" + secs;

//   let output = this._template
//     .replace("h", hours)
//     .replace("m", mins)
//     .replace("s", secs);

//   console.log(output);
//};
//// Convertirr a  clases---

/* class Clock {
  constructor(template) {
    this._template = template;
  }

  _render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  //////////

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  }

  ////
  // Clock.prototype.stop = function() {
  //   clearInterval(this._timer);
  // };

  // Clock.prototype.start = function() {
  //   this._render();
  //   this._timer = setInterval(() => this._render(), 1000);
}

let clock = new Clock({ template: "h:m:s" });
clock.start();
 */

/////

class Clock {
  constructor({ template }) {
    this._template = template;
  }

  _render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this._timer);
  }

  start() {
    this._render();
    this._timer = setInterval(() => this._render(), 1000);
  }
}

class ExtendClock extends Clock {
  constructor() {}
}
