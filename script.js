function getComputerChoice() {
    let computerChoice, choice;
    computerChoice = Math.random();
    choice = Math.floor(computerChoice * 3);
    switch(choice) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissor"
        default:
            return "Error while playing"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("What hand do you want to play? (0, 1 or 2) ")
    switch(humanChoice) {
        case "0":
            return "Rock"
        case "1":
            return "Paper"
        case "2":
            return "Scissor"
        default:
            return getHumanChoice()
    }
}

function playGame() {
    let humanChoice, computerChoice;
    let humanScore = 0; let computerScore = 0;
    while(humanScore < 5 && computerScore < 5) {
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        console.log("Computer chose " + computerChoice + " and you chose " + humanChoice);
        if (humanChoice === computerChoice) {
            console.log("It's a tie, score stay the same: " + computerScore + "-" + humanScore);
        } else if ((humanChoice === "Rock" && computerChoice === "Scissor") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissor" && computerChoice === "Paper")) {
            humanScore++;
            console.log("Well Played! Score: CPU(" + computerScore + ") - You(" + humanScore + ")");
        } else {
            computerScore++;
            console.log("Computer got you! Score: CPU(" + computerScore + ") - You(" + humanScore + ")");
        }
    }

    if (humanScore > computerScore) {
        console.log("YOU WON! Final Score: CPU(" + computerScore + ") - You(" + humanScore + ")");
    } else {
        console.log("HMMMM! Final Score: CPU(" + computerScore + ") - You(" + humanScore + ")");
    }
}