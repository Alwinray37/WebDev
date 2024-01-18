// Classes in JS provides more structured and cleaner way to work with objects
    // create a class
    // class ClassName{}
    class Person {
        // constructor function
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        // function within class
        displayPerson(){
            console.log(`Name: ${this.name}\nAge: ${this.age}`);
        }
    }

    const person1 = new Person("John", 25);