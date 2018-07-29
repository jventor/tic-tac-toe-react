import React, { Component } from 'react';
import logo from './logo.png';
import Template from '../layout/Template';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, HistoryGames } from '../scenes';
import { connect } from 'react-redux';
import { checkWinner } from '../utils';
import { changeMessageDisplay } from '../store';

injectGlobal`
  ${normalize()};
  * { box-sizing: border-box; }
  body { margin: 0; }
`;
class App extends Component {
  render() {
    const { game, gamer, finished, changeMessageDisplay } = this.props;

    if (finished) {
      const winner = checkWinner(game);
      if (winner) changeMessageDisplay('Winner Player ' + winner);
      else changeMessageDisplay('No winner, reset to start a new game');
    } else changeMessageDisplay('Player ' + gamer + ' turn');

    return (
      <BrowserRouter>
        <Template
          title="Tic Tac Toe"
          logo={logo}
          author="Jaime Ventor"
          year="2018"
        >
          <Route path="/" exact component={Home} />
          <Route path="/history" component={HistoryGames} />
        </Template>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  changeMessageDisplay: changeMessageDisplay,
};

const mapStateToProps = state => ({
  game: state.game,
  gamer: state.gamer,
  finished: state.finished,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
