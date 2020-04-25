import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Logo from './components/Logo';
import { HiddenH2 } from './../../../shared/components/Hidden';
import Navigation from './components/Navigation';
import Hamburger from './components/Hamburger';
import GridContainer from '../GridContainer';

const Header = styled.header`
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const NavbarHeader = styled.div`
  display: flex;
`;

const Nav = styled.nav`
  display: flex;

  @media ${props => props.theme.device.phone} {
    flex-direction: column;
  }
`;

const StyledA = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
`;

const FlexWrapper = styled.div`
  @media ${props => props.theme.device.phone} {
    width: fill-available;
    width: -webkit-fill-available;
    width: -moz-available;
    display: flex;
    justify-content: flex-end;
  }
`;

export default withRouter(props => {
  const { router, setToggleMenu, toggleMenu } = props;
  return (
    <Header>
      <GridContainer>
        <Nav>
          <NavbarHeader>
            <StyledA href="/">
              <Logo />
            </StyledA>
            <HiddenH2>Main navigation</HiddenH2>
            <FlexWrapper>
              <Hamburger
                onClickHandler={setToggleMenu}
                toggleMenu={toggleMenu}
              />
            </FlexWrapper>
          </NavbarHeader>
          <Navigation router={router} show={!toggleMenu} />
        </Nav>
      </GridContainer>
    </Header>
  );
});
