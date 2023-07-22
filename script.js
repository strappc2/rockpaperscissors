
//choices are either rock, paper, or scissors

const choices = ['Rock', 'Paper', 'Scissors']

//function to simulate computer choice
//will return either "Rock", "Paper", or "Scissors"

function getComputerChoice() {
    var compIndex = Math.floor(Math.random() * 3); //picks a random number 0-2
    var compChoice = choices[compIndex]; //uses the random number to chose a random pick from the choices
    return compChoice;
}

//function to convert choice to index for choices

function choiceConvert(selection) {
    if (selection.toLowerCase() == "rock") {
        return 0; 
    } else if (selection.toLowerCase() == "paper") {
        return 1;
    } else if (selection.toLowerCase() == "scissors") {
        return 2;
    } else {
        return console.log("There was an issue.  Reload and try again")
    }
}

//function to simulate a round of rock paper scissors

function playRound(playerSelection, computerSelection) {
    let playerChoice = choiceConvert(playerSelection);
    let compChoice = choiceConvert(computerSelection);

    if (playerChoice == 0 && compChoice == 0) { //rock ties rock
        var outcome = "draw";
        var verb = "ties";
        var winner = choices[playerChoice];
        var loser = choices[compChoice];
    } else if (playerChoice == 1 && compChoice == 1) { //paper ties paper
        var outcome = "draw";
        var verb = "ties";
        var winner = choices[playerChoice];
        var loser = choices[compChoice];
    } else if (playerChoice == 2 && compChoice == 2) { //scissors ties scissors
        var outcome = "draw";
        var verb = "ties";
        var winner = choices[playerChoice];
        var loser = choices[compChoice];
    } else if (playerChoice == 0 && compChoice == 2) { //rock beats scissors
        var outcome = "win";
        var verb = "beats";
        var winner = choices[playerChoice];
        var loser = choices[compChoice];
    } else if (playerChoice == 0 && compChoice == 1) { //rock loses to paper
        var outcome = "lose";
        var verb = "beats";
        var loser = choices[playerChoice];
        var winner = choices[compChoice];
    } else if (playerChoice == 1 && compChoice == 0) { //paper beats rock
        var outcome = "win";
        var verb = "beats";
        var winner = choices[playerChoice];
        var loser = choices[compChoice];
    } else if (playerChoice == 1 && compChoice == 2) { //paper loses to scissors
        var outcome = "lose";
        var verb = "beats";
        var loser = choices[playerChoice];
        var winner = choices[compChoice];
    } else if (playerChoice == 2 && compChoice == 1) { //scissors beats paper
        var outcome = "win";
        var verb = "beats";
        var winner = choices[playerChoice];
        var loser = choices[compChoice];
    } else if (playerChoice == 2 && compChoice == 0) { //scissors loses to rock
        var outcome = "lose";
        var verb = "beats";
        var loser = choices[playerChoice];
        var winner = choices[compChoice];
    } else {
        return console.log("something messed up") //catch if something doesn't work correctly

    }
    
    let response = "You " + outcome + "! " + winner + " " + verb + " " + loser;
    return { response, outcome };
}


//Simulate a game playing 5 rounds
function game() {
    var playerScore = 0;
    var compScore = 0;


    while (playerScore < 5 && compScore < 5) { //while loop to run until someone reaches 5
        let playerResponse = prompt("Rock, Paper, or Scissors?")
        let { outcome, response } = playRound(playerResponse, getComputerChoice());

        console.log(response)
        if (outcome == "lose") {
            compScore += 1;
        } else if (outcome == "win") {
            playerScore += 1;
        }

        console.log("Player Score: " + playerScore)
        console.log("Computer Score: " + compScore)
    }

    if (playerScore > compScore) {
        console.log("You win!")
    } else if (playerScore < compScore) {
        console.log("You Lose!")
    } else {
        console.log ("It's a tie")
    }
}

game();