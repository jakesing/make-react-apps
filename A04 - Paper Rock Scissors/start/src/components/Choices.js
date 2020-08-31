import React from 'react';
import Choice from './Choice';
import Rock from '../icons/Rock';
import Paper from '../icons/Paper';
import Scissors from '../icons/Scissors';

export default function Choices({ handleFunction }) {
  const choices = [
    { id: 1, name: 'rock', component: Rock, losesTo: 2 },
    { id: 2, name: 'paper', component: Paper, losesTo: 3 },
    { id: 3, name: 'scissors', component: Scissors, losesTo: 1 },
  ];

  return (
    <div>
      {choices.map((item, i) => {
        return (
          <Choice choice={item} handleFunction={() => handleFunction(i + 1)} />
        );
      })}
    </div>
  );
}
