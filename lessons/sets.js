// JavaScript Sets
    // a set is a collection of unique values
    // each value can only occur once in a set

    // create a set
    const mySet = new Set();

    // add an element to the set
    mySet.add("a");
    mySet.add("c");
    mySet.add("c");// will not be saved since it already exits
    mySet.add(['d','e','f']);

    // add a variable as an element
    const car = "Lexus";
    mySet.add(car);

    console.log(mySet);
    
    // best use case for sets 
    // pass in an array with duplicates to delete duplicates
    const nums = [1,2,3,4,4,4,5,3,2,1,2,3,4,1,2,3,4];
    const numSet = new Set(nums);

    // look at the difference
    console.log(nums);
    console.log(numSet);

    // use the spread method to turn the updated set 
    // back into an array
    const updatedArray = [...numSet];
    console.log("Updated Array: ", updatedArray);

    // iterate through a set
    // use for...of 
    const fruits = new Set();
    fruits.add(["apples", 5]);
    fruits.add(["oranges", 3]);
    fruits.add(["bananas", 6]);
    for(const item of fruits){
        console.log(item[0], item[1]);
    }
    // console.log(fruits);


