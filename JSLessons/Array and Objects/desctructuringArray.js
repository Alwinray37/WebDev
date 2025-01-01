// A short, clean syntax to 'unpack':
    //values from arrays
    //properties from objects 
// into distinct variables

    //consider the following
    const scores = [10,9,8,7,7,6,5,1];

    //how we normally isolate an element into a variable
    const highest = scores[0]; 
    //> 10
    const secondHighest = scores[1];
    //> 9

    // using destructuring to isolate the first three indeces to each their own variables 
    const [gold, silver, bronze, ...rest] = scores; 
    
    console.log('gold:', gold);
    //> gold: 10
    console.log('silver:', silver);
    //> silver: 9
    console.log('bronze:', bronze);
    //> bronze: 8
    console.log('everyone else:', rest);
    //> everyone else: everyone else: [ 7, 7, 6, 5, 1 ]