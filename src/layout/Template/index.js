import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Template = ({ title, logo, children, author, year }) => (
  <StyledWrapper>
    <Header title={title} logo={logo} />
    <Body>{children}</Body>
    <Footer author={author} year={year} />
  </StyledWrapper>
);

Template.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default Template;
