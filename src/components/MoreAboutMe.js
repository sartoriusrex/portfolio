import React from 'react';
import styled,{ css } from 'styled-components';

import { colors } from '../styles/variables';


const MoreAboutMeContainer = styled.div`
  width: 100%;
  max-width: 25em;
  margin: .5em 0;
  position: relative;
  z-index: 10;
  will-change: opacity, transform;
  opacity: 0;
  transform: translateY( -2em );
  transition: transform 150ms ease-in, opacity 150ms ease-in;

  ${ props => props.visible && css`
    transform: translateY( 0em );
    opacity: 1;
  `}
`

const MoreAboutMeText = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: .8em;
  color: white;
  text-align: justify;
  z-index: 10;
  background-color: rgba( 0, 0, 0, .85 );
  padding: 1em .5em;
  border-top: 1px solid ${ colors.turquoise };
  border-bottom: 1px solid ${ colors.turquoise };
`

const MoreAboutMe = ({ visible }) => (
  <MoreAboutMeContainer visible={ visible }>
    <MoreAboutMeText visible={ visible }>
      Born and raised in raised in Wichita, Kansas to immigrant, 
      Vietnamese parents. Studied abroad in Murcia, Spain where I met my Swiss wife. Moved to Zurich, Switzerland and tasted the start-up life. Fell in love with Brazilian Jiu Jitsu. Witnessed the birth of my daughter. Moved to Hawaii, where we all live & play today. Life is Good.
    </MoreAboutMeText>
  </MoreAboutMeContainer>
)

export default MoreAboutMe;