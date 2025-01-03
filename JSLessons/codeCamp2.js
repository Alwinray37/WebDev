// Make a function that looks through an array of objects (first argument) and 
// returns an array of all objects that have matching name and value pairs (second argument). 
// Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
    // get keys from source 
    const sourceKeys = Object.keys(source);
    
    // filter through the collection of objects within the array
    // use .every() method to iterate through the objects' keys and checks conditions
    // if object contains the key AND key-values match
    return collection.filter(obj => {
        return sourceKeys.every(key => obj.hasOwnProperty(key) && obj[key] == source[key]);
    })
    
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));