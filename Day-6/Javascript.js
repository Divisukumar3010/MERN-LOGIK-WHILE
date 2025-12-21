const a = 10
const b = 20
const c = 30
function add() {
  const sum = Number(a) + Number(b) + Number(c);
  console.log("The sum is: " + sum);
}
add();
console.log("-----------------------")
"use strict";
function add1(a,b,c) {
  const sum = Number(a) + Number(b) + Number(c);
  console.log("The sum is: " + sum);
}
add1(1, 2, 3);

console.log("-----------------------")
// ------------------------------- forEach loop --------------------------------
const arr = [11,22,33,44,55,66]

arr.forEach(element => {
  console.log(element);
});

console.log("-----------------------")
// -------------------------------- map function --------------------------------
const newArr = [11,22,33,44,55,66]

newArr.map(element => {
  console.log(element*2);
});
console.log("-----------------------")
// -------------------------------- filter method -------------------------------
const myArr = [12, 23, 45, 56, 78, 89, 120]

const filteredArr = myArr.filter(element => {
  return element%2==0;
})
console.log(filteredArr);
console.log("-----------------------")
// ---  --------------------------- reduce method -------------------------------
const anotherArr = [1, 2, 3, 4]
const reducedVal = anotherArr.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue
}, 0)
console.log(reducedVal);