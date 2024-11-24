/*
Add the dessert "Cake" to the desserts array.
Given: let desserts = ["Ice Cream", "Pie", "Pudding"];
Expected Result: ["Ice Cream", "Pie", "Pudding", "Cake"]
*/

// define array
let desserts = ["Ice Cream", "Pie", "Pudding"];

// define an element to add array
let add = "Cake";

// create a function to accept array and word to add it
function addArray(arr, word) {
  // use push() func to add element to arr
  arr.push(word);

  // return arr
  return arr;
}

// call the function
console.log(addArray(desserts, add));
