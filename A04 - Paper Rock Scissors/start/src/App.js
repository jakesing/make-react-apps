import React, { useState, useEffect } from 'react';
import Paper from './icons/Paper';
import Scissors from './icons/Scissors';
import './App.css';
import Rock from './icons/Rock';
import Choices from './components/Choices';
import GameState from './components/GameState';
import WinsLosses from './components/WinsLosses';

const choices = [
  { id: 1, name: 'rock', component: Rock, losesTo: 2 },
  { id: 2, name: 'paper', component: Paper, losesTo: 3 },
  { id: 3, name: 'scissors', component: Scissors, losesTo: 1 },
];

//1. handle wins and losses

//2. determine the winner based on choices

//3. reset the game if a user wants to play again

export default function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null); //win, loss, or draw

  useEffect(() => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }, []);

  function restartGame() {
    setGameState(null);
    setUserChoice(null);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }

  function renderComponent(choice) {
    const Component = choice.component; //paper, rock, scissors
    return <Component />;
  }

  function handleUserChoice(choice) {
    console.log(choice);
    const chosenChoice = choices.find((c) => c.id === choice);
    setUserChoice(chosenChoice);

    if (chosenChoice.losesTo === computerChoice.id) {
      setGameState('lose');
      setLosses((losses) => losses + 1);
    } else if (computerChoice.losesTo === chosenChoice.id) {
      setGameState('win');
      setWins((wins) => wins + 1);
    } else if (computerChoice.id === chosenChoice.id) {
      setGameState('draw');
    }
  }
  return (
    <div className="app">
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>
        <WinsLosses wins={wins} losses={losses} />
      </div>

      <GameState
        gameState={gameState}
        restartGame={restartGame}
        renderComponent={renderComponent}
        userChoice={userChoice}
        computerChoice={computerChoice}
      />

      <div className="choices">
        <div>You</div>
        <div />
        <div>Computer</div>

        <Choices handleFunction={handleUserChoice} />

        <div className="vs">vs</div>

        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}
