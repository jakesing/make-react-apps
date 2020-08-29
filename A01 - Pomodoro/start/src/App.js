import React, { useState, useRef } from 'react';
import './App.css';

function padTime(time) {
  return time.toString().padStart(2, '0');
}

export default function App() {
  //sets the initial value of the title
  const [title, setTitle] = useState('Let the countdown begin!');

  //sets initial value of timeLeft
  const [timeLeft, setTimeLeft] = useState(25 * 60);

  //sets an 'is running condition' that helps us hide buttons that aren't relevant
  const [isRunning, setIsRunning] = useState(false);

  //gives us a place to store the running interval timer.
  const intervalRef = useRef(null);

  //sets initial value of hiding reset
  const [hideReset, setHideReset] = useState(true);

  function startTimer() {
    //prevent a 2nd timer from starting
    if (intervalRef.current !== null) return;
    setIsRunning(true);
    setHideReset(false);

    setTitle(`You're doing great!`);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;

        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;

    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTitle(`Don't stop now!`);
    intervalRef.current = null;
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    setTitle(`Ready to start over!`);
    setTimeLeft(25 * 60);
    setHideReset(true);
    setIsRunning(false);
    intervalRef.current = null;
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!isRunning && <button onClick={startTimer}>Start</button>}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
        {!hideReset && <button onClick={resetTimer}>Reset</button>}
      </div>
    </div>
  );
}
