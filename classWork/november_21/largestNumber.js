/*
find the largest number
*/
let numbers = [3, 8, 11, 2, 10, 5];

let max = numbers[0];

numbers.forEach((el) => {
  if (el > max) {
    max = el;
  }
});
console.log(max);
