import React, { useState, useCallback, useEffect } from 'react';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';
import throttle from 'lodash.throttle';

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
  const [ aboutRef, setAboutRef ] = useState( null );
  const [ projectsRef, setProjectsRef ] = useState( null );
  const [ contactRef, setContactRef ] = useState( null );
  

  const aboutSection = useCallback( node => {
    if( node !== null ) {
      // setAboutY( node.getBoundingClientRect().top + 100 );
      setAboutRef( node.getBoundingClientRect() );
    }
  }, []);

  const projectSection = useCallback( node => {
    if( node !== null ) {
      setProjectsRef( node.getBoundingClientRect() );
    }
  }, []);

  const contactSection = useCallback( node => {
    if( node !== null ) {
      setContactRef( node.getBoundingClientRect() );
    }
  }, []);

  let bound = window.screen.availHeight / 3;
  let about = aboutRef ? aboutRef.top - bound : 0 ;
  let project = projectsRef ? projectsRef.top - bound : 0;
  let contact = contactRef ? contactRef.top - bound : 0;



  useEffect( () => {
    function listenScroll( scrollPosition ) {
      console.log( scrollPosition );

      if( scrollPosition > contact ){
        setSelected( 'contact' )
      } else if ( scrollPosition > project ) {
        setSelected( 'projects' );
      } else if ( scrollPosition > about ) {
        setSelected( 'about')
      } else {
        setSelected( null );
      }
    }

    window.addEventListener( 
      'scroll', 
      () => listenScroll( window.pageYOffset )
    );

    return () => {
      window.removeEventListener( 
        'scroll', 
        () => listenScroll( window.pageYOffset )
      );
    }
  }, [ about, project, contact ] );

  

  // let scrollPosition = window.pageYOffset;
  // let bound = window.screen.availHeight / 3;
  // let aboutLower = aboutRef.bottom - bound;
  // let aboutUpper = aboutRef.top - bound;

  // useEffect( () => {
    
  //   console.log( window.pageYOffset );
  //   // const updateWindowPosition = scrollPosition => {
  //   //   let bound = window.screen.availHeight / 3;
  //   //   let aboutLower = aboutRef.bottom - bound;
  //   //   let aboutUpper = aboutRef.top - bound;
  //   //   let projectsLower = projectsRef.bottom - bound;
  //   //   let projectsUpper = projectsRef.top - bound;
  //   //   let contactLower = contactRef.bottom - bound;
  //   //   let contactUpper = contactRef.top - bound;
  //   //   console.log(scrollPosition);
  //   //   console.log( scrollPosition < aboutLower && scrollPosition > aboutUpper );

  //   //   // if ( scrollPosition <= aboutUpper && scrollPosition > aboutLower ){
  //   //   //   setSelected( 'about' );
  //   //   // } else if ( scrollPosition <= projectsUpper && scrollPosition > projectsLower ) {
  //   //   //   setSelected( 'projects' );
  //   //   // } else if ( scrollPosition <= contactUpper && scrollPosition > contactLower ) {
  //   //   //   setSelected( 'contact' );
  //   //   // } else {
  //   //   //   setSelected( null );
  //   //   // }
  //   // }

  //   // const listenScroll = () => {
  //   //   updateWindowPosition( window.pageYOffset );
  //   // }

  //   // window.addEventListener( 'scroll', listenScroll )

  //   // return () => {
  //   //   window.removeEventListener( 'scroll', throttle( listenScroll, 1000000 ) );
  //   // }
  // }, [  ]);

  return(
    <>
      <Normalize />
      <GlobalStyle />
      <AppWrapper >
        <LandingSection 
          selected={ selected } 
          setSelected={ setSelected }
        />
        <AboutMeSection ref={ aboutSection } />
        <ProjectSection ref={ projectSection }/>
        <ContactSection ref={ contactSection }/>
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