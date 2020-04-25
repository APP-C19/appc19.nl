import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { pages } from './../../../constants';

const NavList = styled.ul`
  margin: 0;
  padding: 0;

  width: 100%;
  width: fill-available;
  width: -webkit-fill-available;
  width: -moz-available;
  display: flex;
  justify-content: flex-end;
  align-items: center;

    li {
      display: inline;
      &:not(:last-child) {
        margin-right: 20px;
      }

      a {
        font-family: ${props => props.theme.fontFamily};
        text-decoration: none;
        color: ${props => props.theme.colors.darkGrey};

        &:hover,
        &.active {
          border-bottom-width: 1px;
          border-bottom-style: solid;
          border-bottom-color: ${props => props.theme.colors.darkGrey};
          padding-bottom: 5px;
        }
      }
    }
  
  @media ${props => props.theme.device.phone} {
    display: ${props => (props.show ? 'none' : 'flex')};
    flex-direction: column;
    align-items: flex-start;

    li {
      width: 100%;
      width: fill-available;
      width: -webkit-fill-available;
      width: -moz-available;
      margin-top: 40px;
      margin-right: 0 !important;
      border-bottom: solid thin ${props => props.theme.colors.darkGrey};
      list-style: none;

      a {
        font-family: ${props => props.theme.fontFamily};
        text-decoration: none;
        color: ${props => props.theme.colors.darkGrey};
  
        &:hover,
        &.active {
          border: none;
        }
    }
  }
`;

/* eslint-disable jsx-a11y/anchor-is-valid */
const NavListItem = props => {
  const { url, pathname, label, target, rel } = props;
  return (
    <li>
      <Link href={url}>
        <a
          className={pathname === url ? 'active' : ''}
          target={target}
          rel={rel}>
          {label}
        </a>
      </Link>
    </li>
  );
};

export default ({ router = {}, show }) => (
  <NavList show={show}>
    {pages.map(page => (
      <NavListItem
        key={page.url}
        url={page.url}
        pathname={router.pathname}
        label={page.label}
        target={page.target}
        rel={page.rel}
      />
    ))}
  </NavList>
);
