/*
Reverse the string "Technology" using a combination of string and array methods. •
Given: let word = "Technology";
Expected Result: "ygolonhceT" 
*/

// define string
let word = "Technology";
// create a function to accepet string and return reversed string
function reverseMe(str) {
  // convert string to arr and reverse it then convert arr to string and return updated string
  return str.split("").reverse().join("");
}

// call func
console.log(reverseMe(word));
