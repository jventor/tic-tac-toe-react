import React from "react";
import styled from "styled-components";


const StyledDisplay = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
  border: 1px solid #000;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Display = ({ message }) => <StyledDisplay>{ message }</StyledDisplay>;

export default Display;
