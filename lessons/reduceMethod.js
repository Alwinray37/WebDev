// the .reduce method auto iterates through an array and passes each value to a callback function
// the callback function takes two arguments instead of 1, unlike .map and .filter
// first argument is the 'accumulator' - current value of the resut at that point in the loop
// second argument is the 'current' value - which is the item currently being iterated on 

// lets find the product of all numbers in an array
let myArr = [1, 2, 3, 4, 5, 6];
// 1 * 2 * 3 = prodTotal

let prodTotal = myArr.reduce( (total, currentItem) => {
    // console.log("Total:", total);
    // console.log("Current Item:", currentItem);
    return total * currentItem;
}, 1);
// console.log(prodTotal);

// sum of tripled evens function
// filter the even numbers
// multiply each even num by 3
// add each tripled number to sum
let sumOfTripledEvens = myArr.filter(e => e % 2 == 0).map(e => e * 3).reduce((sum, curr) => sum + curr);
console.log(sumOfTripledEvens);

