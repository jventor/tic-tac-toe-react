import React, { Component } from 'react';
import logo from './logo.png';
import Template from '../layout/Template';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { PLAYER1, PLAYER2, BOX_EMPTY } from '../constants';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, HistoryGames } from '../scenes';

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box; }
  body { margin: 0; }
`;

const INITIAL_STATE = {
  game: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  gamer: 1,
  finished: false,
  games: [],
};
class App extends Component {
  state = INITIAL_STATE;

  resetGame = () => {
    this.setState({
      game: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      gamer: 1,
      finished: false,
    });
  };

  handleClick = i => {
    const { game, finished } = this.state;
    if (game[i] === BOX_EMPTY && !finished) {
      this.setState(prevState => {
        let newGame = prevState.game;
        newGame[i] = prevState.gamer;

        let newFinished = false;
        let newGames = prevState.games;
        if (
          newGame.filter(box => box > 0).length > 8 ||
          this.checkWinner() > 0
        ) {
          newFinished = true;
          newGames.push(newGame);
        }
        let newGamer = prevState.gamer === PLAYER1 ? PLAYER2 : PLAYER1;

        return { game: newGame, gamer: newGamer, finished: newFinished };
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
    const { game, gamer, finished, games } = this.state;
    const winner = this.checkWinner();
    let message = '';

    if (finished) {
      if (winner) {
        message = 'Winner Player ' + winner;
      } else {
        message = 'No winner, reset to start a new game';
      }
    } else {
      message = 'Player ' + gamer + ' turn';
    }

    return (
      <BrowserRouter>
        <Template
          title="Tic Tac Toe"
          logo={logo}
          author="Jaime Ventor"
          year="2018"
        >
          <Route
            path="/"
            exact
            component={() => (
              <Home
                game={game}
                finished={finished}
                message={message}
                resetGame={this.resetGame}
                handleClick={this.handleClick}
              />
            )}
          />
          <Route
            path="/history"
            component={() => <HistoryGames games={games} />}
          />
        </Template>
      </BrowserRouter>
    );
  }
}

export default App;
