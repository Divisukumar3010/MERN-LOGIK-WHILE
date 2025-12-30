const obj = {
  name: "Alice",
  age: 30,
  city: "New York",
  greet : () => {
    console.log("Hello, " + obj.name);
  }
};

obj.greet();