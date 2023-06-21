let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
};

function newGame() {
    /**
     * Starts game on click of center of bullseye and on the new game 
     * Also maybe starts on after game failure
     */
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = []; 
    showScore();
}


const showScore = () => {
    document.getElementById("score").innerText = game.score;
}

module.exports = { game, newGame, showScore};

