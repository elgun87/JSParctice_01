/*
Exercise 2: Array Transformation with Callback
Task: Write a function called transformArray that takes an array of numbers and a callback function. 
The transformArray function should apply the callback function to each element of the array and return a new array with the transformed elements.
*/

function transformArray(arr, callback) {
  return callback(arr);
}

function multiplyArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 5;
  }

  return arr;
}

let arr = [1, 2, 3, 4, 5];

console.log(transformArray(arr, multiplyArr));
