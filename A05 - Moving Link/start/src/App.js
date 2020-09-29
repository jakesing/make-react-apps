import React, { useEffect, useRef, useState } from 'react';
import './App.css';

export default function App() {
  const canvasRef = useRef(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);

  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    context.fillRect(x, y, 100, 100);
  }, [x, y]);

  //add event listener on a window to listen for arrow key
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    function handleKeyDown(e) {
      if (e.key === 'ArrowUp') move('Up');
      if (e.key === 'ArrowLeft') move('Left');
      if (e.key === 'ArrowDown') move('Down');
      if (e.key === 'ArrowRight') move('Right');
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function move(direction) {
    if (direction === 'Up') setY((y) => y - 20);
    if (direction === 'Left') setX((x) => x - 20);
    if (direction === 'Down') setY((y) => y + 20);
    if (direction === 'Right') setX((x) => x + 20);
  }

  return (
    <div className="app">
      <canvas ref={canvasRef} />

      <div className="arrows">
        <button onClick={() => move('Up')}>Up</button>
        <button onClick={() => move('Left')}>Left</button>
        <button onClick={() => move('Down')}>Down</button>
        <button onClick={() => move('Right')}>Right</button>
      </div>

      <div className="images">
        <img src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
        <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
        <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
      </div>
    </div>
  );
}
