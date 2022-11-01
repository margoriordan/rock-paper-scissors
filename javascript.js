let playerCount = document.querySelector(".player-count");
let computerCount = document.querySelector(".computer-count");
let gameResult = document.querySelector(".victor");

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
            alert(`${playerSelection} BEATS ${computerSelection}...?`);
            alert("CHEATER.")
    

    } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK' || 
            playerSelection === 'ROCK' && computerSelection === 'PAPER' || 
            playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
            computerCount.textContent = ++computerScore;
            alert("HA! LOSER.");
            alert(`${computerSelection} BEATS ${playerSelection}!`);
   
    } else if (playerSelection === computerSelection){
        alert("A TIE! HOW UNPRODUCTIVE.");
    };

    checkWinner();
}

function checkWinner(){
    if (playerScore === 5 && playerScore > computerScore){
        alert("I DEMAND A RECOUNT!!!!!");
        location.reload();
    }
    else if (computerScore === 5 && computerScore > playerScore){
        alert("JUST AS I THOUGHT IT WOULD BE...");
        alert("PLAY AGAIN IF YOU'RE A MASOCHIST.")
        location.reload();
    }
}