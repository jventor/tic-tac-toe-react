import React, { Component } from "react";
import logo from "./logo.png";
import Game from "../components/Game";
import Template from "../layout/Template";
import { injectGlobal } from "styled-components";
import { normalize } from "polished";

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

const INITIAL_STATE = {
  game: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  gamer: 1,
  boxes: 0,
};
class App extends Component {

  state = INITIAL_STATE;

  resetGame = () => {
    console.log("Reseteado");
    this.setState({
      game: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      gamer: 1,
      boxes: 0,
    });

  };

  handleClick = i => {
    const { game } = this.state;
    if (game[i] === 0 && !this.checkWinner()) {
      console.log("Hola", i);
      this.setState(prevState => {
        let newGame = prevState.game;
        newGame[i] = prevState.gamer;

        let newGamer = prevState.gamer === 1 ? 2 : 1;
        return { game: newGame, gamer: newGamer, boxes: prevState.boxes + 1 };
      });
    }
  };

  checkWinner() {
    const { game } = this.state;
    if (game[0] === game[1] && game[1] === game[2]) {
      return game[0];
    }
    if (game[3] === game[4] && game[4] === game[5]) {
      return game[3];
    }
    if (game[6] === game[7] && game[7] === game[8]) {
      return game[6];
    }

    if (game[0] === game[3] && game[3] === game[6]) {
      return game[0];
    }
    if (game[1] === game[4] && game[4] === game[7]) {
      return game[1];
    }
    if (game[2] === game[5] && game[5] === game[8]) {
      return game[2];
    }

    if (game[0] === game[4] && game[4] === game[8]) {
      return game[0];
    }
    if (game[2] === game[4] && game[4] === game[6]) {
      return game[2];
    }
    return null;
  }

  render() {
    const { game, gamer } = this.state;
    const winner = this.checkWinner();
    if (winner) {
      console.log("Ganador", winner);
    }
    return (
      <Template
        title="Tic Tac Toe"
        logo={logo}
        author="Jaime Ventor"
        year="2018"
      >
        <Game
          game={game}
          gamer={gamer}
          resetGame={this.resetGame}
          handleClick={this.handleClick}
        />
      </Template>
    );
  }
}

export default App;
