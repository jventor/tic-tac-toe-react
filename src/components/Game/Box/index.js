import React from "react";
import styled from "styled-components";
import { COLORES } from "../../../constants";

const StyledButton = styled.button`
  height: 80px;
  width: 80px;
  background-color: ${props => COLORES[props.value]};
  border: 1px solid #000;
  border-radius: 4px;

`;

const Box = ({ value, handleClick, pos }) => (
  <StyledButton onClick={() => handleClick(pos)} value={value} />
);

export default Box;
