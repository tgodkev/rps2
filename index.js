var playerScore = 0;
var computerScore = 0;
let roundWinner = '';
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');


rockBtn.addEventListener('click', () => handleClick('rock'));
paperBtn.addEventListener('click', () => handleClick('paper'));
scissorsBtn.addEventListener('click', () => handleClick('scissors'));

function handleClick(playerSelection){
    playRound(playerSelection, computerPlay());
    updateScore(playerScore, computerScore);
    console.log(playerScore, computerScore, draws);
};


function updateScore(playerScore, computerScore){
  if(playerScore == 5){
      alert("You win!");
        reset();
  }else if(computerScore == 5){
        alert("You lose!");
            reset();
  }
}



function computerPlay(){
    let computer = Math.floor(Math.random() * 4);
    if(computer === 0){
        return "rock";
    } else if( computer === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if( playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        playerScore ++;
        roundWinner = "Player";
        document.getElementById('pScore').append(playerScore);
        document.getElementById('roundWinner').innerHTML = roundWinner + " Wins!";
    
    }
    
    else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++ ;
        roundWinner = "Computer";
        document.getElementById('cScore').append(computerScore)
        document.getElementById('roundWinner').innerHTML = roundWinner + " Wins!";
    }else if (playerSelection == "rock" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "scissors"){
        document.getElementById('roundWinner').innerHTML = "It's a tie!";
    } 
    console.log(playerScore, computerScore,);
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    document.getElementById('pScore').textContent = "Player Score:";
    document.getElementById('cScore').textContent = "Computer Score:";
}