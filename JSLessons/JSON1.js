// JSON is a text format that is language independent

// convert an object to JSON string
const myObj = {
    name: "john",
    hobbies: ["eat", "sleep", "volleyball"],
    hello: () => {console.log("HELLO from John!")}
}
// quick check
console.log("Type:", typeof(myObj), ":", myObj.name, myObj.hobbies);
myObj.hello();
// conversion to JSON string
const sendJSON = JSON.stringify(myObj);
console.log("Type:", typeof sendJSON, ":", sendJSON, sendJSON.name);
//> Type: string : {"name":"john","hobbies":["eat","sleep","volleyball"]} undefined

// RECEIVING JSON 
// convert JSON string to js 
const receiveJSON = JSON.parse(sendJSON);
console.log("Type:", typeof receiveJSON, ":", receiveJSON, receiveJSON.name);
//> Type: object : { name: 'john', hobbies: [ 'eat', 'sleep', 'volleyball' ] } john

/** NOTE:
 * methods get lost when converting to json
 */