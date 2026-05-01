// console.log("Hello, world!")

// Score box
let humanScore = 0;
let computerScore = 0;


// Computer choice logic
function getComputerChoice() {

    // Generate random number between 0 and 1 using Math.random().
    let randNum = Math.random(); 

    // Divide the number range in three equal parts and assign the a return value.
    if (randNum < 0.33) {
        return "rock";
    } else if (randNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


// test the function
// console.log(getComputerChoice())


function getHumanChoice() {
    // Get user input using prompt
    let userInput = prompt("Enter your choice 'rock, paper, scissors': ");
    // 
    return userInput.toLowerCase();
}

// test the functon
// let userResp = getHumanChoice()
// console.log(userResp)



// Game play logic
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    // Check for the winner and update the score box
    if (humanChoice === computerChoice) {
        console.log(`Draw: You both chose "${humanChoice}"`);
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper"))
    {
        humanScore++    // Add 1 to human score
        console.log(`You Win! "${ humanChoice }" beats "${computerChoice}"`);
    } else {
        computerScore++ // Add 1 to computer score
        console.log(`You lose! "${computerChoice}" beats "${humanChoice}"`)
        }
}

const userResp = getHumanChoice();
const compResp = getComputerChoice();

playRound(userResp, compResp);

// Print Score Board
console.log(`Score -> Human: ${humanScore} || Computer: ${computerScore}`);