// Accessing and Manipulating the Attributes
    // elements can have multiple attributes such as; class, id, value, href, type, etc...
    let banner = document.querySelector('#banner');
    console.log(banner.id);
    //> banner
    // returns the id value

    banner.id = 'header';
    console.log(banner.id);
    //> header
    // we changed the id value

//
// node.getAttribute()
    // returns the attribute value
    // consider the anchor having an href attribute
    // <a href="/wiki/page"/></a> 

    let a = document.querySelector('a');
    console.log(a.href);
    //> file:///wiki/page
    // notice the extension: file:// | that is because it returns with js

    console.log(a.getAttribute('href'));
    //> /wiki/page
    // returns only the text value of the href

//
// setAttribute()
    // changes the attribute value, adds an attribute with the value if there isnt already an attribute
    a.setAttribute('href', 'https://google.com');
    // now linked to google

    a.id = 'link';
    // you could also set the attribute this way 