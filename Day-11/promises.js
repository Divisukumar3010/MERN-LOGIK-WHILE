// -------------------------------------- promises - Synchronised code execution
const checkAge = new Promise((resolve, reject) => {
  const age = 20;
  if (age >= 18) {
    resolve("Access granted..");
  }
  else {
    reject("Access denied..");
  }
});
checkAge.then((message) => {
  console.log(message)
})
.catch((message) => {
  console.log(message)
});

// -------------------------------------- promises - Asynchronised code execution
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("data fetched successfully✅");
      }
      else {
        reject("data fetch failed❌");
      }
    }, 2000);
  })
}
fetchData().then((data) => console.log(data))
  .catch((error) => console.log(error));

// -------------------------------------- Promise chaining
function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step-1 done");
      resolve("step-1 done");
    }, 1000);
  });
}
function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step-2 done");
      resolve("step-2 done");
    }, 1000);
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step-3 done");
      resolve("step-3 done");
    }, 1000);
  });
}
function step4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("step-4 done");
      resolve("step-4 done");
    }, 1000);
  });
}
step1().then(()=> step2()).then(()=>step3()).then(()=>step4())
console.log("All steps Completed✅");

// ----------------------------  Callback hell example recreation using Promises

function WaitAndLog(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    },delay)
  })
}
console.log("Start")
WaitAndLog("1st step done ✅", 1000)
  .then(() => WaitAndLog("2nd step done ✅", 1000))
  .then(() => WaitAndLog("3rd step done ✅", 1000))
  .then(() => WaitAndLog("4th step done ✅", 1000))
  .then(() => console.log("End"))  