// const obj = {
//   name: "Alice",
//   age: 30,
//   city: "New York",
//   greet : () => {
//     console.log("Hello, " + obj.name);
//   }
// };
// obj.greet();

const obj1 = '{"name":"Alice","age":30,"city":"New York"}';
const parsedObj = JSON.parse(obj1);
console.log(parsedObj.name);