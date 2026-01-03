// "use strict";
console.log(this); // In global context, 'this' refers to the global object (window in browsers)

function greet() {
  console.log(this); // In a regular function, 'this' refers to the global object (undefined in strict mode)
}
greet();

const arrow = () => {
  console.log(this); // In an arrow function, 'this' refers to the surrounding lexical context (global object here)
}
const obj = {
  name: 'Alice',
  greet: function () {
    console.log(this.name); // 'this' refers to the object 'obj'
  },
};
obj.greet();


function add(a, a, b) {
  const output = a + a + b;
  console.log(output);
}
add(1, 2, 3); // Outputs 6 because 'a' is duplicated and takes the last value (2)

//  ------------------------------ Call Method ------------------------------
function greet1(greeting, message) {
  console.log(`${greeting} ${this.name}, ${message}`);
}
let person1 = { name: 'John' };
greet1.call(person1, "hello", "How are you!!"); // 'this' refers to 'person1' object

// ------------------------------ Apply Method ------------------------------
function greet2(greeting, message) {
  console.log(`${greeting} ${this.name}, ${message}`);
}
greet2.apply(person1, ["Hi", "Welcome to Logic While!"]); // 'this' refers to 'person1' object

//  ---------------------------- Bind Method (returns a function) --------------------------------
function greet3(greeting, message) {
  console.log(`${greeting} ${this.name}, ${message}`);
}
let bindGreet = greet3.bind(person1);
bindGreet("Hey", "Good to see you!"); // 'this' refers to 'person1' object