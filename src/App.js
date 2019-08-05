import React, { useState } from 'react';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';

import radiocity from './images/background-left.jpg';
import adelante from './images/adelante.jpg';
import bonjour from './images/bonjour.jpg';
import { colors } from './styles/variables';
import Nav from './components/Nav';
import LandingSection from './sections/Landing';
import AboutMeSection from './sections/AboutMe';
import ProjectSection from './sections/Projects';
import ContactSection from './sections/Contact';
import FooterSection from './sections/Footer';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700&display=swap');

  @import url('https://fonts.googleapis.com/css?family=Nixie+One&display=swap');

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
      ${ colors.blackOverlay } 8%
    ),
    fixed top left / contain no-repeat url(${ radiocity }),
    rgba( 0, 0, 0 );
  width: 100%;

  @media screen and (min-width: 500px) {
    background:
    scroll linear-gradient(
      160deg,
      rgb( 253, 239, 249, .2 ),
      rgb( 236, 56, 188, .2 ),
      rgb( 115, 3, 192, .1 ), 
      ${ colors.blackOverlay } 8%
    ),
    fixed top left / contain no-repeat url(${ adelante }),
    fixed top right / contain no-repeat url(${ bonjour }),
    black;
  }
`

const App = () => {
  const [ selected, setSelected ] = useState( null );

  return(
    <>
      <Normalize />
      <GlobalStyle />
      <AppWrapper>
        <LandingSection 
          selected={ selected } 
          setSelected={ setSelected }
        />
        <AboutMeSection />
        <ProjectSection />
        <ContactSection />
        <FooterSection />
        <Nav 
          selected={ selected } 
          setSelected={ setSelected } 
        />
      </AppWrapper>
    </>
  )
}

export default App;