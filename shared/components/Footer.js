import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.8em;
  margin-top: auto;
`;

const StyledSpan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default () => (
  <Footer>
    <StyledSpan>SpronQ BV &#169; 2020</StyledSpan>
  </Footer>
);
