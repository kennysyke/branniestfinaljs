const options = document.querySelectorAll('.button');
const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');
const result = document.getElementById('result');
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieText = document.getElementById("result-tie");
const displayBox = document.querySelector('.display');
let computerWinAmount = 0;
let playerWinAmount = 0;
let tieAmount = 0;

options.forEach((option) => {
    option.addEventListener('click', function () {
        const playerSelection = this.textContent.toLowerCase();
        const computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);

        playerChoice.textContent = "You: " + playerSelection;
        computerChoice.textContent = "Computer: " + computerSelection;

    });
});
function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playerWin() {
    ++playerWinAmount;
    playerScore.innerHTML = "Your score is: " + playerWinAmount;
}

function computerWin() {
    ++computerWinAmount;
    computerScore.innerHTML = "The computer score is: " + computerWinAmount;
}

function tieWin() {
    ++tieAmount;
    tieText.innerHTML = "Tie rounds: " + tieAmount;
}
function reset() {
    computerWinAmount = 0;
    playerWinAmount = 0;
    tieAmount = 0;
    playerScore.innerHTML = "Your score is: 0";
    computerScore.innerHTML = "The computer score is: 0";
    tieText.innerHTML = "Tie rounds: 0";
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        result.textContent = "Result: Its a tie";
        tieWin();
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        result.textContent = "Result: You win";
        playerWin();
    } else {
        result.textContent = "Result: You lost";
        computerWin();
    }
    if (computerWinAmount == 10) {
        alert("Oh no, you lost.");
        reset();
    } else if (playerWinAmount == 10) {
        alert("You are the greatest! Congratulations!")
        reset();
    }
}







