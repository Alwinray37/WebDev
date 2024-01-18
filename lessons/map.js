// a map holds key-value pairs where the keys can be any data type
// a map remembers the original insertion order of the keys

    // create a new map
    // you can pass an array to 'new Map()'
    // create a map and use 'Map.set()'
    const fruits = new Map([
        ["apples", 500],
        ["bananas", 300],
        ["oranges", 200]
    ]);

    // using the set() method
    fruits.set("mangoes", 7);
    // override existing key-value pairs
    fruits.set("apples", 10);

    console.log(fruits); 