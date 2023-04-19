// For in
    // loops over enumerable property names (keys) of an object
    // loops over the indeces of an array
    let list = ['jack', 'conrad', 'kingston'];
    for(let item in list){
        console.log(item);
    }
    //> "0" "1" "2"
    // returns the index of each element in the list

//
// For Of
    // loops over the elements of an array
    for (let item of list){
        console.log(item);
    }
    //> 'jack' 'conrad' 'kingston'
    // returns the actual elements

//
// code example 
    // iterate over all the <li> elements and toggle the class of 'highlight' on each one
    let li = document.querySelectorAll('li');
    for(let i of li){
        i.classList.toggle('highlight'); 
    }
    