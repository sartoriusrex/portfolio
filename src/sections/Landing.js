import React from 'react';
import styled from 'styled-components';

import { TurnOnBorder, TurnOnName, FlickerLetter } from '../styles/animations';
import { colors } from '../styles/variables';

const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .5em;
  width: 90%;
  height: 5em;
  max-width: 25rem;
  margin: 30px auto;
  padding: 0px 1em;
  box-shadow: 
    inset 0 0 10px #FFF,
    0 0 10px #fff,           
    
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
  animation: 2s .5s ${ TurnOnBorder };
`

const Intro = styled.h1`
  color: white;
  font-size: 1.5rem;
  margin-right: 1rem;
`

const Name = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Nixie+One&display=swap');

  color: white;
  font-family: "Nixie One", sans-serif;
  font-size: 1.8em;
  text-align: center;
  text-shadow:
    0 0 10px #fff, 
    0 0 20px ${ colors.purple }, 
    0 0 30px ${ colors.purple }, 
    0 0 40px ${ colors.purple }, 
    0 0 70px ${ colors.purple }, 
    0 0 80px ${ colors.purple }, 
    0 0 100px ${ colors.purple }, 
    0 0 150px ${ colors.purple };
  animation: 2s .5s ${ TurnOnName };
`

const LetterM = styled.span`
  animation: 7s 2s infinite ${ FlickerLetter };
`

const LetterD = styled.span`
  animation: 5s 4s infinite ${ FlickerLetter };
`

const SubtitleCOntainer = styled.div`
  
`

const LandingSection = () => {
  return(
    <FirstSection>
      <TitleContainer>
        <Intro>Hey, I'm</Intro>
        <Name>
          <LetterD>D</LetterD>
          ennis
          {' '}
          <LetterM>M</LetterM>
          ai
        </Name>
      </TitleContainer>
    </FirstSection>
  )
}

export default LandingSection;