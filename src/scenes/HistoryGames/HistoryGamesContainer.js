import React, { Component } from 'react';
import { connect } from 'react-redux';
import HistoryGames from './HistoryGames';

const mapStateToProps = state => ({
  games: state.games,
});

class HistoryGamesContainer extends Component {
  render() {
    const { games } = this.props;
    return <HistoryGames games={games} />;
  }
}

export default connect(mapStateToProps)(HistoryGamesContainer);
