import styled from 'styled-components';
import RenderHtml from './RenderHtml';
import { colors, grid, gridPercentages, breakpoints } from './CSSConstants';

export const Container = styled.section`
  width: 100%;
  max-width: ${grid.maxWidth}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  margin: 40px auto;
  padding: 0 ${gridPercentages.outsideGutterWidth}%;

  &:after {
    @media (min-width: ${breakpoints.xl.from}px) {
      content: '';
      display: block;
      width: calc(33% - 30px);
      height: 0;
      }
    }
  }
`;

export const Header = styled.h2`
  font-size: 48px;
  line-height: 58px;
  font-weight: normal;
  margin: 0;
  text-align: center;
  width: 100%;
`;

export const Subheader = styled.h3`
  margin: 0;
  font-size: 24px;
  line-height: 26px;
  font-weight: 300;
  color: ${colors.darkGrey};
`;

export const Article = styled.article`
  text-align: left;
  background: white;
  position: relative;
  margin-top: 50px;
  text-decoration: none;
  border: solid 1px ${({ theme }) => theme.colors.lightGrey};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease-in-out;
  &:hover,
  &:focus {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }
  @media (min-width: ${breakpoints.l.from}px) {
    width: calc(50% - 30px);
  }

  @media (min-width: ${breakpoints.xl.from}px) {
    width: calc(33% - 30px);
  }
`;

export const Content = styled.div`
  padding: 24px 24px 60px;
`;

export const StyledHtml = styled(RenderHtml)`
  font-size: 16px;
  line-height: 19px;
  font-weight: 300;
  color: ${colors.darkGrey};
  margin-bottom: 24px;
`;
