// Changing Styles with JS
    // note that the styles key is all camel cased
    // background-color = backgroundColor
    const h1 = document.querySelector('h1');

// element.style.key = 'value'
    h1.style.backgroundColor = 'blue';
    h1.style.fontWeight = 'bold';
    h1.style.padding = '10px 20px';
    // changes the style property of the h1 tag
    // this way is a little tedious

//
// setAttribute('style', 'key: value')
    h1.setAttribute('style','color: red; background-color: cyan; width:300px; height:100px');
    // best way to add multiple style properties in just one line of code

