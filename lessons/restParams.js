// looks like spread operator
// collects all remaining arguments into an array
    //normal function that takes one argument
    function sum(nums){
        console.log(nums);
    }
    sum(5);
    //> returns 5, as it should
    
    // that same function but with multiple arguments 
    sum(5, 3, 4);
    //> 5
    // only returns the first argument
    
    // using the rest operator will allow the function to take in as many arguments as the user wants
    function sums(...nums){
        console.log(nums);
    }
    sums(5,4,6,3);
    //> [ 5, 4, 6, 3 ]
    // collects the arguments into an array
    // so you can use 'nums' as an array
    
    // the same function in use 
    function sums(...nums){
        return nums.reduce((total, el) => total +el)
    }
    console.log(sums(1,2,3,4,5));
    //> 15 