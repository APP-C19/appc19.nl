import styled, { css } from 'styled-components';

export const StyledH2 = styled.h2`
  font-weight: 500;
  margin-top: 0;
`;

const styledBlock = css`
  margin-bottom 40px;
`;

export const FlexBlock = styled.div`
  ${styledBlock};
  display: flex;
`;

export const Block = styled.div`
  ${styledBlock};
`;
