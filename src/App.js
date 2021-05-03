import './App.css';
import { useEffect, useState } from 'react';
import { StyledButton } from './components/Button';
import { getWinner } from './utils/maths';

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');

  useEffect(() => {
    console.log(result);
  }, [result]);

  const winner = (value) => {
    const resultObject = getWinner(value, computerScore, playerScore);
    console.log(resultObject);
    setComputerScore(resultObject.computerScore);
    setPlayerScore(resultObject.playerScore);
    setResult(resultObject.result);
  };

  return (
    <div className='App'>
      <h1>Rock Paper Scissors!</h1>
      <StyledButton
        theme={{
          '@bp2': 'blue',
        }}
        size={{
          '@initial': 'small',
          '@bp1': 'large',
        }}
        id='0'
        value='0'
        onClick={(event) => {
          winner(event.target.value);
        }}
      >
        Rock
      </StyledButton>
      <StyledButton
        theme='orange'
        id='1'
        value='1'
        onClick={(event) => {
          winner(event.target.value);
        }}
      >
        Paper
      </StyledButton>
      <StyledButton
        theme='violet'
        id='2'
        value='2'
        onClick={(event) => {
          winner(event.target.value);
        }}
      >
        Scissors
      </StyledButton>

      <div>
        {result && <span>{result}</span>}

        <h2>Score Player: {playerScore}</h2>
        <h2>Score Computer: {computerScore} </h2>
      </div>
    </div>
  );
}

export default App;
