function getComputerChoice(){
    let number = Math.random();

    if(number<1/3) return "rock";
    else if ( number<2/3) return "paper";
    else return "scissors";
}

const results = document.querySelector("#results");
const score = document.querySelector("#score");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function playRound(humanChoice,computerChoice){

if (gameOver) {
    return;
}

  if(humanChoice === computerChoice){
    results.textContent = "ΙΣΟΠΑΛΙΑ";
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
  }
  else if((humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="scissors" && computerChoice==="paper")){
    results.textContent = "You win! " + humanChoice + " beats " + computerChoice;
    humanScore++;
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
  }
  else{
    results.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
    computerScore++;
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
  }

  if (humanScore === 5) {
    results.textContent = "🏆 You win the game!";
    gameOver = true;
  }
  else if (computerScore === 5) {
    results.textContent = "💻 Computer wins the game!";
    gameOver = true;
}
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", function () {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
});

paperButton.addEventListener("click", function () {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
});

scissorsButton.addEventListener("click", function () {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
});






