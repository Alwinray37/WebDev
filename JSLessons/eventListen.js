// addEventListener(event, function)
    // recommended to use addEventListener or onclick or inline
    const btn = document.querySelector('button');
    btn.addEventListener('click', e => alert('you clicked the button'));

    // you can have multiple events in one target using addEventListener
    btn.addEventListener('dblclick', e => alert('Stop clicking'));

//
// onclick = ''
    // you can only use one function with this syntax
    btn.onclick = e => {alert('new function')}; // effectively overrides the previous event click functions 
//
// List of events
/*
    click
    dblclick
    mouseover
    mouseenter
    keydown
    keyup

*/