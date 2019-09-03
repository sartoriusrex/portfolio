import React, { useState } from 'react';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';
// import debounce from 'lodash.debounce';

import adelante from './images/adelante.jpg';
import bonjour from './images/bonjour.jpg';
import { colors } from './styles/variables';
import ModalBackground from './components/ModalBackground';
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
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image:
    linear-gradient(
      160deg,
      rgb( 236, 56, 188 ),
      rgb( 115, 3, 192 ), 
      black 4%
    );
  width: 100%;
  position: relative;

  @media screen and (min-width: 500px) {
    background:
      linear-gradient(
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

// const initialState = { selected: null };

// const reducer = ( state, action ) => {
//   switch ( action.type ) {
//     case "contact":
//       return { selected: "contact" };
//     case "projects":
//       return { selected: "projects" };
//     case "about":
//       return { selected: "about" };
//     default:
//       return { selected: null }
//   }
// }

const App = () => {
  // const [ state, dispatch ] = useReducer( reducer, initialState );
  const [ visible, setVisible ] = useState( false );
  // const [ aboutRef, setAboutRef ] = useState( 0 );
  // const [ projectsRef, setProjectsRef ] = useState( 0 );
  // const [ contactRef, setContactRef ] = useState( 0 );
  
  // const bound = window.screen.availHeight / 3;

  // const aboutSection = useCallback( node => {
  //   if( node !== null ) {
  //     // setAboutY( node.getBoundingClientRect().top + 100 );
  //     setAboutRef( node.getBoundingClientRect().top - bound );
  //   }
  // }, [ bound ]);

  // const projectSection = useCallback( node => {
  //   if( node !== null ) {
  //     setProjectsRef( node.getBoundingClientRect().top - bound );
  //   }
  // }, [ bound ]);

  // const contactSection = useCallback( node => {
  //   if( node !== null ) {
  //     setContactRef( node.getBoundingClientRect().top - bound );
  //   }
  // }, [ bound ]);

  // useEffect( () => {
  //   const listenScroll = debounce( function( scrollPosition ) {
  //     if( scrollPosition > contactRef ){
  //       state.selected !== 'contact' && dispatch({ type: 'contact' })
  //     } else if ( scrollPosition > projectsRef ) {
  //       state.selected !== 'projects' && dispatch({ type: 'projects' });
  //     } else if ( scrollPosition > aboutRef ) {
  //       state.selected !== 'about' && dispatch({ type: 'about' })
  //     } else {
  //       dispatch({ selected: null });
  //     }
  //   }, 250 );

  //   window.addEventListener( 
  //     'scroll', 
  //     () => listenScroll( window.pageYOffset )
  //   );

  //   return () => {
  //     window.removeEventListener( 
  //       'scroll', 
  //       () => listenScroll( window.pageYOffset )
  //     );
  //   }
  // }, [ aboutRef, projectsRef, contactRef, state.selected ] );

  return(
    <>
      <Normalize />
      <GlobalStyle />
      <AppWrapper >
        <ModalBackground 
          visible={ visible }
          setVisible={ setVisible }
        />
        <LandingSection 
          // setSelected={ dispatch }
        />
        <AboutMeSection 
          // ref={ aboutSection } 
          visible={ visible } 
          setVisible={ setVisible }
        />
        <ProjectSection 
          // ref={ projectSection } 
        />
        <ContactSection 
          // ref={ contactSection } 
        />
        <FooterSection />
        <Nav 
          // selected={ state.selected } 
          // setSelected={ dispatch } 
          visible={ visible }
        />
      </AppWrapper>
    </>
  )
}

export default App;