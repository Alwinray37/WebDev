// Rock Paper Scissors Game 
// create a function that generates computer choice    
//     function will generate a number between 1-3 that correlates to rock, paper or Scissors
//     save that generated output to a variable 
// create a function that takes player selection when player clicks on given cards(button)
// create a function that takes the two parameters and compares them 

//function to produce computer's choice
let getCompChoice = () =>  {
    let x = Math.floor(Math.random() * 3) +1;
    if (x == 1){
        return "rock";
    }
    else if(x == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

// initializing variables
let win;
let playerScore = 0;
let compScore = 0;
let round = 1;
const rnd = document.querySelector('#rnd');
const rpsGame = document.querySelector(".rps-game");
const playerScr = document.querySelector('#playerScr');
const compScr = document.querySelector('#compScr');
const resBox = document.querySelector('#resultBox');
const modal = document.querySelector('.modal')
const modalP = document.querySelector('#modal-title')

resBox.append("Game Log:")
// function that plays one round of RPS
function playRound(userChoice) {
    let compChoice = getCompChoice();
    let roundResult = result(userChoice, compChoice);
    let x = document.createElement('div');
    x.innerText = `\n${userChoice} vs ${compChoice}\n result: ${roundResult}\n`
    resBox.append(x);
    rnd.innerHTML =`Round: ${round}`;
    playerScr.innerHTML = `${playerScore}`;
    compScr.innerHTML = `${compScore}`;
};

// function for the user choice
let result = (userChoice, compChoice) => {
    let result = 'undecided';
    // check for tie
    if(userChoice == compChoice){
        result = 'tie';
    }
    else if(userChoice == 'rock'){
        result = compChoice == 'scissors' ? 'win' : 'lose';
        if(result =='win'){
            playerScore++;
        }else{
            compScore++;
        }
    }
    else if (userChoice == 'paper') {
        result = compChoice == 'rock' ? 'win' : 'lose';
        if(result =='win'){
            playerScore++;
        }else{
            compScore++;
        }
    }
    else if (userChoice == 'scissors') {
        result = compChoice == 'paper' ? 'win' : 'lose';
        if(result =='win'){
            playerScore++;
        }else{
            compScore++;
        }
    }
    // finish round and return result
    round++;
    console.log(round);
    return result;
}

// Set event handlers
let setHandlers = () => {

    document.getElementById('rock').onclick = function () {
        if(compScore < 2 && playerScore < 2){
            playRound('rock');
        }
        else{
        endGame();
        }
    };
    document.getElementById('paper').onclick = function () {
        if(compScore < 2 && playerScore < 2){
            playRound('paper');
        }
        else{
            endGame();
        }
    };
    document.getElementById('scissors').onclick = function () {
        if(compScore < 2 && playerScore < 2){
            playRound('scissors');
        }
        else{
            endGame();
        }
    };
};

// Function when game ends
let endGame =() => {
    rpsGame.style.display = 'none';
    if(playerScore == 2){
        modalP.innerText ="Congrats! You Win!";
    }else{
        modalP.innerText = "Sorry you lost :(";
    }
    setTimeout(restart(), 1000) ;
};

// function to restart
let restart = () =>{
    modal.style.display = 'flex';
    

    let reset = document.querySelector('#reset');
    reset.addEventListener('click', e => {
        modal.style.display = 'none';
        rpsGame.style.display = 'flex';
        resBox.innerHTML = '';
        resBox.append("Game Log:")
        playerScore = 0;
        compScore = 0;
        round = 0;
        rnd.innerHTML =`Round: ${round}`;
        playerScr.innerHTML = `${playerScore}`;
        compScr.innerHTML = `${compScore}`;
    })
}

const main = () => {
    setHandlers();
}
main();