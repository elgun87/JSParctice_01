/*
Check if the cities array includes "Paris".
b. Given: let cities = ["London", "New York", "Tokyo"];
Expected Result: false
*/

// define an array
let cities = ["London", "New York", "Tokyo"];

// define an element to check in array
let given = "Paris";

// create a func to accept an array and an element to check in array
function checkArr(arr, element) {
  // use includes func and ternory approach to return boolean based on condition
  return arr.includes(element) ? true : false;
}

// call the function and displaye the result
console.log(checkArr(cities, given));
