import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Board from './Board';
import ButtonsBar from './ButtonsBar';
import Display from './Display/DisplayContainer';

import { GAME_BOARD_SIZE } from '../../constants';

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
`;

const Game = ({ game, finished,resetGame, handleClick }) => (
  <StyledGame>
    <Display />
    <Board game={game} handleClick={handleClick} boxSize={GAME_BOARD_SIZE} />
    {finished && <ButtonsBar resetGame={resetGame} />}
  </StyledGame>
);

Game.propTypes = {
  game: PropTypes.array.isRequired,
  finished: PropTypes.bool.isRequired,
  resetGame: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Game;
