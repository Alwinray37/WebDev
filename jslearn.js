// This JS file is for the main index 
const gameContainer = document.querySelector("#games-container");
const odinContainer = document.querySelector("#odin-container");
const projectCard = document.querySelectorAll(".projectCard");
const navbarContainer = document.querySelector("#navbarContent");
// array of obj 
const navLibrary = [
    {"AlwinRay.dev": "https://alwinray.dev"}
];
const projectsLibrary = [
    {
        title: "Calculator",
        description: "Web calculator, currently can only do the basics, will add onto it later",
        type: "odin",
        aTag: "projects/calculator/calculator.html"
    },
    {
        title: "Etch-A-Sketch",
        description: "Web app that lets users draw and sketch on a virtual canvas, written in HTML, CSS, and JS.",
        type: "game",
        aTag: "projects/etch-a-sketch/etch.html"
    },
    {
        title: "Rock-Paper-Scissors",
        description: "Classic in-person game turned into a game against a computer. Try your luck.",
        type: "game",
        aTag: "projects/RockPaperScissors/rps.html"
    },
    {
        title: "Tic-Tac-Toe",
        description: "Classic Tic-Tac-Toe game, get three in a row before your opponent does.",
        type: "game",
        aTag: "projects/TicTac/tictac.html"
    },
    {
        title: "To-Do List",
        description: "Keep track of your reminders.",
        type: "odin",
        aTag: "projects/ToDo/todo.html"
    },
    {
        title: "Odin Library",
        description: "Web app to manage a personal book library. Users can add books with details like title, author, and pages, and view them in a list.",
        type: "odin",
        aTag: "Odin/Odin_Library/library.html"
    },
];


// have a consistent navbar throughout each project
// first clear current html in navbar
navbarContainer.innerHTML = '';
navLibrary.forEach(item => {
    for(let [key, value] of Object.entries(item)){
        let navHTML = document.createElement('div');
        navHTML.innerHTML = `
            <a href="${value}" class="nav-item nav-link">${key}</a>
        `;
        navHTML.classList.add("navbar-nav");
        navbarContainer.append(navHTML);
    }
});

// dynamically output the projects into containers from projectsLibrary array
if(document.querySelector("#WebDev-home")){ // checks if were in the home page
    console.log("web dev true");
    projectsLibrary.forEach(item => {
        // quick check
        // console.log(item.title, item.type);
    
        let card = `
            <a class="projectCard" href="${item.aTag}">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
            </a>
        `;
        if(item.type == "game"){
            gameContainer.innerHTML += card;
        }else if(item.type == "odin"){
            odinContainer.innerHTML += card;
        }
    });
}

