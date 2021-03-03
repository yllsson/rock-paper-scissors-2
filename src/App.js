import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');

  // player selection on button click
  // computer selection

  const getWinner = selection => {
    const playerSelection = parseInt(selection);
    const computerSelection = Math.floor(Math.random() * 3);
    let winner = '';

    if (playerSelection === computerSelection) {
      winner = "It's a tie!";
    } else {
      let winningChoice = computerSelection + 1;

      if (winningChoice > 2) {
        winningChoice = 0;
      }

      if (playerSelection === winningChoice) {
        winner = 'You won!';
        setPlayerScore(playerScore + 1);
      } else {
        winner = 'You lost!';
        setComputerScore(computerScore + 1);
      }
    }

    console.log(playerSelection, computerSelection, winner);
    setResult(winner);
    return winner;
  };

  useEffect(() => {
    console.log(result);
  }, [result]);

  return (
    <div className='App'>
      <h1>Rock Paper Scissors!</h1>

      <button
        className='btn'
        value='0'
        onClick={event => {
          getWinner(event.target.value);
        }}
      >
        Rock
      </button>
      <button
        className='btn'
        value='1'
        onClick={event => {
          getWinner(event.target.value);
        }}
      >
        Paper
      </button>
      <button
        className='btn'
        value='2'
        onClick={event => {
          getWinner(event.target.value);
        }}
      >
        Scissors
      </button>

      <div>
        <span>{result}</span>
        <h2>Score Player: {playerScore}</h2>
        <h2>Score Computer: {computerScore} </h2>
      </div>
    </div>
  );
}

export default App;
