import React from 'react';
import Board from '../../components/Game/Board';
import PropTypes from 'prop-types';
import { HISTORY_BOARD_SIZE } from '../../constants';
import { Flex, Box } from 'rebass';

const HistoryGames = ({ games }) => (
  <Flex flexWrap="wrap">
    {games.map((x, index) => (
      <Box mx={3} my={3} key={index}>
        <Board game={x} boxSize={HISTORY_BOARD_SIZE} />
      </Box>
    ))}
  </Flex>
);

HistoryGames.propTypes = {
  games: PropTypes.array.isRequired,
};

export default HistoryGames;
