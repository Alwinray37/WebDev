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
        // no need to use 'function' keyword
        displayPerson(){
            console.log(`Name: ${this.name}\nAge: ${this.age}`);
        }
    }

    const person1 = new Person("John", 25);
    person1.displayPerson();
// 
// class is a BLUEPRINT of an object, whereas an object is an INSTANCE of the class 
    class House{
        constructor(color){
            this.color = color;
        }

        getFurniture(){
            return 'sofa';
        }
    }

    const house1 = new House('red');
    const house2 = new House('blue');

/**
 * 
 */