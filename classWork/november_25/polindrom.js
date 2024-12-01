/*
5: Check if a String is a Palindrome
Task: Write a function isPalindrome that takes a string as an argument and returns true 
if the string is a palindrome (reads the same forward and backward), otherwise returns false. (edited) 
*/

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("madison")); // Output: false
console.log(isPalindrome("madam")); // Output: true
