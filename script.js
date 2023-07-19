//choices are either rock, paper, or scissors

const choices = ['Rock', 'Paper', 'Scissors']

//function to simulate computer choice
//will return either "Rock", "Paper", or "Scissors"

function getComputerChoice() {
    var compIndex = Math.floor(Math.random() * 3); //picks a random number 0-2
    var compChoice = choices[compIndex]; //uses the random number to chose a random pick from the choices
    return compChoice;
}
