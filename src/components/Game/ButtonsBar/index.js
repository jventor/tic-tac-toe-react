import React from "react";
import styled from "styled-components";

const StyledBar = styled.div`
  justify-content: center;
  display: flex;
`;

const StyledButton = styled.button`
  background: #0066cc;
  color: #fff;
  border: 0;
  text-transform: uppercase;
  font-size: 24px;
  padding: 10px 15px;
  margin-top: 15px;
`;

const ButtonsBar = ({ resetGame }) => (
  <StyledBar>
    <StyledButton onClick={resetGame}>Reset</StyledButton>
  </StyledBar>
);

export default ButtonsBar;
