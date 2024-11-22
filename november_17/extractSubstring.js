/* TODO
Extract the word "Adventure" from the string headline .
Given: let headline = "Choose Your Adventure!";
Expected Result: "Adventure"
*/

// define a string
let headline = "Choose Your Adventure!";

// define given word
let given = "Adventure";

// create a function to accept string and extract the given word and return updated string
function extract(str, word) {
  // define var to find the index of given word
  let index = str.indexOf(word);

  // define the end index to extract
  let end = index + word.length;

  // start from the index of given word in string and extract
  return str.slice(index, end);
}

// call the function and display it
console.log(extract(headline, given));
