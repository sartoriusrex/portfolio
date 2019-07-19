import React from 'react';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';

import background from './images/background-left.jpg';
import { colors } from './styles/variables';
import Nav from './components/Nav';
import LandingSection from './sections/Landing';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700&display=swap');

  html {
    box-sizing: border-box;
    font-family: 'IBM Plex Mono', Mono, Roboto, sans-serif;
  }

  * {
    padding: 0;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background:
    scroll linear-gradient(
      160deg,
      rgb( 253, 239, 249, .2 ),
      rgb( 236, 56, 188, .2 ),
      rgb( 115, 3, 192, .1 ), 
      ${ colors.blackOverlay } 20%
    ),
    fixed top left / contain no-repeat url(${ background }),
    rgba( 0, 0, 0 );
  width: 100%;
`

const App = () => (
  <>
    <Normalize />
    <GlobalStyle />
    <AppWrapper>
      <LandingSection />
      <Nav />
    </AppWrapper>
  </>
);

export default App;