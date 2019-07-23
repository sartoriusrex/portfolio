import React, { useState } from 'react';
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
`

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
`

const AboutMeSection = () => {
  const [ visible, setVisible ] = useState( true );

  const toggleVisible = () => {
    visible === false ?
    setVisible( true ) :
    setVisible( false )
  }

  return(
    <SecondSection id="about">
      <BioContainer />
      <ReadMoreButton 
        toggleVisible={ toggleVisible } 
        visible={ visible }
      />
      <MoreAboutMe visible={ visible }/>
      <HorizontalRule deg="5deg" />
      <Love />
      <Use />
      <HorizontalRule deg="-5deg" />
    </SecondSection>
  )
}

export default AboutMeSection;