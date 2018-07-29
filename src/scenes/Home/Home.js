import React from 'react';
import Game from '../../components/Game';
import PropTypes from 'prop-types';

const Home = ({ game, finished, resetGame, handleClick }) => (
  <Game
    game={game}
    finished={finished}

    resetGame={resetGame}
    handleClick={handleClick}
  />
);

Home.propTypes = {
  game: PropTypes.array.isRequired,
  finished: PropTypes.bool.isRequired,

  resetGame: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Home;
