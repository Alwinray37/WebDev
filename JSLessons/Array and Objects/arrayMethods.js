// Array methods

/** Array.length
 * returns the size of the array
 */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);
//> 4

/** Array.toString()
 * converts an array to a string of comma-separated array values
*/
let stringFruits = fruits.toString();
console.log(stringFruits);
//> Banana,Orange,Apple,Mango

/** Array.join()
 * joins all array elements into a string with an addition of a separator
 */
let joinFruits = fruits.join(" | ");
console.log(joinFruits);
//> Banana | Orange | Apple | Mango

/** Array.pop()
 * removes the last element from an array
 * also returns the last element from an array if saved to a variable
 */
fruits.pop();
console.log(fruits); //remove the last element
//> [ 'Banana', 'Orange', 'Apple' ]

let poppedFruit = fruits.pop();
console.log(poppedFruit);
//> Apple   **remember the new array was [ 'Banana', 'Orange', 'Apple' ]**

/** Array.push()
 * adds a new element at the end of the array
 */
fruits.push("Mango");
console.log(fruits);
//> [ 'Banana', 'Orange', 'Mango' ]

let pushFruit = fruits.push("Kiwi"); //returns the new array length after pushing
console.log(pushFruit);
//> 4

/** Array.shift()
 * removes the first array element
 */
let shiftedFruit = fruits.shift();
console.log(fruits, shiftedFruit);
//> [ 'Orange', 'Mango', 'Kiwi' ] Banana

/** Array.unshift()
 * adds a new element 
 */
fruits.unshift("Lemon");
console.log(fruits);
//> [ 'Lemon', 'Orange', 'Mango', 'Kiwi' ]

/** Array.concat(<array>)
 * creates a new array by merging existing arrays
 */
const veggies = ["Carrot", "Onion", "Spinach", "Potato"];
const foodItems = fruits.concat(veggies);
console.log(foodItems);
/*> [
  'Lemon',   'Orange',
  'Mango',   'Kiwi',
  'Carrot',  'Onion',
  'Spinach', 'Potato'
] */

/** Array.splice(index, <elementstobeRemoved>, "items")
 * adds new items to an array
 */
fruits.splice(1, 0, "Apple"); //adding "Apple" into index 1 
console.log(fruits);
//> [ 'Lemon', 'Apple', 'Orange', 'Mango', 'Kiwi' ]

let splicedFruit = fruits.splice(2, 1); //removing the 3rd element 
console.log(splicedFruit);

/** Array.slice()
 * returns a NEW array of spliced elements without changing the original
 * can take 2 args, param1: starting index, param2: ending index
 */
let slicedFruits = fruits.slice(2); //without ending index
console.log(fruits, slicedFruits);
//> [ 'Lemon', 'Apple', 'Mango', 'Kiwi' ] [ 'Mango', 'Kiwi' ]
console.log(fruits.slice(1,3)); // select elements from index 1, and up to (but not including) index 3
//> [ 'Apple', 'Mango' ]

/** Array.every()
 * tests whether all elements in the array pass the test implemented by the provided function
 */
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 == 0); //returns a bool (true or false) if all elements pass the test
console.log(allEven);
//> true

