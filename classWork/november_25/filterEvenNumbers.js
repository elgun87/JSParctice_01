/*
1: Filter Even Numbers from an Array
Task: Write a function filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.
*/
let inputArray = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(arr) {
  return arr.filter((el, index, lis) => {
    if (el % 2 == 0) {
      return el;
    }
  });
}

console.log(`Even numbers: ${filterEvenNumbers(inputArray)}`);

/*
2: Filter Odd Numbers from an Array
Task: Write a function filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the odd numbers.
*/

function filterOddNumbers(arr) {
  let newArr = arr.filter((el, index, lis) => {
    if (el % 2 != 0) {
      return el;
    }
  });
  return newArr;
}
console.log(`Even numbers: ${filterOddNumbers(inputArray)}`);
