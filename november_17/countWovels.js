/*
1: Count Vowels in a String
Task: Write a function countVowels that takes a string as an argument and returns the number of vowels in the string.
console.log(countVowels("javascript")); // Output: 3
*/

let str = "Javascript";

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str.charAt(i))) {
      count++;
    }
  }
  return count;
}

console.log(countVowels(str));
