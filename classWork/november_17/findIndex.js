/*
Find the index of "Pie" in the desserts array.
b. Given: let desserts = ["Ice Cream", "Pie", "Pudding", "Cake"];
c. Expected Result: 1
*/

// define array
let desserts = ["Ice Cream", "Pie", "Pudding", "Cake"];

// define given element
let el = "Pie";

// create function to find an index of given element in arr. Function must return the index of given element
function findIndex(arr, el) {
  // use indexOf() to find index
  return arr.indexOf(el);
}

// call func
console.log(findIndex(desserts, el));
