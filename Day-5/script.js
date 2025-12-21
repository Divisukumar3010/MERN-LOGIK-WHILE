console.log(a);
let a = 10;

console.log( 10 == 10)
console.log( 10 == '10')
console.log(10=== '10')
console.log('10' === '10')


let age = prompt("Enter age...: ")
let isStudent = prompt("Enter yes / no ....")

if(age<=8){
    console.log("Ticket price is 10$")
}else if(age>8 && age <18){
    console.log("Ticket price is 20$")
}else if(isStudent === 'yes'){
    if (age>=18 && age<24){
        console.log("Ticket price is 25$")
    }
    else{
        console.log("Ticket price is 30$")
    }
}else if(age>=18 && age<24){
    console.log("Ticket price is 30$")
}else{
    console.log("Ticket price is 50$")
}
// --------------------------------------------------------
let num = prompt("Enter number...: ")

if (num === 0) {
  console.log("Number is zero");
}
else if (num > 0) {
  console.log("Number is positive");
}
else if (num < 0) {
  console.log("Number is negative");
}
else if( num % 2 === 0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}
// --------------------------------------------------------
let num1 = prompt("Enter number...: ")

if (num1 == 0) {
  console.log("Number is zero");
}
else if (num1 > 0 && num1 %2==0) {
  console.log("Number is Even positive");
}
else if (num1 > 0 && num1 %2!=0) {
  console.log("Number is Odd positive");
}
else if (num1 < 0 && num1 %2 ==0) {
  console.log("Number is Even negative");
}
else{
  console.log("Number is Odd negative");
}
// --------------------------------------------------------
for(let n=1;n<=50;n++){
    console.log(n)
}
// --------------------------------------------------------
// ---------------------- Fizz Buzz
for(let num=1;num<=50;num++){
    if(num%3==0 && num%5==0){
        console.log("Fizz Buzz")
        continue
    }
    else if(num%5==0){
        console.log("Buzz")
        continue
    }
    else if(num%3==0){
        console.log("Fizz")
        continue
    }
    else{
        console.log(num)
    }
}

// ---------------------------------------------- Problems ------------------------------------------------
// --------------------------------------- Run in online compiler ------------------------------------------
// 1.Count Digits in a Number

// Problem:
// Given a number n, find how many digits it contains.

// Example:
// Input: 45872
// Output: 5

let number = prompt("Enter number.......:  ")
let length = number.toString().length

console.log(length)


// 2. Reverse a Number

// Problem:
// Given a number n, reverse it.

// Example:
// Input: 1234
// Output: 4321
let number1 = prompt("Enter number.......:  ")
let reversed = 0
while(number1!=0){
    let digit = number1 % 10
    reversed = reversed * 10 + digit
    number1 = Math.floor(number1/10)
}
console.log(reversed)



// 3.Find the Sum of Even Numbers

// Problem:
// Given a number n, find the sum of all even numbers from 1 to n.

// Example:
// Input: 10
// Output: 30
// (2 + 4 + 6 + 8 + 10)
let n = prompt("Enter number.......:  ")
let sum = 0
for(let i=1;i<=n;i++){
    if(i%2==0){
        sum += i
  }
}
console.log(sum)


// 4.Check Prime Number

// Problem:
// Given a number n, check whether it is a prime number or not.

// Example:
// Input: 7
// Output: Prime

// Input: 9
// Output: Not Prime
let num2 = prompt("Enter number.......:  ")
let isPrime = true
for(let i=2;i<=Math.sqrt(num2);i++){
    if(num2 % i == 0){
        isPrime = false
        break
  }
}

if(isPrime){
    console.log("Prime")
}else{
    console.log("Not Prime")
}

// 5.Print a Number Pattern

// Problem:
// Given a number n, print the following pattern:

// Input: 4
// Output:

// 1
// 12
// 123
// 1234
let n1 = prompt("Enter number.......:  ")
for(let i=1;i<=n1;i++){
    let pattern = ""
    for(let j=1;j<=i;j++){
        pattern += j
    }
    console.log(pattern)
}