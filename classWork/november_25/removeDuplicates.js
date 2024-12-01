/*

3:Remove Duplicates from an Array
Task: Write a function removeDuplicates that takes an array as input and returns a new array with all duplicate elements removed.

*/

let inputArray = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr) {
  let noDuplicate = [];
  arr.forEach((element) => {
    if (!noDuplicate.includes(element)) {
      noDuplicate.push(element);
    }
  });
  return noDuplicate;
}
console.log(`Array without duplicates: ${removeDuplicates(inputArray)}`);
