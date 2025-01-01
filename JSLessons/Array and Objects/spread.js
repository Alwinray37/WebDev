// spread in function calls:
    /* spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected
    or an object expression to be expanded in places where zero or more key-value pairs are expecetd */ 

    // Math.max() returns the largest number 
    Math.max(1, 2, 3, 4, 5);
    //> 5

    // if the numbers were in an array, it would not work
    let nums = [1,2,3,4,5];
    Math.max(nums);
    //> you would get 'NaN' 

    // use the spread method to iterate through each element
    Math.max(...nums);
    //> 5
//
// spread with array literals
    let cats = ['snow', 'lemon', 'fluffy'];
    let dogs = ['brownie', 'teddy', 'emily'];

    // using the spread method, combine the two arrays
    // note that the order matters
    const pets = [...cats, ...dogs];

    console.log(pets);
    //> [ 'snow', 'lemon', 'fluffy', 'brownie', 'teddy', 'emily' ]

    // spread with strings
    console.log([..."hello"]);
    //> [ 'h', 'e', 'l', 'l', 'o' ]
//
// spread in Object literals
// copies properties from one object into abother object

    const feline = {
        legs: 4,
        family: 'felidae',
    };
    const canine = {
        family: 'caninae',
        furry: true
    };

    const dog = { ...canine, isPet: true};
    //> {family: 'caninae', furry: 'true', isPet: true}
    const lion = { ...feline, genus: 'panthera'};
    //> {legs: 4, family: 'felidae', genus: 'panthera'}

    // note that order matters, since they both have the same key elements, the last one wins and whatever its value gets pushed out
    let catDog = { ...feline, ...canine};
    //> {legs: 4, family: 'caninae', furry: true} 
    // notice that its canine's family key-value that triumphs, if it was reordered, felidae would be pushed

    // if you enter a key that already exists, that key will-value will get pushed
    catDog = {...canine, ...feline, family: 'myFamily'};
    //> { family: 'myFamily', furry: true, legs: 4 }
//
// spreading an array within an object
// it would use the the index as the key for each element of the array

    const inObj = {...[2,4,6,8]};
    //> { '0': 2, '1': 4, '2': 6, '3': 8 }
    // the index of the element is used as the key 

    //same thing with strings
    const objGreet = {..."hello"};
    //> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }
//
// use case
    const formData = {
        email: 'user@email.com',
        password: 'pass1234',
        username: 'funkieTunes'
    };

    const newUser = {...formData, id: 2345, isAdmin: false};
    //> { email: 'user@email.com',
    //   password: 'pass1234',
    //   username: 'funkieTunes',
    //   id: 2345,
    //   isAdmin: false }
//
