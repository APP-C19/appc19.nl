import React from 'react';
import styled from 'styled-components';
import GridContainer from '../../../shared/components/GridContainer';

const Hero = styled.section`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

const StyledH1 = styled.h1`
  font-size: 3.6em;
  font-weight: 300;
  margin: 0;
  line-height: 1.5em;

  @media ${props => props.theme.device.phone} {
    font-size: 3em;
  }
`;

const StyledText = styled.span`
  color: ${({ theme }) => theme.colors.blue};
`;

export default () => (
  <Hero>
    <GridContainer>
      <StyledH1>
        together against COVID-19 <br />
        with <StyledText>C19-APP</StyledText>
      </StyledH1>
    </GridContainer>
  </Hero>
);
