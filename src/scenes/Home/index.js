import React from 'react';
import Game from '../../components/Game';
import PropTypes from 'prop-types';

const Home = ({ game, finished, message, resetGame, handleClick }) => (
  <Game
    game={game}
    finished={finished}
    message={message}
    resetGame={resetGame}
    handleClick={handleClick}
  />
);

Home.propTypes = {
  game: PropTypes.array.isRequired,
  finished: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  resetGame: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Home;
