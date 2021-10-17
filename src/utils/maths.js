export const getWinner = (selection, computerScore, playerScore) => {
  const playerSelection = parseInt(selection);
  const computerSelection = Math.floor(Math.random() * 3);
  let result = '';

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else {
    let winningChoice = computerSelection + 1;

    if (winningChoice > 2) {
      winningChoice = 0;
    }

    if (playerSelection === winningChoice) {
      result = 'You won!';
      playerScore = playerScore + 1;
    } else {
      result = 'You lost!';
      computerScore = computerScore + 1;
    }
  }

  return {
    playerScore,
    computerScore,
    result
  };
};
