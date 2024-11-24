/*
let numbers = [15, 7, 9, 2, 12];
let minNumber = /* Your solution here
*/

let numbers = [15, 7, 9, 2, 12];

let smallest = numbers[0];

numbers.forEach((el) => {
  if (el < smallest) {
    smallest = el;
  }
});

console.log(smallest);
