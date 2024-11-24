/*
Convert the string pet to uppercase.
Given: let pet = "golden retriever";
Expected Result: "GOLDEN RETRI
*/

// define a string
let str = "golden retriever";

// below function will accept str as an argument and return string as upper case
function convertToUpperCase(str) {
  // calling toUpperCase() method from string
  return str.toUpperCase();
}

//call the function
console.log(convertToUpperCase(str));
