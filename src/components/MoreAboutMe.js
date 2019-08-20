import React from 'react';
import styled,{ css } from 'styled-components';

import { colors } from '../styles/variables';
import content from '../content';


const MoreAboutMeContainer = styled.div`
  width: 100%;
  max-width: 35rem;
  margin: .5em 0;
  position: relative;
  z-index: 10;
  will-change: opacity, transform;
  opacity: 0;
  transform: translateY( -2em );
  transition: transform 150ms ease-in, opacity 150ms ease-in;
  overscroll-behavior: none;

  ${ props => props.visible && css`
    transform: translateY( 0em );
    opacity: 1;
  `}

  @media screen and (min-width: 1200px) {
    position: static;
    grid-area: more;
    place-self: start;
  }
`

const MoreAboutMeText = styled.p`
  position: absolute;
  top: 0;
  left: 2.5%;
  width: 95%;
  font-size: .9em;
  color: white;
  text-align: justify;
  z-index: 10;
  background-color: black;
  padding: 1em;
  line-height: 1.5;
  box-shadow: 
    inset 0 0 2px #FFF,
    0 0 2px #fff,           
    
    inset 1px 0 4px ${ colors.turquoise },  
    inset -1px 0 4px ${ colors.turquoise }, 
    inset 0 1px 4px ${ colors.turquoise },
    inset 0 -1px 4px ${ colors.turquoise },
    
    -2px 0 4px ${ colors.turquoise },  
    2px 0 4px ${ colors.turquoise },
    0 2px 4px ${ colors.turquoise },
    0 -2px 4px ${ colors.turquoise };

  @media screen and (min-width: 1200px) {
    position: static;
  }
`

const MoreAboutMe = ({ visible }) => (
  <MoreAboutMeContainer visible={ visible }>
    <MoreAboutMeText visible={ visible }>
      { content.about }
    </MoreAboutMeText>
  </MoreAboutMeContainer>
)

export default MoreAboutMe;