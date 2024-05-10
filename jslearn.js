// This JS file is for the main index 
// using this file to dynamically set attributes like class
// for bootstrap design

const projContainer = document.querySelector("#project-container");
const projectCard = document.querySelectorAll(".projectCard");
const navbarContainer = document.querySelector("#navbarContent");
const navLibrary = [
    {"AlwinRay.dev": "https://alwinray.dev"}
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




