import React from "react";
import styled from "styled-components";
import { COLORES } from "../../../constants";

const StyledButton = styled.button`
  height: 80px;
  width: 80px;
  background-color: ${props => COLORES[props.value]};
  border: 1px solid #000;
  border-radius: 4px;
  margin: 1px;
`;

const Box = ({ value, handleClick }) => (
  <StyledButton onClick={handleClick} value={value} />
);

export default Box;
