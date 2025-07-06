
let choices = ['rock','paper','scissor'];

// get saved score from loaclStorage (or start with 0)

let playerScore = Number(localStorage.getItem('playerScore')) || 0;
let computerScore = Number(localStorage.getItem('computerScore')) || 0;

let playerScoreE1 = document.querySelector('.player-score');
let computerScoreE1 = document.querySelector('.Computer-score');
let images = document.querySelectorAll('.img');
let resetButton = document.getElementById('reset-btn');

images.forEach(img =>{
    img.addEventListener('click',()=>{
        const playerChoice = img.id.toLowerCase();
        const computerChoice = getComputerChoice();
        const result = getWinner(playerChoice,computerChoice);

        if(result === 'player') playerScore++;
        else if(result === 'computer') computerScore++;

       
        playerScoreE1.textContent = `Player : ${playerScore}`;
        computerScoreE1.textContent = `Computer : ${computerScore}`;

        localStorage.setItem('playerScore',playerScore);
        localStorage.setItem('computerScore',computerScore);


    });
});

resetButton.addEventListener('click',()=>{
    playerScore = 0;
    computerScore = 0;

    playerScoreE1.textContent = 'Player : 0';
    computerScoreE1.textContent = 'Computer : 0';

    // reset localStroage
    localStorage.setItem('playerScore',0);
    localStorage.setItem('computerScore',0);
    console.log(computerScore);

});

function getComputerChoice(){
    const randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}
function getWinner(player,computer){
    if(player === computer ) return 'draw';
    if(
    (player === 'rock' && computer === 'scissor') || (player === 'paper' && computer === 'rock') || (player === 'scissor' && computer === 'paper')){
        return 'player';
    }
    return 'computer';
}