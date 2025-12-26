// callback example
function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}
function sayBye() {
    console.log('Bye!!');
}
greet('Sukumar', sayBye);

// -------------------------------------------
// callback example
function processedName(name, callback) {
    console.log('Hello ' + name);
    callback(name);
}
processedName('Sukumar', function(username) {
    console.log('Welcome, ' + username);
});
// ------------------------------------------------ PRIORITY BASED 
// ------------------------------------------- Asynchronous Programming 
console.log("Start")
setTimeout(() => {
    console.log("callback after 2 seconds")
}, 2000);
console.log("End")
// -------------------------------------------
console.log("Start")
setTimeout(() => {
    console.log("callback after 0 seconds")
}, 0);
console.log("End")
// -------------------------------------------
setTimeout(() => {
    console.log("callback after 0 seconds")
}, 0);
setTimeout(() => {
    console.log("callback after 2 seconds")
}, 1000);
// -------------------------------------------
setTimeout(() => {
    console.log("callback after 0 seconds")
}, 0);
console.log("Start")
setTimeout(() => {
    console.log("callback after 2 seconds")
}, 1000);
// ------------------------------------------- CallBack Hell -----------------------------------
console.log("Start")
setTimeout(() => {
  console.log("1st callback ")
  setTimeout(() => {
    console.log("2nd callback ")
    setTimeout(() => {
      console.log("3rd callback ")
      setTimeout(() => {
        console.log("4th callback ")
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
console.log("End")

// -------------------------------------------
function step1() {
  console.log("step-1 done");
  setTimeout(step2,1000);
}
function step2() {
  console.log("step-2 done");
  setTimeout(step3,1000);
}
function step3() {
  console.log("step-3 done");
  setTimeout(step4,1000);
}
function step4() {
  console.log("step-4 done");
  // setTimeout(step1,1000);
}
console.log("Start")
setTimeout(step1,1000);