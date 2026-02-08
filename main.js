const buttons = document.querySelectorAll('.choices');
const playerScoreDiv = document.querySelector('#player-score');
const computerScoreDiv = document.querySelector('#computer-score');
const winner = document.querySelector('.result');
const MAX_SCORE = 5;
let isGameOver = false;
const resultToast = document.querySelector('#result-container');
const resetBtn = document.querySelector('#reset');
// buttons.forEach()
buttons.forEach((button) => {
  button.addEventListener('click', (e) => playGame(e));
});

function getComputerChoice() {
  const computerMove = Math.floor(Math.random() * 3) + 1;
  return computerMove === 1
    ? 'rock'
    : computerMove === 2
      ? 'paper'
      : computerMove === 3
        ? 'scissors'
        : 'Invalid';
}

// function getHumanChoice(e) {
//   return e.target.textContent.toLowerCase();
// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
  console.log(humanSelection, computerSelection);
  if (computerSelection === humanSelection) {
    console.log('tie');
  } else if (
    (computerSelection === 'rock' && humanSelection === 'scissors') ||
    (computerSelection === 'paper' && humanSelection === 'rock') ||
    (computerSelection === 'scissors' && humanSelection === 'paper')
  ) {
    computerScore++;
  } else {
    humanScore++;
  }
  displayScore();
}
// playGame();
function playGame(e) {
  const playerChoice = e.target.id.toLowerCase();
  if (!isGameOver) {
    playRound(playerChoice, getComputerChoice());
  }
}
displayScore();
function displayScore() {
  playerScoreDiv.textContent = humanScore;
  computerScoreDiv.textContent = computerScore;

  if (humanScore === MAX_SCORE || computerScore === MAX_SCORE) {
    isGameOver = true;
    console.log(isGameOver);
    displayWinner();
  }
}

function displayWinner() {
  resultToast.style.display = 'flex';
  winner.textContent = humanScore === 5 ? 'Player Wins' : 'Computer Wins';
}

resetBtn.addEventListener('click', resetGame);

function resetGame() {
  resultToast.style.display = 'none';
  computerScore = 0;
  humanScore = 0;
  isGameOver = false;
  winner.textContent = '';
  displayScore();
}
