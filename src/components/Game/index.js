import React from 'react';
import styled from 'styled-components';

import Board from './Board';
import ButtonsBar from './ButtonsBar';
import Display from './Display';

import { GAME_BOARD_SIZE } from '../../constants';

const StyledGame = styled.div`
  display: flex;
  flex-direction: column;
`;


const Game = ({ game, gamer, finished, message, resetGame, handleClick }) => (
  <StyledGame>
    <Display message={message} />
    <Board game={game} handleClick={handleClick} boxSize={GAME_BOARD_SIZE}/>
    {finished && <ButtonsBar resetGame={resetGame} />}
  </StyledGame>
);

export default Game;
