/*
4: Count Vowels in a String
Task: Write a function countVowels that takes a string as an argument and returns the number of vowels in the string.
*/

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = str.split("").filter((el) => vowels.includes(el));
  return count.length;
}
console.log(countVowels("javascript"));
let vowels = "aeiouAEIOU";
