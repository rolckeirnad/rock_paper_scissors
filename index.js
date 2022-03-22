function computerPlay() {
    //Randomly return rock, paper or scissors value
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    //If player selection is equal to computer selection, it is a tie
    let winner;
    if (playerSelection == computerSelection) winner = "Tie";
    //If player selection is Rock and computer selection is Scissors, player won.
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        winner = "Player"
        //Else player loose and computer won.
    } else {
        winner = "Computer"
    }
    //If player selection is Scissors and computer selection is Paper, player won.
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        winner = "Player"
        //Else player loose and computer won.
    } else {
        winner = "Computer"
    }
    //If player selection is Paper and computer selection is Rock, player won.
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        winner = "Player"
        //Else player loose and computer won.
    } else {
        winner = "Computer"
    }

    return winner;
}

function capitalize(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

function getInput() {
    const allowedInputs = ["Rock", "Paper", "Scissors"];
    let playerInput = capitalize(prompt("Write what you choose: "));
    let isValid = allowedInputs.includes(playerInput);
    while (!isValid) {
        playerInput = capitalize(prompt("Write a valid input: "));
        isValid = allowedInputs.includes(playerInput);
    }
    return playerInput;
}

function game() {
    let playerRounds = 0;
    let computerRounds = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getInput();
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        if (result == "Player") {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            playerRounds++;
        } else {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
            computerRounds++;
        }
    }
    const winner = playerRounds > computerRounds ?
        `You win. You won ${playerRounds} rounds` :
        `You lose. You lost ${computerRounds} rounds`;
    console.log(winner);
    return winner;
}