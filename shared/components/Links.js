import styled from 'styled-components';

const StyledLinkInText = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: bold;
  transiation: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export default StyledLinkInText;
