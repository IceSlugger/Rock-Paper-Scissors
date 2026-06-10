let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.random();
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let human = humanChoice.toLowerCase();
    let computer = computerChoice;
    let roundResult = "";

    // Determine round results
    if (human === computer) {
        roundResult = "It's a tie!";
    } 
    else if (human === "rock" && computer === "scissors") {
        humanScore++;
        roundResult = "You win! Rock beats Scissors";
    } 
    else if (human === "paper" && computer === "rock") {
        humanScore++;
        roundResult = "You win! Paper beats Rock";
    } 
    else if (human === "scissors" && computer === "paper") {
        humanScore++;
        roundResult = "You win! Scissors beats Paper";
    } 
    else if (computer === "rock" && human === "scissors") {
        computerScore++;
        roundResult = "You lose! Rock beats Scissors";
    } 
    else if (computer === "paper" && human === "rock") {
        computerScore++;
        roundResult = "You lose! Paper beats Rock";
    } 
    else if (computer === "scissors" && human === "paper") {
        computerScore++;
        roundResult = "You lose! Scissors beats Paper";
    }

    // This updates your physical screen display dynamically
    const displayBox = document.getElementById("game-results");
    displayBox.innerHTML = `
        <strong>You chose:</strong> ${human}<br>
        <strong>Computer chose:</strong> ${computer}<br>
        <span style="color: blue;">${roundResult}</span><br>
        <hr>
        <strong>Total Score</strong><br>
        You: ${humanScore} | Computer: ${computerScore}
    `;
}