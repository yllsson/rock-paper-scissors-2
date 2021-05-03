export const getWinner = (selection, computerScore, playerScore) => {
  const playerSelection = parseInt(selection);
  const computerSelection = Math.floor(Math.random() * 3);
  let result = '';

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
    console.log('a');
  } else {
    let winningChoice = computerSelection + 1;

    if (winningChoice > 2) {
      winningChoice = 0;
    }

    if (playerSelection === winningChoice) {
      result = 'You won!';
      playerScore = playerScore + 1;
      console.log('b');
    } else {
      result = 'You lost!';
      computerScore = computerScore + 1;
      console.log('c');
    }
  }

  console.log(playerSelection, computerSelection, result);
  return {
    playerScore,
    computerScore,
    result,
  };
};
