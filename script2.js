// --- STEP 4: Declare the players score variables in the global scope ---
let humanScore = 0;
let computerScore = 0;

// --- STEP 2: Write the logic to get the computer choice ---
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

// --- STEP 3: Write the logic to get the human choice ---
function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    // If user clicks cancel, protect code by falling back to empty string
    if (!choice) choice = ""; 
    return choice.toLowerCase();
}

// --- STEP 5: Write the logic to play a single round ---
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } 
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++; // Increment human score
    } 
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++; // Increment computer score
    }
}

// --- STEP 6: Write the logic to play the entire game (5 rounds) ---
function playGame() {
    console.log("Welcome to Rock Paper Scissors! Playing 5 rounds...");

    // Loop exactly 5 times to recall functions and grab fresh inputs each round
    for (let i = 1; i <= 5; i++) {
        console.log(`--- ROUND ${i} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        console.log(`Current Score -> You: ${humanScore} | Computer: ${computerScore}`);
    }

    // Announce final winner after 5 rounds
    console.log("=== FINAL RESULTS ===");
    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game ${humanScore} to ${computerScore}!`);
    } else if (computerScore > humanScore) {
        console.log(`Game Over! The computer won the game ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`The overall game ended in a tie! ${humanScore} to ${computerScore}.`);
    }
}

// Start the game!
playGame();