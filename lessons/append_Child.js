// append() vs appendChild()
    // append()
    // This method is used to add an element in form of a Node object or a DOMstring(meaning text)

    // appendChild()
    // similar to append, but only accepts nodes

    let container = document.querySelector('#container');
    let newDiv = document.createElement('div');
    newDiv.innerText = 'div says hello there';

    container.append(div);
    //> works fine
    container.append('inserting text is no problem');
    //> works fine

    container.appendChild(div);
    //> works fine since variable div is a node
    container.appendChild('Child texting is no good');
    //> does not work because it is not a node