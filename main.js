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

function getHumanChoice() {
  return prompt(
    'Please enter your choice here: \nChoices: Rock, Paper and Scissors',
  )?.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
  console.log(humanSelection, computerSelection);
  if (computerSelection === humanSelection) {
    console.log('tie');
  } else if (
    (computerSelection === 'rock' && humanSelection === 'paper') ||
    (computerSelection === 'paper' && humanSelection === 'rock') ||
    (computerSelection === 'scissors' && humanSelection === 'paper')
  ) {
    computerScore++;
  } else {
    humanScore++;
  }
}
playGame();
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(computerScore, humanScore);
  computerScore > humanScore
    ? console.log('Player Lose')
    : console.log('Player Wins');
}
