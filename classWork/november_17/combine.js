/*
Combine the cars array with the trucks array.
b. Given:
c. let cars = ["Sedan", "Coupe"];
d. let trucks = ["Pickup", "SUV"];
e. Expected Result: ["Sedan", "Coupe", "Pickup", "SUV"]
*/

// define first arr
let cars = ["Sedan", "Coupe"];

// define second arr
let trucks = ["Pickup", "SUV"];

// use concat() function from array to combine them. Create new array and assign combined array to it
let newArr = cars.concat(trucks);

// displaye the new arr
console.log(newArr);
