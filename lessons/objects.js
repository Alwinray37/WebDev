// an object is similar to an object in real life
// it has properties and methods
// different objects can have the same properties, but different values

    // create an object literal of a person
    const person1 = {
        firstName: "Spongebob",
        lastName: "Squarepants",
        age: 30,
        isEmployed: true,
        greet: function(){console.log(`Hi! I'm ${this.firstName}`)}
    };

    // access person1 values
    // console.log(person1.firstName);
    // console.log(person1.lastName);
    // console.log(person1.age);
    // console.log(person1.isEmployed);
    // person1.greet();

    // factory function 
    function createPerson(firstName, lastName, age, isEmployed){
        return{
            firstName,
            lastName,
            age,
            isEmployed, 
            greet: function(){console.log(`Hi! I'm ${this.firstName}`)} // method
        }
    }
    const person2 = createPerson("Patrick", "Star", 45, false);
    // console.log(person2.firstName);
    // console.log(person2.lastName);
    // console.log(person2.age);
    // console.log(person2.isEmployed);
    // person2.greet();

    // constructor function
    // first letter must be capitalized
    // use 'this.'
    function Person(firstName, lastName, age, isEmployed){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isEmployed = isEmployed;
        this.greet = function(){console.log(`Hi! I'm ${this.firstName}`)};
    }
    // to use the constructor function^^
    // must use 'new' keyword
    const person3 = new Person("Squidward", "Tentacles", 40, true);
    // console.log(person3.firstName);
    // console.log(person3.lastName);
    // console.log(person3.age);
    // console.log(person3.isEmployed);
    // person3.greet();

    // get the keys of an object
    // Object.keys(object);
    const keys = Object.keys(person1);
    console.log(keys);

    // iterate through the object using for...in
    for(let key in person2){
        // returns the keys
        console.log(key);
        // returns the values of the keys
        console.log(person2[key]);
    }