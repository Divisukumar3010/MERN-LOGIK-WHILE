const obj = {
    name: "Alice",
    age: 30,
    city: "New York",
    greet: () => {
        console.log("Hello, " + obj.name);
    }
};
obj.greet();



const obj1 = '{"name":"Alice","age":30,"city":"New York"}';
const parsedObj = JSON.parse(obj1);
console.log(parsedObj.name);

const obj2 = { "name": "Alice", "age": 30, "city": "New York" };
const parsedObj1= JSON.stringify(obj2);
console.log(parsedObj1.name);

const fetchdata = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await res.json();
    console.log(data);
};
fetchdata();