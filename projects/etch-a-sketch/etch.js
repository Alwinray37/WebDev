const grid = document.querySelector('#grid');
const slider = document.getElementById('slider');
const pickBlue = document.querySelector('#pickBlue');
const pickRed = document.querySelector('#pickRed');
const pickYellow = document.querySelector('#pickYellow');

let color = 'blue'; //initialize the color 

// function for the slider
// slider is increments of 10, max 100
// value sets the x and y axis (init is 50x50 cells)
function sliderFunc(){
    let sliderVal = document.querySelector('#slider-value');
    // this initializes the grid
    let value = 50;
    sliderVal.innerHTML = `${value}`;
    createCells(value);

    // when user slides the slider
    slider.addEventListener('input', function() {
        // When the value of the slider changes, update the value of the 'value' variable
        value = this.value;;
        grid.innerHTML = ''; //erases past grid
        sliderVal.innerHTML = `${value}`;
        createCells(value);
    });
}
// this function creates the cells in the grid
// the grid is a square of 500px by 500px 
function createCells(value){
    let x = value;
    let y = 500 / x;
    let z = x * x;
    for(let i = 0; i < z; i++){
        let cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.setAttribute('style', `
        width: ${500/value}px;
        height: ${500/value}px;`);
        cell.setAttribute('draggable', 'false');
        grid.append(cell);
        draw(cell); //calls the draw function which adds the coloring functionality
    }
}
function draw(cell){
    let isMouseDown = false;
    document.body.addEventListener('mousedown', function(){isMouseDown = true;})
    document.body.addEventListener('mouseup', function(){isMouseDown = false;})

    // listens for if mouse is down (click hold)
    cell.addEventListener('mousedown', function() {
    cell.style.backgroundColor = `${color}`;
    });

    // listens for when the mouse enters the cell (click hold and drag)
    cell.addEventListener('mouseenter', function(){
        // if mouseDown is true, then change the background color
        if(isMouseDown){
            cell.style.backgroundColor = `${color}`;
        };
    });


}
function pickColor(){
    pickBlue.addEventListener('click', function(){
        color = 'blue';
        console.log('clicked ', color);
    });
    pickRed.addEventListener('click', function(){
        color = 'red';
        console.log('clicked ', color);
    });
    pickYellow.addEventListener('click', function(){
        color = 'yellow';
        console.log('clicked ', color);
    });
    console.log(color);
    return color;
}

function main(){
    sliderFunc();
    pickColor();
}
main();
