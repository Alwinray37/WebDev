// innerHTML vs innerText vs textContent
let x = document.getElementById('test1');
// innerHTML
    //gets and sets the plain text or html content in the elements
    x.innerHTML = "<h1>Using innerHTML =</h1>";
    //> Using innerHTML =
    // notice how the output is a header text of h1 

//
// innerText 
    // sets or returns the text content as plain text of the specified node and all its descendants
    x.innerText = "<h2>Using innerText =</h2>";
    //> <h2>Using innerText =</h2>
    // notice that the tags are also printed in the output

//
// textContent
    // gets and returns content of all elements 
    // similar to innerText, but expands to other elements not readable to humans
    x.textContent = '<p>hello</p>';
    //> <p>hello</p>