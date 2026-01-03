// //-------------- Clousure ----------------
// function outer() {
//   let count = 0; // hoisted at here
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// const counter = outer();
// counter();
// counter();

//  ----------------------------------------
function secretHolder() {
  let secret = "Hidden!";
  return {
    getSecret: () => secret,
    setSecret: (val) => {
      secret = val;
    }
  }
}
const x = secretHolder();
console.log(x.getSecret());
x.setSecret("New Secret");
console.log(x.getSecret());