function computerPlay() {
    //Randomly return rock, paper or scissors value
    const options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(e) {
    const playerSelection = e.srcElement.textContent;
    console.log(e)
    const computerSelection = computerPlay();
    infoSection.textContent = `You choose ${playerSelection}. Computer choose ${computerSelection}.`
    //If player selection is equal to computer selection, it is a tie
    if (playerSelection == computerSelection) {
        result.textContent = "It's a tie.";
        e.srcElement.classList.add('tie');
        setTimeout(() => e.srcElement.classList.remove('tie'), 400);
        return;
    };
    //If player selection is Rock and computer selection is Scissors, player won.
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        result.textContent = "You Win!";
        e.srcElement.classList.add('win');
        setTimeout(() => e.srcElement.classList.remove('win'), 400);
        playerScore.textContent = ++playerPoints;
        checkScore();
        return;
    }
    //If player selection is Scissors and computer selection is Paper, player won.
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        result.textContent = "You Win!";
        e.srcElement.classList.add('win');
        setTimeout(() => e.srcElement.classList.remove('win'), 400);
        playerScore.textContent = ++playerPoints;
        checkScore();
        return;
    }
    //If player selection is Paper and computer selection is Rock, player won.
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        result.textContent = "You Win!";
        e.srcElement.classList.add('win');
        setTimeout(() => e.srcElement.classList.remove('win'), 400);
        playerScore.textContent = ++playerPoints;
        checkScore();
        return;
        //Else player loose and computer won.
    } else {
        result.textContent = "You Lose!";
        e.srcElement.classList.add('lose');
        setTimeout(() => e.srcElement.classList.remove('lose'), 400);
        computerScore.textContent = ++computerPoints;
        checkScore();
        return;
    }
}

function checkScore() {
    if (playerPoints == 5) {
        infoSection.textContent = "Player wins";
        result.textContent = "";
        switchButtons();
    } else if (computerPoints == 5) {
        infoSection.textContent = "Computer wins";
        result.textContent = "";
        switchButtons();
    }
}

function switchButtons() {
    playButtons.forEach(button => button.parentNode.removeChild(button));
    buttonContainer.appendChild(resetButton);
}

function resetGame() {
    playerPoints = 0;
    computerPoints = 0;
    playerScore.textContent = playerPoints;
    computerScore.textContent = computerPoints;
    buttonContainer.removeChild(resetButton);
    playButtons.forEach(button => buttonContainer.appendChild(button));
    infoSection.textContent = "Choose rock paper or scissors";
}

let playerPoints = 0
    , computerPoints = 0;

const buttonContainer = document.querySelector('.buttonContainer');
const playButtons = document.querySelectorAll('.buttonContainer>button');

const infoSection = document.querySelector('#info');
const result = document.querySelector("#result");

const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');

const resetButton = document.createElement('button');
resetButton.textContent = "Play again!";
resetButton.addEventListener('click', resetGame);


playButtons.forEach(button => button.addEventListener('click', playRound))