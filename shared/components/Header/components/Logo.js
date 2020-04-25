/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  padding-left: 5px;
  display: flex;
  justify-content: center;
`;

export default () => (
  <div>
    <ImageWrapper>
      <img
        src="/static/images/logo.png"
        alt="cafienne logo"
        width="111"
        height="90"
      />
    </ImageWrapper>
  </div>
);
