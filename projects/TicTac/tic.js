const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const board = document.querySelector("#gameboard");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const messageHTML = document.querySelector("#message");

// Gameboard
// an object that contains rendering of the cells of the game
// the update function to update cell with player mark(X, O) 
const Gameboard = (() => {
    // these are the empty cells of the gameboard
    let gameboard = ["","","","","","","","",""];
    // output the cells into their own div element within the gameboard div in the indexHTML
    function render(){
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
        });
        // append the cells onto the gameboard html
        board.innerHTML = boardHTML;
        // query all instances of the cells
        // add an event listener 
        const squares = document.querySelectorAll(".square");
        squares.forEach((square)=>{
            square.addEventListener("click", (e)=>{Game.handleClick(e)});
        });
    }
    // this function will update the cell targeted by click event
    // takes the index of the cell and the mark of the players turn (X,O)
    function update(index, value){
        gameboard[index] = value;
        render();
    }
    // getter function to access the gameboard array for other functions to use
    const getGameboard = () => gameboard;
    
    return{
        render,
        update,
        getGameboard
    }
})();

// Game 
// an object that contains the game logic
const Game = (()=>{
    let currentPlayerIndex;
    let gameOver;
    // factory function to create player info
    function createPlayer(name, mark){
        return{
            name, 
            mark
        }
    };
    // start the game
    // initializes the gameboard and grabs the player name values
    function start(){
        players = [
            createPlayer(player1.value, "X"),
            createPlayer(player2.value, "O")
        ]; 
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.render();
    }
    // when user clicks on cell;
    // grab the index of the square by event.target.id.split() 
    // if the indexed element from the gameboard is not empty, return
    // otherwise, update the value of the element indexed in the gameboard
    // with the players mark
    // check game conditions either win or tie
    function handleClick(event){
        if(gameOver){
            return;
        }
        let index = parseInt(event.target.id.split("-")[1]);
        if(Gameboard.getGameboard()[index] !== ""){
            return;
        }else{
            Gameboard.update(index, players[currentPlayerIndex].mark);
            if(checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].mark)){
                gameOver = true;
                displayController.renderMessage(`${players[currentPlayerIndex].name} Won!`);
            }else if(checkForTie(Gameboard.getGameboard())){
                gameOver = true;
                displayController.renderMessage(`TIE!`);
            }
            currentPlayerIndex = currentPlayerIndex == 0 ? 1 : 0;
        }
    }
    // this function contains the win conditions
    // compares the gameboard array with win conditions by
    // checking the indeces related to the winning combos and if
    // they match 
    function checkForWin(board){
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
        for(let i=0; i< winningCombos.length; i++){
            const [a,b,c] = winningCombos[i];
            if(board[a] && board[a] == board[b] && board[b] == board[c]){
                return true;
            }
        }
        return false;
    }
    // function to check for tie
    // checks that every cell on the board array is not empty
    function checkForTie(board){
        return board.every(cell => cell !== "");
    }
    // function to restart the game
    // iterates through the cell html and updates innerHTML to empty
    function restart(){
        gameOver = false;
        for(let i = 0; i < 9; i++){
            Gameboard.update(i, "");
        }
        messageHTML.innerHTML = "";
        Gameboard.render();
    }
    // need to return to be accessible 
    return{
        start,
        handleClick,
        restart
    }
})();
// displayCrontroller that will output the message based on results
const displayController = (() => {
    function renderMessage(message){
        messageHTML.innerHTML = message;
    };
    return{
        renderMessage
    }
})();


function btnListeners(){
    startButton.addEventListener("click", ()=>{
        Game.start();
        startButton.classList.toggle("d-none");
        restartButton.classList.toggle("d-none")
    });
    restartButton.addEventListener("click", ()=>{
        Game.restart();
    });
}
// initilize the button listeners
btnListeners();
