// classList for CSS
//node.classList.add()
    // adds a class to the element
    // consider an h2 tag with no class
    // <h2 class=''>Hello There</h2>
    let h2 = document.querySelector('h2');
    h2.classList.add('border');
    //> <h2 class='border'>Hello There</h2>

    h2.classList.add('purple');
    //> <h2 class='border purple'>Hello There</h2>

//
// node.classList.remove()
    //removes a class
    h2.classList.remove('border');
    //> <h2 class='purple'>Hello There</h2>

//
// node.classList.toggle()
    // turns on or off a certain class
    h2.classList.toggle('purple');
    //> true

    // toggle it again..
    h2.classList.toggle('purple');
    //> false
    // returns false because its no longer active

//

