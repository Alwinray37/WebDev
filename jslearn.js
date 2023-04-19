// DOM Manipulation ************************************

// writing text into the document
    const writeText = document.getElementById('writeText');//targets specific element by ID within the body of HTML
    writeText.append("This text is inserted by element.append()"); 
    writeText.insertAdjacentHTML("beforeend", "<br>" + "This text is inserted by use of element.insertAdjacentHTML()" + "<br>");
    writeText.insertAdjacentText("beforeend", "This text is inserted by .insertAdjacentText()");

// creating an element
    const createEl = document.querySelector("#createEl");
    createEl.append("const div = document.createElement()'div' //creates the element div");
    const div = document.createElement('div'); //creates element in memory
    div.innerText = "This text is within the new div inside the createEl code box"; //adds text inside new div

// appending elements
    // parentNode.appendChild(childNode) appends childNode as the last child of parentNode
    // parentNode.insertBefore(newNode, referenceNode) inserts newNode into parentNode before referenceNode
    createEl.appendChild(div); //div element is now projected on the page
    let div2 = document.createElement("div");
    div2.innerHTML = "Honkytonky"; 
    createEl.appendChild(div2);

// create a div with an attribute
    div.className = 'code'; // element 'div' now has attribute class='div1'
    div.setAttribute('id', 'div1');// if an id exists, it is updated to div1, else creates an id with value div1

// Manipulate the style
    // div.style.cssText = "color: Blue; background-color: white;";
    // div.setAttribute("style", "color: blue; background-color: white;");
    // the methods above are the best ways to manipulate or change the style of a given div or element
    const domMan = document.querySelector("#dom-man");
    const p = document.createElement("p");
    let maniStyle = document.createElement("h2");
    maniStyle.innerText= "Manipulating the Style";
    domMan.append(maniStyle);
    domMan.appendChild(p);
    p.className = 'p code';
    p.append('Hello, I am Green from manipulating styles!')

    p.style.cssText = 'color: green; background-color: whitesmoke;';

    const h3 = document.createElement('h3');
    domMan.appendChild(h3);
    h3.append('Hi, I am an h3 with the color blue');
    h3.setAttribute('style', 'color: blue; border: solid 1px black; margin: 20px; text-align: center;');

    const clCode = document.querySelectorAll('.code');
    clCode.forEach(code => {
        code.style.padding = '20px';
    })

// Dynamic with Buttons
    // <button onclick="alert('Hello World')">Click Me</button>
    // const btn = document.querySelector('#btn'); btn.onclick = () => alert("Hello World");
    const btn2 = document.querySelector('#btn2');
    btn2.onclick = () => alert("Wassup");

    const btn3 = document.querySelector('#btn3');
    btn3.addEventListener('click', () => {
        alert("This is button 3");
    });

// numbers and arithmetic ************************************

// Functions    *************************************

// Built in Functions
const func = document.getElementById('funcOutput');
const br = "<br>";

const myText = "I am a string";
const newString = myText.replace('string', 'sausage'); //element.replace() 

func.append("Original String: I am a string");
func.insertAdjacentHTML("beforeend",br);
func.append("After replace(): ", newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

const myArray = ['I','love','chocolate','turtles'];
const madeAstr = myArray.join('_');          //element.join()

func.insertAdjacentHTML("beforeend",br + br);
func.append(madeAstr);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

const randNum = Math.floor(Math.random() * 100); //math.random()
func.insertAdjacentHTML("beforeend",br + br);
func.append("Random number by Math.random(): " + randNum);
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number
// here, we math.floor the random decimal and multiplied by 100 to get an integer between 0 and 100

// invoking a function
function myFunction(){
    func.append("Hello, this is invoking a function");
}
func.insertAdjacentHTML("beforeend",br + br);
myFunction();


// Functions for the Odin Project
    const funcS = document.getElementById('functions');
    funcS.insertAdjacentHTML('beforeend', '<h2>Odin Functions</h2>');
    const Odinfunc = document.createElement('div');
    Odinfunc.className = 'code';
    funcS.appendChild(Odinfunc);

let brOdin = () => Odinfunc.insertAdjacentHTML('beforeend', br + br);

// create a function add7
    Odinfunc.append('given x = 5, and y = 6');
    brOdin();

const x = 5;
const y = 6;

let add7 = () => x + 7;
Odinfunc.append('add7(x) function: ' + add7());
brOdin();

//create a function that multiplies two values
    let multiply = () => x * y;
    Odinfunc.append('multiply(x, y) function: ', multiply());
    brOdin();

// write a function that capitalizes the first letter in the string
    let string1 = "hello", string2 = "bOXES", string3 = "rAinBow";
    
    let capital = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase(); //this is the function using the arrow function method

    Odinfunc.append(capital(string1) + capital(string2) + capital(string3));
Odinfunc.insertAdjacentHTML("beforeend", br);

//write a function that takes the last letter of the string and returns it
    let lastLetter = (string) =>  string.slice(-1);

    Odinfunc.append(lastLetter(string1), lastLetter(string2), lastLetter(string3));

// FizzBuzz 
    // use <input> to take user input
    // create a button to trigger the function to output the wanted values
    // create the function that takes user input value and run it
    // create a variable for the user input value 
    // use a for loop that has an index starting at 1, incrementing until equivalent to user input value 
    // use if else statement to convert any number divisible by 3 and 5 to 'fizzbuzz'
    // if else statement to convert any number divisible by 3 to fizz, and any number divisible by 5 to buzz
    // print sequential output
    funcS.insertAdjacentHTML("beforeend", "<h2>FizzBuzz</h2> <div class='code' id='fizz'></div>");
    const fizz = document.getElementById('fizz');
    fizz.insertAdjacentHTML('beforeend', '<input type="number" id="fizzNum"/><button onClick="runfizz()">Enter</button>');
    
    const runfizz = () => { 
    let input = document.getElementById('fizzNum').value;

    for ( let i = 1; i <= input; i++){
        if (i % 3 == 0 && i % 5 == 0){
            fizz.insertAdjacentText('beforeend', "FizzBuzz ");
        }
        else if (i%3 == 0){
            fizz.insertAdjacentText('beforeend', "fizz ");
        }
        else if (i % 5 == 0){
            fizz.insertAdjacentText('beforeend', "buzz ");
        }
        else{
            fizz.insertAdjacentText('beforeend', i + " ");
        }
        
    }
    };

// Drum kit ##################################################################

    // window.addEventListener('keydown', function (e) {
    //     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //     console.log(audio);
    // })


// Objects *********************************************************************
const person = {
    firstName: "Ray",
    lastName: "Roble",

}

// modifying properties in object
let car = {
    year: 2010,
    make: "Toyota" 
}
    
car["year"] = 2022;
car.make = "Lexus";
car.owner = person; //this creates a new property with the key = owner and value = person (object created above)


// LOOPS **************************************************************************
// For() loop
    // // print all numbers from 1 to 10
    // for (let i = 1; i <= 10; i++ ){
    //     console.log(i);
    // }
    // // print all even numbers from 1 to 20
    // for (let i = 0; i <= 20; i += 2){
    //     console.log(i);
    // }


// Looping over array
let animals = ["cat", "dog", "bird", "hamster", "fish"];