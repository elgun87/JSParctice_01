/*
Find out how many characters are in the string question .
Given: let question = "Can you solve this problem?";
Expected Result: 27
*/

// define str
let question = "Can you solve this problem?";

// below function will accept str and returns the count of characters in string
function countCharcter(str) {
  // define variable to count all characters
  let count = 0;
  // use for each loop to count character
  for (el in str) {
    count++;
  }
  //return the count of character
  return count;
}

//call the function
console.log(countCharcter(question));
