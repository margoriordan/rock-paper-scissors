let playerCount = document.querySelector(".player-count");
let computerCount = document.querySelector(".computer-count");

function computerPlay(){
    let choices = ["ROCK","PAPER","SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
};

const buttons = document.querySelectorAll("input");
buttons.forEach(button => {
    button.addEventListener("click", function(){
        playRound(button.value);
    })
});

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection){
    
    let computerSelection = computerPlay();
    
    if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || 
        playerSelection === 'PAPER' && computerSelection === 'ROCK' || 
        playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
            playerCount.textContent = ++playerScore;
            alert(`${playerSelection} BEATS ${computerSelection}!`);
            alert("CHEATER.")
    

    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK' || 
            playerSelection === 'ROCK' && computerSelection === 'PAPER' || 
            playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
            computerCount.textContent = ++computerScore;
            alert("HA!");
            alert(`${computerSelection} BEATS ${playerSelection}!`);
            alert("LOSER.")
   
    } else if (playerSelection === computerSelection){
        alert("A tie?...that's unproductive...");
    }   
};
