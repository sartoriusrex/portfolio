import React, { useState } from 'react';
import styled from 'styled-components';

// import { colors } from '../styles/variables';
import BioContainer from '../components/BioSection';
import ReadMoreButton from '../components/ReadMoreButton';
import MoreAboutMe from '../components/MoreAboutMe';


const SecondSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
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
    </SecondSection>
  )
}

export default AboutMeSection;