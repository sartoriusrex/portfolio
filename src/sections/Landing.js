import React from 'react';
import styled from 'styled-components';

import { TurnOnBorder, TurnOnName, FlickerLetter } from '../styles/animations';
import { colors, fonts } from '../styles/variables';
import content from '../content';
import { ReactComponent as DownArrow } from '../images/down-arrow.svg';

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
    inset 0 0 2px #FFF,
    0 0 2px #fff,           
    
    inset 1px 0 4px ${ colors.purple },  
    inset -1px 0 4px ${ colors.purple }, 
    inset 0 1px 4px ${ colors.purple },
    inset 0 -1px 4px ${ colors.purple },
    
    -2px 0 4px ${ colors.purple },  
    2px 0 4px ${ colors.purple },
    0 2px 4px ${ colors.purple },
    0 -2px 4px ${ colors.purple };
  animation: 2s 1s ${ TurnOnBorder };
`

const Intro = styled.h1`
  color: white;
  font-size: 1.4rem;
  margin-right: 1rem;
  font-weight: normal;
`

const Name = styled.h1`
  color: white;
  font-family: ${ fonts.nixie };
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
  max-width: 19em;
  height: 6em;
`

const SubtitleParagraph = styled.p`
  font-size: 1.3em;
  line-height: 1.3;
  text-align: left;
  color: white;
`

const DownArrowContainer = styled.a.attrs( props => ({
  href: props.href,
}))`
  transform: translateY(-.5em);
  text-decoration: none;

  &:hover {
    transition: transform 100ms;
    transform: translateY(0);
    cursor: pointer;
  }
`

const downArrowStyle = {
  fill: colors.purple, 
  width: '2rem',
  height: '2rem',
  marginTop: '4rem',
}

const LandingSection = (
  // { setSelected }
  ) => {

  return(
    <FirstSection id="landing" >
      <TitleContainer>
        <Intro>{ content.landing.intro }</Intro>
        
        <Name>
          <LetterD>D</LetterD>
          ennis
          {' '}
          <LetterM>M</LetterM>
          ai.
        </Name>
      </TitleContainer>

      <SubtitleContainer >
        <SubtitleParagraph>
          { content.landing.subtitle }
        </SubtitleParagraph>
      </SubtitleContainer>

      <DownArrowContainer href="#about">
        <DownArrow 
          style={ downArrowStyle }
          // onClick={ () => setSelected({ type: 'about' }) }
        />
      </DownArrowContainer>
    </FirstSection>
  )
}

export default LandingSection;