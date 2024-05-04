// The .filter method automatically iterates through the given array and 
// applies a callback function to each item
// however, it does not transform the values, it returns the value only if true
// based on the callback function

// given array
let myArr = [1, 4, 6, 5, 4, 7, 9, 8];
console.log(myArr);

// filter the array and return a new array with only odd numbers
let oddArr = myArr.filter(e => e % 2 == 1);
console.log("Filtered Array: ", oddArr);

// .filter will iterate through myArr and pass every value to the callback function
// when it returns true, the value (say number 7) will be included to the output (new array)
