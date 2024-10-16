let gameOngoing = false;
let targetScore = 0;
let humanScore = 0;
let computerScore = 0;
let computerChoice, humanChoice;
const board = document.querySelector(".scoreboard");
const input = document.querySelector("input");
const console = document.querySelector(".console");
const picks = document.querySelector(".choices");
const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const info = document.querySelector(".info");
const logger = document.querySelector(".logger")
const cpuImage = document.querySelector(".cpu")
const yourImage = document.querySelector(".person")

function getComputerChoice() {
    let computerChoice, choice;
    computerChoice = Math.random();
    choice = Math.floor(computerChoice * 3);
    switch(choice) {
        case 0:
            cpuImage.src = "images/rock.png"
            return "Rock"
        case 1:
            cpuImage.src = "images/paper.png"
            return "Paper"
        case 2:
            cpuImage.src = "images/scissor.png"
            return "Scissor"
        default:
            cpuImage.src = "images/cpu.png"
            return "Error while playing"
    }
}


function playGame() {
    let logUpdate = document.createElement("li");
    let update = "There is a winner! ";
    if (humanScore < targetScore && computerScore < targetScore) {
        computerChoice = getComputerChoice();
        update = "Computer chose " + computerChoice + " and you chose " + humanChoice + "\n";
        if (humanChoice === computerChoice) {
            update += "It's a tie, score stay the same: " + computerScore + "-" + humanScore;
        } else if ((humanChoice === "Rock" && computerChoice === "Scissor") || 
        (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissor" && computerChoice === "Paper")) {
            humanScore++;
            update += "Well Played! Score: CPU(" + computerScore + ") - You(" + humanScore + ")";
        } else {
            computerScore++;
            update += "Computer got you! Score: CPU(" + computerScore + ") - You(" + humanScore + ")";
        }
    }
    if (humanScore >= targetScore || computerScore >= targetScore) {
      if (humanScore > computerScore) {
        update +=
          "YOU WON! Final Score: CPU(" +
          computerScore +
          ") - You(" +
          humanScore +
          ")";
      } else {
        update +=
          "HMMMM! Final Score: CPU(" +
          computerScore +
          ") - You(" +
          humanScore +
          ")";
      }
    }
    logUpdate.textContent = update;
    logger.appendChild(logUpdate);
    updateScore();
}

function updateScore() {
    board.textContent = computerScore + " - " + humanScore;
}

function startGame() {
    targetScore = Number(input.value);
    input.value = "";
    reset.style.display = "inline";
    board.style.display = "block";
    picks.style.display = "block";
    console.style.display = "block";
    start.style.display = "none";
    info.style.display = "none";
}

function resetGame() {
    targetScore = 0;
    input.value = "";
    reset.style.display = "none";
    board.style.display = "none";
    picks.style.display = "none";
    console.style.display = "none";
    start.style.display = "inline";
    info.style.display = "block";
    humanScore = computerScore = 0;
    logger.textContent = ""
}

const rock = document.querySelector(".rock");
function setRock() {
    yourImage.src = "images/rock.png"
    humanChoice = "Rock";
    playGame();
}
const paper = document.querySelector(".paper");
function setPaper() {
    yourImage.src = "images/paper.png"
    humanChoice = "Paper";
    playGame();
}

const scissor = document.querySelector(".scissor");
function setScissor() {
    yourImage.src = "images/scissor.png"
    humanChoice = "Scissor";
    playGame();
}

start.onclick = startGame;
reset.onclick = resetGame;
rock.onclick = setRock;
paper.onclick = setPaper;
scissor.onclick = setScissor;