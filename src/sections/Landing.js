import React from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";

import { TurnOnBorder, TurnOnName, FlickerLetter } from '../styles/animations';
import { colors } from '../styles/variables';
import content from '../content';

const FirstSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .5em;
  width: 90%;
  height: 6em;
  max-width: 25rem;
  margin: 30px 10px;
  padding: .5em;
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
  animation: 2s 1s ${ TurnOnBorder };
`

const Intro = styled.h1`
  color: white;
  font-size: 1.4rem;
  margin-right: 1rem;
  font-weight: normal;
`

const Name = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Nixie+One&display=swap');

  color: white;
  font-family: "Nixie One", sans-serif;
  font-size: 1.6em;
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
  animation: 2s 1s ${ TurnOnName };
`

const LetterM = styled.span`
  animation: 7s 2s infinite ${ FlickerLetter };
`

const LetterD = styled.span`
  animation: 5s 3s infinite ${ FlickerLetter };
`

const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  max-width: 18em;
  height: 6em;
`

const SubtitleParagraph = styled.p`
  font-size: 1.4em;
  text-align: left;
  color: white;
`

const LandingSection = ({ selected, setSelected }) => {
  return(
    <FirstSection id="landing">
      <TitleContainer>
        <Intro>{ content.landing.intro }</Intro>
        <Name>
          <LetterD>D</LetterD>
          ennis
          {' '}
          <LetterM>M</LetterM>
          ai
        </Name>
      </TitleContainer>
      <Link
        to="landing"
        smooth={ true }
        duration={ 50 }
        offset={ -150 }
        onSetActive={ () => setSelected( null ) }
        spy={ true }
      >
        <SubtitleContainer >
          <SubtitleParagraph>
            { content.landing.subtitle }
          </SubtitleParagraph>
        </SubtitleContainer>
      </Link>
    </FirstSection>
  )
}

export default LandingSection;