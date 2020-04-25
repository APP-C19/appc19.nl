/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { HiddenSpan } from '../../Hidden';

const StyledHamburger = styled.button`
  display: none;

  @media ${props => props.theme.device.phone} {
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: inline;
  }
`;

export default ({ onClickHandler = () => {}, toggleMenu = false }) => (
  <StyledHamburger
    type="button"
    onClick={() => {
      onClickHandler(!toggleMenu);
    }}>
    <HiddenSpan>Menu icon</HiddenSpan>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 352 512"
      width="20"
      height="20"
      style={{ fill: props => props.theme.color.darkGray }}>
      {toggleMenu === true ? (
        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
      ) : (
        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
      )}
    </svg>
  </StyledHamburger>
);
