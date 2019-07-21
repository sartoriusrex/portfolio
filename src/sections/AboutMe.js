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
  max-width: 30em;
  overflow: hidden;
  border: none;
  margin: 1em 0;
  height: .3em;
  transform: ${ props => `rotate(${ props.deg })`};
  box-shadow: 
    inset 0 0 5px #FFF,
    0 0 5px #fff,           
    
    inset 5px 0 5px ${ colors.purple },  
    inset -5px 0 5px ${ colors.purple }, 
    inset 0 5px 5px ${ colors.purple },
    inset 0 -5px 5px ${ colors.purple },
    
    inset 5px 0 7px ${ colors.purple },  
    inset -5px 0 7px ${ colors.purple }, 
    inset 0 5px 7px ${ colors.purple }, 
    inset 0 -5px 7px ${ colors.purple }, 
    
    -7px 0 10px ${ colors.purple },  
    7px 0 10px ${ colors.purple },
    0 7px 10px ${ colors.purple },
    0 -7px 10px ${ colors.purple };
`

const AboutMeSection = () => {
  const [ visible, setVisible ] = useState( false );

  const toggleVisible = () => {
    visible === false ?
    setVisible( true ) :
    setVisible( false )
  }

  return(
    <SecondSection>
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