// the map METHOD is a dot method <array.map(function())> 
// automatically iterates through the elements of the array and 
// performs a function to each element
// .map() returns an new array but does not change the original 

// given an array of numbers
let myArr = [1, 4, 6, 9, 4];

// add 1 to every element in the array
let mappedArr = myArr.map(e => (e + 1));
console.log("Given Array: ", myArr);
console.log("Mapped Array: ", mappedArr);

// to make it cleaner, seperate the function inside the .map and call inside
function subtractNum(num) {
    return num - 1;
    // this function returns the  number subtracted by 1
}
let subMapped = myArr.map(subtractNum);
console.log("Subtracted array: ", subMapped);

