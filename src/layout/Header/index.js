import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Box } from 'rebass';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background: #444;
  padding: 20px;
  justify-content: space-between;
  position: relative;
`;

const StyledImg = styled.img`
  display: inline-block;
  max-height: 90px;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 10px;

  &.active {
    border-bottom: 2px solid #fff;
  }
  &:hover {
    color: #999;
  }
`;

const Header = ({ logo }) => (
  <StyledHeader>
    <StyledImg src={logo} />
    <Box>
      <StyledLink to="/" exact>
        Home
      </StyledLink>
      <StyledLink to="/history">History</StyledLink>
    </Box>
  </StyledHeader>
);

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Header;
