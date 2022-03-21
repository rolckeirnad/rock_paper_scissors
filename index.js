function computerPlay(){
    //Randomly return rock, paper or scissors value
    const options = ["Rock","Paper","Scissors"];
    return options[Math.floor(Math.random()*3)];
}

function playRound(playerSelection,computerSelection){
    //playerSelection = playerSelection.slice(0,1) + playerSelection.slice(1).toLowerCase();
    let result, winnerSelection,looserSelection;

    //If player selection is equal to computer selection, it is a tie
    if(playerSelection == computerSelection) return "It's a tie";

    //If player selection is Rock and computer selection is Scissors, player won.
    if(playerSelection == "Rock" && computerSelection == "Scissors") {
        result = "Won";
        winnerSelection = playerSelection;
        looserSelection = computerSelection;
    //Else player loose and computer won.
    } else {
        result = "Loose";
        winnerSelection = computerSelection;
        looserSelection = playerSelection;
    }
    //If player selection is Scissors and computer selection is Paper, player won.
    if(playerSelection == "Scissors" && computerSelection == "Paper") {
        result = "Won";
        winnerSelection = playerSelection;
        looserSelection = computerSelection;
    //Else player loose and computer won.
    } else {
        result = "Loose";
        winnerSelection = computerSelection;
        looserSelection = playerSelection;
    }
    //If player selection is Paper and computer selection is Rock, player won.
    if(playerSelection == "Paper" && computerSelection == "Rock") {
        result = "Won";
        winnerSelection = playerSelection;
        looserSelection = computerSelection;
    //Else player loose and computer won.
    } else {
        result = "Loose";
        winnerSelection = computerSelection;
        looserSelection = playerSelection;
    }
    
    return `You ${result}! ${winnerSelection} beats ${looserSelection}`
}

const playerSelection = "Rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection),"--",playerSelection,computerSelection);