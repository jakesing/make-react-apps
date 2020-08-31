import React from 'react';

export default function GameState({
  gameState,
  restartGame,
  renderComponent,
  userChoice,
  computerChoice,
}) {
  return (
    <div>
      {gameState && (
        <div
          className={`game-state ${gameState}`}
          onClick={() => restartGame()}
        >
          <div>
            <div className="game-state-content">
              <p>{renderComponent(userChoice)}</p>
              <p>{`You ${
                gameState === 'win'
                  ? 'won'
                  : gameState === 'lose'
                  ? 'lost'
                  : 'drew'
              }`}</p>
              <p>{renderComponent(computerChoice)}</p>
            </div>
            <button>Play Again</button>
          </div>
        </div>
      )}
    </div>
  );
}
