/*
Replace the word "boring" with "exciting" in the string activity .
Given: let activity = "This game is boring";
Expected Result: "This game is exciting"
*/

// define string
let activity = "This game is boring";

// below function will accept 3 argument
function replaceWord(str, replace, word) {
  // use replace() func to replace the given word and assign it back to str
  return str.replace(replace, word);
}

// call the function and display the text
console.log(replaceWord(activity, "boring", "exciting"));
