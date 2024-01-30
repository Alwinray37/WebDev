const gameContainer = document.querySelector("#gameboard");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const startBtn = document.querySelector("#start-button");
const restartBtn = document.querySelector("#restart-button");
const resultDisplay = document.querySelector("#message");

// object of Game, contains the gameboard and functions related to manipulating the board
// IIFE
const Gameboard = (() => {
    // these are the cells of the gameboard
    const gameboard = ["","","","","","","","",""];

    // output the cells into their own div element within the gameboard div in the indexHTML3
    // contains the add event listeners for the cells
    function render(){
        gameContainer.innerHTML = "";
        gameboard.forEach((cell, index) => {
            gameContainer.innerHTML += `<div class="square" id="square-${index}">${cell}</div>`;
        });
        // query all instances of the cells
        // add an event listener, will be called from Play obj
        const squares = document.querySelectorAll(".square");
        squares.forEach((square)=>{
            square.addEventListener("click", (e) =>{Play.handleClick(e)});
        });
    }
    

    // getter function to access the gameboard
    const getGameboard = () => gameboard;

    return{
        render,
        getGameboard
    }
})();

const Play = (() => {
    let gameOver;
    let currentPlayerIndex;

    // start function
    // initializes the players and render the gameboard
    function start(){
        // factory functions to create players
        // players are objects with name and their sign
        function createPlayer(name, sign){
            return {
                name, sign
            }
        }
        // initializing the players into an array
        players = [
            createPlayer(player1.value, "X"), 
            createPlayer(player2.value, "O")
        ];
        gameOver = false;
        currentPlayerIndex = 0;
        Gameboard.render();
    }
    // reset the gameboard array to emtpy strings
    // re-render the gameboard
    // clear displayMSG
    function restart(){
        Gameboard.getGameboard().forEach((elem, index)=>{
            Gameboard.getGameboard()[index] = "";
        })
        start();
        resultDisplay.innerHTML = "";
    }

    // handleClick for each square logic
    // grab the id of clicked square using event.target.id (id = "square-2")
    // using parseInt() and split(), only grab the number at the end of the id, 
    // set the gameboard[index] set to players[currPlayer].sign 
    // re-render the board, then change the currPlayer value
    function handleClick(event){
        // for validation
        if(gameOver){return;}

        let index = parseInt(event.target.id.split('-')[1]);
        // validation if cell is empty
        if(Gameboard.getGameboard()[index] !== ""){
            return;
        }else{
            Gameboard.getGameboard()[index] = players[currentPlayerIndex].sign;
            Gameboard.render();
            // if else statement to check for win or tie
            if(checkForWin()){
                gameOver = true;
                resultDisplay.innerHTML = `${players[currentPlayerIndex].sign} Won!`;
            }else if(checkForTie()){
                resultDisplay.innerHTML = "Tie!";
                let squares = document.querySelectorAll(".square");
                squares.forEach(square=>square.classList.toggle("bg-warning"));
            }
            currentPlayerIndex = currentPlayerIndex == 0 ? 1 : 0; // x = (if x == 0, set 1; else set 0)
        }
    }
    // checkForWin; contains the winning combos
    // will compare the board indeces against the combos by destructuring
    // return a boolean
    function checkForWin(){
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [2, 5, 8],
            [1, 4, 7],
            [0, 4, 8],
            [2, 4, 6]
        ];
        board = Gameboard.getGameboard();
        for(let combo of winningCombos){
            const [a,b,c] = combo; // destructuring 
            // if board[a] element is not empty, check winning conditions
            if(board[a] && board[a] == board[b] && board[b] == board[c]){
                // call function to update css for winning streak
                winningLine(a, b, c);
                return true;
            }
        }
        return false;
    }
    // function to change the background color for we find a winning condition
    function winningLine(a, b, c){
        let squareA = document.querySelector(`#square-${a}`).classList.toggle("bg-success");
        let squareB = document.querySelector(`#square-${b}`).classList.toggle("bg-success");
        let squareC = document.querySelector(`#square-${c}`).classList.toggle("bg-success");
        // squareA.classList.toggle("bg-success");
        // squareB.classList.toggle("bg-success");
        // squareC.classList.toggle("bg-success");
    }
    // check for tie, returns a boolean
    // works by using the .every() method and checking if each element is not empty
    function checkForTie(){
        return Gameboard.getGameboard().every(e => e!== "");
    }

    return{
        start,
        restart,
        handleClick
    }
})();

const btnListeners = (() =>{
    startBtn.addEventListener("click", ()=>{
        Play.start();                       // this line is temporary, update later
        startBtn.classList.toggle("d-none");
        restartBtn.classList.toggle("d-none");
    });
    restartBtn.addEventListener("click", ()=>{
        Play.restart();
    })
})();