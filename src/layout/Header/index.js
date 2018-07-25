import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background: #444;
  padding: 20px;
  justify-content: center;
  position: relative;
`;

const StyledImg = styled.img`
  display: inline-block;
  max-height: 80px;
`;

const Header = ({ logo }) => (
  <StyledHeader>
    <StyledImg src={logo} />
  </StyledHeader>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired
};

export default Header;


