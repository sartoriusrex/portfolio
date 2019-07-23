import React from 'react';
import styled,{ css } from 'styled-components';

import { colors } from '../styles/variables';
import content from '../content';


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
  font-size: .9em;
  color: white;
  text-align: justify;
  z-index: 10;
  background-color: black;
  padding: 1em .5em;
  line-height: 1.5;
  border-top: 1px solid ${ colors.turquoise };
  border-bottom: 1px solid ${ colors.turquoise };
`

const MoreAboutMe = ({ visible }) => (
  <MoreAboutMeContainer visible={ visible }>
    <MoreAboutMeText visible={ visible }>
      { content.about }
    </MoreAboutMeText>
  </MoreAboutMeContainer>
)

export default MoreAboutMe;