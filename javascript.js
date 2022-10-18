function game(){
    for (let i = 0; i < 5; i++){

    let computerChoice = ['ROCK', 'PAPER', 'SCISSORS'];
        let getComputerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    let computerSelection = getComputerChoice;
        console.log(computerSelection);

    let getPlayerSelection = prompt('ROCK, PAPER, OR SCISSORS?');
    let playerSelection = getPlayerSelection.toUpperCase();

    function playRound(playerSelection, computerSelection){
    
        if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS' || 
            playerSelection === 'PAPER' && computerSelection === 'ROCK' || 
            playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
                playerScore += 1;
                alert(`${playerSelection} BEATS ${computerSelection}! POINT FOR PLAYER!`);
        
    
        } else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK' || 
            playerSelection === 'ROCK' && computerSelection === 'PAPER' || 
            playerSelection === 'PAPER' && computerSelection === 'SCISSORS'){
                computerScore += 1;
                alert(`${computerSelection} BEATS ${playerSelection}! POINT FOR COMPUTER!`);
       
        } else if (playerSelection === computerSelection){
            alert(`DRAW.`)
        } 

        return;
        }
    }
}
console.log(game());