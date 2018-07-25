import React from "react";
import styled from "styled-components";
import { Row, Column } from "rebass";

import Box from "../Box";

const StyledBoard = styled.div`
  margin: 0px;
`;

const Board = ({ game, handleClick }) => (
  <StyledBoard>
    <Row space={0}>
      <Column>
        <Box handleClick={handleClick} value={game[0]} pos={0} />
      </Column>
      <Column>
        <Box handleClick={handleClick} value={game[1]} pos={1} />
      </Column>
      <Column>
        <Box handleClick={handleClick} value={game[2]} pos={2} />
      </Column>
    </Row>
    <Row>
      <Column>
        <Box handleClick={handleClick} value={game[3]} pos={3} />
      </Column>
      <Column>
        <Box handleClick={handleClick} value={game[4]} pos={4} />
      </Column>
      <Column>
        <Box handleClick={handleClick} value={game[5]} pos={5} />
      </Column>
    </Row>
    <Row>
      <Column>
        <Box handleClick={handleClick} value={game[6]} pos={6} />
      </Column>
      <Column>
        <Box handleClick={handleClick} value={game[7]} pos={7} />
      </Column>
      <Column>
        <Box handleClick={handleClick} value={game[8]} pos={8} />
      </Column>
    </Row>
  </StyledBoard>
);

export default Board;
