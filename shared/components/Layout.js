import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import theme from '../theme';
import Footer from './Footer';
import Header from './../containers/Header';

/* eslint-disable no-unused-expressions */
injectGlobal`
@font-face {
    font-family: SofiaProLight;
    font-weight: 300;
    src: url(../static/fonts/SofiaProLight.woff2),
    url(../static/fonts/SofiaProLight.woff);

  }

  @font-face {
    font-family: SofiaProRegular;
    font-weight: 400;
    src: url(../static/fonts/SofiaProRegular.woff2),
    url(../static/fonts/SofiaProRegular.woff);
  }

  @font-face {
    font-family: SofiaProBold;
    font-weight: 700;
    src: url(../static/fonts/SofiaProBold.woff2),
    url(../static/fonts/SofiaProBold.woff);
  }

html {
  height: 100%;
}

* {
  box-sizing: border-box;
}

body {
    font-family: 'SofiaProRegular';
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    line-height: 1.5;

   > div:first-child {
      height: 100%;
    }
  }`;

const PageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  > * {
    flex-shrink: 0;
  }
`;

export default children => (
  <ThemeProvider theme={theme}>
    <PageWrapper>
      <Header />
      <main {...children} />
      <Footer />
    </PageWrapper>
  </ThemeProvider>
);
