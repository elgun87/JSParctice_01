/*
Task: Write a function multiplicationTable that takes a number as an argument and prints the multiplication table for that number up to 10.
multiplicationTable(3);
// Output:
// 3 x 1 = 3
// 3 x 2 = 6
// 3 x 3 = 9
// 3 x 4 = 12
// 3 x 5 = 15
// 3 x 6 = 18
// 3 x 7 = 21
// 3 x 8 = 24
// 3 x 9 = 27
// 3 x 10 = 30
*/

function multiplicationTable(digit) {
  for (let i = 1; i <= 10; i++) {
    let temp = digit * i;
    console.log(`${digit} * ${i} = ${temp}`);
  }
}

multiplicationTable(3);
