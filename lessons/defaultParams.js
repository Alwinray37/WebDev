// Default Parameters
// give your function a default value if no argument is entered

    //function will return a random num from 1 to the argument numSides
    function rollDie(numSides){
        return Math.floor(Math.random() * numSides) + 1
    }

    // if user does not enter an argument, the result will be 'NaN'
    rollDie();
    //> NaN 

    // set the default param by using '='
    function rollDie(numSides = 6){
        return Math.floor(Math.random() * numSides) + 1
    }
    rollDie();
    //> 1-6 
//
// Order of default params
    //function will take two arguments and return a greeting 
    function greet(msg, name){
        return `${msg}, ${name}!`
    }
    console.log(greet('wassup', 'homie'));
    //> wassup, homie!
    // this function works because two arguments are entered

    // what if only one argument was entered
    console.log(greet('homie'));
    //> homie, undefined!

    // best practice is setting the default params second or third etc... 
    function greet(name, msg = 'Hey there'){
        return `${msg}, ${name}!`
    }
    console.log(greet('homie'));
    //> Hey there, homie!
//