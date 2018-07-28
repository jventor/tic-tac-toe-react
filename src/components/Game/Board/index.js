import React from 'react';
import styled from 'styled-components';
import { Row, Column } from 'rebass';
import PropTypes from 'prop-types';

import Box from '../Box';

const StyledBoard = styled.div`
  margin: 0px;
`;

const Board = ({ game, handleClick, boxSize }) => (
  <StyledBoard>
    <Row mx={0}>
      <Column px={1} py={1} mb={0}>
        <Box
          handleClick={handleClick}
          value={game[0]}
          position={0}
          boxSize={boxSize}
        />
      </Column>
      <Column px={1} py={1} mb={0}>
        <Box
          handleClick={handleClick}
          value={game[1]}
          position={1}
          boxSize={boxSize}
        />
      </Column>
      <Column px={1} py={1} mb={0}>
        <Box
          handleClick={handleClick}
          value={game[2]}
          position={2}
          boxSize={boxSize}
        />
      </Column>
    </Row>
    <Row mx={0}>
      <Column px={1} py={1} mb={0}>
        <Box
          handleClick={handleClick}
          value={game[3]}
          position={3}
          boxSize={boxSize}
        />
      </Column>
      <Column px={1} py={1} mb={0}>
        <Box
          handleClick={handleClick}
          value={game[4]}
          position={4}
          boxSize={boxSize}
        />
      </Column>
      <Column px={1} py={1} mb={0}>
        <Box
          handleClick={handleClick}
          value={game[5]}
          position={5}
          boxSize={boxSize}
        />
      </Column>
    </Row>
    <Row mx={0}>
      <Column px={1} py={1} mb={0}>
        <Box
          handleClick={handleClick}
          value={game[6]}
          position={6}
          boxSize={boxSize}
        />
      </Column>
      <Column px={1} py={1} mb={0}>
        <Box
          handleClick={handleClick}
          value={game[7]}
          position={7}
          boxSize={boxSize}
        />
      </Column>
      <Column px={1} py={1} mb={0}>
        <Box
          handleClick={handleClick}
          value={game[8]}
          position={8}
          boxSize={boxSize}
        />
      </Column>
    </Row>
  </StyledBoard>
);

Board.defaultProps = {
  boxSize: 80,
  handleClick: null,
};

Board.propTypes = {
  game: PropTypes.array.isRequired,
  handleClick: PropTypes.func,
  boxSize: PropTypes.number,
};

export default Board;
