import React from 'react';
import styled from 'styled-components';

// Set the margins on the right side and left side
// depending on the width of the screen

const Container = styled.div`
  position: relative;
  width: calc(100% - 10vw);
  max-width: 1000px
  margin: 0 auto;
`;

export default props => {
  const { children } = props;
  return <Container>{children}</Container>;
};
