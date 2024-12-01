/*
1: Basic Closure
Create a function greet that takes a name as a parameter and returns a function. 
The returned function should greet the person by name when called.
*/

function callName() {
  let message = "";
  function sayHello(str) {
    message = "Hello " + str;
    return message;
  }

  return sayHello;
}

let myFunc = callName();
console.log(myFunc("Elgun"));
console.log(myFunc("Ahmet"));

/*
2: Closure to Create a Counter
Write a closure function createCounter that returns a function.
Every time the returned function is called, it should increment a counter and return the updated value.
*/

function createCounter() {
  let count = 0;
  function increment() {
    return count++;
  }
  return increment;
}

myFunc_2 = createCounter();
console.log(myFunc_2());
console.log(myFunc_2());
console.log(myFunc_2());

/*
3: Closure with Parameters
Create a closure that accepts an initial value and then allows for an arbitrary number of subsequent value multiplications.
*/

function calculator() {
  let num = 2;

  function multiply(value) {
    return num * value;
  }

  return multiply;
}

let result = calculator();
console.log(result(2));
console.log(result(3));
console.log(result(4));
