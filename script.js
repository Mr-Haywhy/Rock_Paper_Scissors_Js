console.log("Hello, world!")

// Computer choice logic
function getComputerChoice() {

    // Generate random number between 0 and 1 using Math.random().
    let randNum = Math.random();
    console.log(randNum) 
    
    // Divide the number range in three equal parts and assign the a return value.
    if (randNum < 0.33) {
        return "rock";
    } else if (randNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }


}


// Check out the function
console.log(getComputerChoice())


