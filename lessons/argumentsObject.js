// Arguments Object
// it is available inside every function 
// its an array-like object 
    // has a length property 
    // does not have array methods like push/pop
// contains all the arguments passed into the function
// not available inside of arrow functions

    console.log(arguments); 
    //notice that arguments is a reserved word, it is an existing object in Js

    // this function will return the sum of all arguments passed into the function without setting parameters 
    function sumAll(){
        let total =0;
        for(let i = 0; i < arguments.length; i++){
            total+= arguments[i];
        }
        return total;
    }

    sumAll(1,2,3);
    //> 6
//