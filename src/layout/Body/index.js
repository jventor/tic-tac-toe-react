import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBody = styled.div`
  background: #eee;
  padding: 20px;
  justify-content: center;
  display: flex;
  height: 100vh;
`;

const Body = ({ children }) => (
  <StyledBody>
    {children}
  </StyledBody>
);

Body.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Body;
