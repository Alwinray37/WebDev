// This JS file is for the main index 
// using this file to dynamically set attributes like class
// for bootstrap design

const projContainer = document.querySelector("#project-container");
const projectCard = document.querySelectorAll(".projectCard");


// project container class list
projContainer.setAttribute("class", `
    container-fluid 
    d-flex 
    gap-4 
    flex-wrap 
    justify-content-center
`);

// projects class list
projectCard.forEach((card) => {
    card.setAttribute("class", `
        projectCard
        card 
        p-2
    `);
}); 


