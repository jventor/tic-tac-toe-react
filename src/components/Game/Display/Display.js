import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDisplay = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Display = ({ message }) => <StyledDisplay>{message}</StyledDisplay>;

Display.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Display;
