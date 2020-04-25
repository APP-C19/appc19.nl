import styled, { css } from 'styled-components';

const hiddenStyles = css`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

const HiddenH1 = styled.h1`
  ${hiddenStyles};
`;

const HiddenH2 = styled.h2`
  ${hiddenStyles};
`;

const HiddenSpan = styled.span`
  ${hiddenStyles};
`;

export { HiddenH2, HiddenSpan };

export default HiddenH1;
