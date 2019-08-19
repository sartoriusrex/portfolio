import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import debounce from 'lodash.debounce';

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
  padding-top: 2rem;

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

const HorizontalRule = styled.hr`
  width: 99%;

  overflow: hidden;
  border: none;
  margin: 3em 0;
  height: .15em;
  transform: ${ props => `rotate(${ props.deg })`};
  box-shadow: 
    inset 0 0 1px #FFF,
    0 0 1px #fff,           
    
    inset 1px 0 1px ${ colors.purple },  
    inset -1px 0 1px ${ colors.purple }, 
    inset 0 1px 1px ${ colors.purple },
    inset 0 -1px 1px ${ colors.purple },
    
    inset 1px 0 2px ${ colors.purple },  
    inset -1px 0 2px ${ colors.purple }, 
    inset 0 1px 2px ${ colors.purple }, 
    inset 0 -1px 2px ${ colors.purple }, 
    
    -2px 0 4px ${ colors.purple },  
    2px 0 4px ${ colors.purple },
    0 2px 4px ${ colors.purple },
    0 -2px 4px ${ colors.purple };

  @media screen and (min-width: 1200px) {
    grid-area: hr${ props => props.deg };
    transform: rotate( 35deg );
    max-width: 35em;
  }
`

const AboutMeSection = React.forwardRef( ( props, ref ) => {
  const [ visible, setVisible ] = useState( false );
  const [ width, setWidth ] = useState( null );

  useEffect( () => {
    // Update the width state if windowWidth is 1200 or greater, and if width is big, make visible true to show moreaboutmetext - Debounce the function - wait until user stops resizing and run after 500ms
    const updateWidth = debounce( function( windowWidth ){
      if ( windowWidth > 1199 ) {
        setWidth( "big" );
        setVisible( true );
      } else {
        setWidth( "small" );
        setVisible( false );
      }

    }, 500 );

    window.addEventListener( 
      'resize', 
      () => updateWidth( window.window.innerWidth ) 
    );

    // cleanup = remove eventlistener on unmount
    return () => {
      window.removeEventListener( 
        'resize', 
        () => updateWidth( window.window.innerWidth ) 
      );
    }
  }, [ props, width ] )

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
    <SecondSection ref={ ref } id="about">
      <BioContainer />
      { 
        width === "small" &&
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
});

export default AboutMeSection;