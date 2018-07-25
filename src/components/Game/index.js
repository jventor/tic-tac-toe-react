import React from "react";

import Board from "./Board";
import ButtonsBar from "./ButtonsBar";

const Game = ({ game, gamer, resetGame, handleClick }) => (
  <div className="game">
    <Board game={game} handleClick={handleClick}/>
    <ButtonsBar resetGame={resetGame} />
  </div>
);

export default Game;
