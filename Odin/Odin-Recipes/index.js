/*
const x = parseInt(prompt('x')), y = parseInt(prompt('y'));

function add7(x){
   return x = x + 7;
}
console.log(add7(x))

function multiply(x,y){
    return x * y;
}

console.log("multiply: ", multiply(x, y))

const name = prompt('name');
function cap(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}
console.log(cap(name))*/

$(function() {
    // this will get the full URL at the address bar
    var url = window.location.href;

    // passes on every "a" tag
    $("navbar a").each(function() {
        // checks if its the same on the address bar
        if (url == (this.href)) {
            $(this).closest("a").addClass("current");
            //for making parent of submenu active
           $(this).closest("a").parent().parent().addClass("current");
        }
    });
});
