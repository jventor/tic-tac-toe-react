import React from 'react';
import Game from '../../components/Game';

const Home = ({ game, gamer, finished, message, resetGame, handleClick }) => (
  <Game
    game={game}
    gamer={gamer}
    finished={finished}
    message={message}
    resetGame={resetGame}
    handleClick={handleClick}
  />
);

export default Home;
