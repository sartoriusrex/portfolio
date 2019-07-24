import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { colors } from '../styles/variables';
import BioContainer from '../components/BioSection';
import ReadMoreButton from '../components/ReadMoreButton';
import MoreAboutMe from '../components/MoreAboutMe';
import Love from '../components/Love';
import Use from '../components/Use'; 



const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  @media screen and (min-width: 1200px){
    display: grid;
    grid-template-columns: [ one ] 15% [ two ] auto [ three ] auto [ four ] auto [ five ] auto;
    grid-template-rows: [ row-1 ] auto [ row-2 ] auto [ row-3 ] auto [ row-4 ] auto [ row-5 ] auto;
    grid-gap: 1rem;
    grid-template-areas:
     ". mainBio mainBio hr5deg hr5deg"
     ". . use hr5deg hr5deg"
     ". . use love ."
     "hr-5deg hr-5deg hr-5deg more more"
     "hr-5deg hr-5deg hr-5deg more more";
     justify-items: center;
     align-items: center;
    margin-bottom: 4em;
  }
`
// mainBio more love use hr5deg hr-5deg
//.  mB mB hr hr
//nv .  lo hr hr
//nv .  lo ma ma
//nv hr hr us .
//.  hr hr us .

const HorizontalRule = styled.hr`
  width: 100%;

  overflow: hidden;
  border: none;
  margin: 1em 0;
  height: .25em;
  transform: ${ props => `rotate(${ props.deg })`};
  box-shadow: 
    inset 0 0 2px #FFF,
    0 0 2px #fff,           
    
    inset 2px 0 2px ${ colors.purple },  
    inset -2px 0 2px ${ colors.purple }, 
    inset 0 2px 2px ${ colors.purple },
    inset 0 -2px 2px ${ colors.purple },
    
    inset 2px 0 4px ${ colors.purple },  
    inset -2px 0 4px ${ colors.purple }, 
    inset 0 2px 4px ${ colors.purple }, 
    inset 0 -2px 4px ${ colors.purple }, 
    
    -4px 0 7px ${ colors.purple },  
    4px 0 7px ${ colors.purple },
    0 4px 7px ${ colors.purple },
    0 -4px 7px ${ colors.purple };

  @media screen and (min-width: 1200px) {
    grid-area: hr${ props => props.deg };
    transform: rotate( 35deg );
    max-width: 35em;
  }
`

const AboutMeSection = () => {
  const [ visible, setVisible ] = useState( false );
  const [ width, setWidth ] = useState( null );

  function debounce( func, wait, immediate ) {
    let timeout;

    return function() {
      let context = this, args = arguments;
      const later = function() {
        timeout = null;
        if ( !immediate ) func.apply( context, args );
      };
      var callNow = immediate && !timeout;
      clearTimeout( timeout );
      timeout = setTimeout( later, wait );
      if ( callNow ) func.apply( context, args );
    };
  };

  useEffect( () => {
    // Update the width state if windowWidth is 1200 or greater, and if width is big, make visible true to show moreaboutmetext
    const updateWidth = windowWidth => {
      windowWidth > 1199 ?
      setWidth( "big" ) :
      setWidth( "small" )

      width === "big" ? setVisible( true ) : setVisible( false );
    }

    // debounce to delay execution of updatewidth function by 400ms to improve performance
    const listenWidth = () => {
      debounce( updateWidth( window.innerWidth ), 400 );
    }

    window.addEventListener( 'resize', listenWidth );

    // cleanup = remove eventlistener on unmount
    return () => {
      window.removeEventListener( 'resize', listenWidth );
    }
  }, [ width ] )

  // compare window size and set visible to true of greater than 1199px and width to small, only on mount and unmount;
  useEffect( () => {
    window.innerWidth > 1199 ?
    setVisible( true ) && setWidth( "big" ) :
    setWidth( "small" );
  },[])

  const toggleVisible = () => {
    visible === false ?
    setVisible( true ) :
    setVisible( false )
  }

  return(
    <SecondSection id="about">
      <BioContainer />
      { width === "small" &&
        <ReadMoreButton 
        toggleVisible={ toggleVisible } 
        visible={ visible }
      />
      }
      <MoreAboutMe visible={ visible }/>
      <HorizontalRule deg="5deg" />
      <Love />
      <Use />
      <HorizontalRule deg="-5deg" />
    </SecondSection>
  )
}

export default AboutMeSection;