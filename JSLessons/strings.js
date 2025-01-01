// String methods to remember
let str1 = "Hello";
let str2 = "World!";
// 1. charAt(index)
// returns the character the specified index
    console.log(str1.charAt(0));
//

// 2. concat(str1, str2, etc...)
// combines two or more strings
    str1Concat = str1.concat(" ", str2);
    console.log(str1Concat);
//

// 3. includes(searchString, position)
// checks if the string contains 'searchString'. returns 'true' or 'false'
    console.log(str1Concat.includes("World"), str2.includes("Hello"));
// 

// 4. indexOf(searchVal, fromIndex)
// returns the index of the first occurance of 'searchVal' starting from 'fromIndex'. returns '-1' if not found
    let str = "Hello World!";
    console.log("4.", str.indexOf("World"));
    console.log("4.", str.indexOf("world"));
// 

// 5. replace(searchValue, newValue)
// replaces the first occurance of 'searchValue' with 'newValue'
    console.log('5.', str.replace("World", "There"));
//

// 6. replaceAll(searchVal, newVal)
// replaces all occurances of 'searchVal' with 'newVal'
    str = "Hello World World World...";
    console.log("6.", str.replaceAll("World", "There")); 
//

// 7. slice(beginIndex, endIndex)
// extracts a section of the string from 'beginIndex' to 'endIndex' (not included).
    console.log(str.slice(0, 5));   
    console.log(str.slice(1));   
//

// 8. 