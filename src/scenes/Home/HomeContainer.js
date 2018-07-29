import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import { boardReset as resetGame, boardClick } from '../../store';

const mapDispatchToProps = {
  resetGame: resetGame,
  handleClick: boardClick,
};

const mapStateToProps = state => ({
  game: state.game,
  finished: state.finished,

});

class HomeContainer extends Component {
  render() {
    const { game, finished, resetGame, handleClick } = this.props;
    return (
      <Home
        game={game}
        finished={finished}

        resetGame={resetGame}
        handleClick={handleClick}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);
