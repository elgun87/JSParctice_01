/*
Exercise 1: Basic Callback Function
Task: Write a function called performOperation that takes two arguments: a number and a callback function. 
The performOperation function should call the callback function with the number as an argument.

*/

function multiply(a) {
  return a * 5;
}

function performOperation(num, callback) {
  let func = callback(num);
  return func;
}

console.log(performOperation(5, multiply));
