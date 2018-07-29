import React from 'react';
import styled from 'styled-components';
import { COLORES } from '../../../constants';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  height: ${props => props.boxSize}px;
  width: ${props => props.boxSize}px;
  background-color: ${props => COLORES[props.value]};
  border: 1px solid #000;
  border-radius: 4px;
  margin: 0px;
`;

const Box = ({ boxSize, value, handleClick, position }) => {
  if (handleClick)
    return (
      <StyledButton
        onClick={() => handleClick(position)}
        value={value}
        boxSize={boxSize}
      />
    );
  else return <StyledButton value={value} boxSize={boxSize} disabled="true" />;
};

Box.defaultProps = {
  handleClick: null,
};
Box.propTypes = {
  boxSize: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
};

export default Box;
