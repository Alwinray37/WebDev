// How to traverse through or between parent, child or sibling nodes
    // consider the following html
    /*
    <header>
        <h1>Learning JavaScript</h1>
        <nav>
            <a href="#get-started">Getting Started</a>
            <a href="#variables">Variables</a>
            <a href="#numbers">Numbers</a>
            <a href="#strings">Strings</a>
            <a href="#dom-man">DOM Manipulation</a>
            <a href="#functions">Functions</a>
            <a href="#objects">Objects</a>
            <a href="#loops">Loops</a>
            <a href="./RockPaperScissors/rps.html">Rock, Paper, Scissors</a>
            <a href="./ToDo/todo.html">To-Do List</a>
        </nav>
    </header> */

    // select an element
    let firstH1 = document.querySelector('h1');

    // node.parentElement
    // returns the Parent element of the given node
    console.log(firstH1.parentElement);
    //> <header>...</header>
    // it returns <header> because the h1 tag is inside the header tag

    // node.children
    // returns all the child elements in that Parent element
    let parentHeader = document.querySelector('header');
    console.log(parentHeader.children);
    //> HTMLCollection(2) [h1, nav]     -- this means that within this parent element 'header', there are two child elements called h1 and nav

    // iterate or choose a specific child 
    console.log(parentHeader.children[1]);
    //> <nav>...</nav>      -- returns the nav element since its the 1st index in the array 


    // node.nextSibling vs .nextElementSibling
    // .nextSibling returns the next element as a NODE, as a Text
        console.log(firstH1.nextSibling);
        //> #text       -- this is a node

    // .nextElementSibling returns the next sibling element as you expect it
        console.log(firstH1.nextElementSibling);
        //> <nav>...</nav>      -- the output we expect
    
    // theres also .previousElementSibling for the adjecent sibling previous to the one given

    
