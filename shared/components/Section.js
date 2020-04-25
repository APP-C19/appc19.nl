import React from 'react';
import styled from 'styled-components';
import GridContainer from './GridContainer';

const Section = styled.section`
  margin: 50px 0;
`;

export default props => (
  <Section {...props}>
    <GridContainer {...props} />
  </Section>
);
