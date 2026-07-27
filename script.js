function getComputerChoice(){
    let number = Math.random();

    if(number<1/3) return "rock";
    else if ( number<2/3) return "paper";
    else return "scissors";
}


function getHumanChoice(){
    let choice = prompt("Choose rock, paper or scissors:");

    return choice.toLowerCase();
}


function playGame(){

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
  if(humanChoice === computerChoice){
    console.log(" ISOPALIA");
  }
  else if((humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="scissors" && computerChoice==="paper")){
    console.log("You win! " + humanChoice + " beats "  + computerChoice);
    humanScore++;
  }
  else{
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
}

  for(let i=1;i<=5;i++){
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();

    console.log(humanSelection);
    console.log(computerSelection);

    playRound(humanSelection,computerSelection);
  } 
  
  if(humanScore>computerScore){
    console.log("ΝΙΚΗΤΗΣ ΑΝΘΡΩΠΟΣ");
  } 
  else if(humanScore<computerScore){
    console.log("ΝΙΚΗΤΗΣ PC");
  }
  else{
    console.log("ISOPALIA");
  }

}

playGame();

