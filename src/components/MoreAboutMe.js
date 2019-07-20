import React from 'react';
import styled,{ css } from 'styled-components';

import { AboutMeAppear, AboutMeDisappear, AboutMeTextAppear, AboutMeTextDisappear } from '../styles/animations';

const MoreAboutMeContainer = styled.div`
  width: 90%;
  max-width: 25em;
  margin: .5em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: opacity, transform;

  ${ props => props.visible ?
    css`animation: 500ms ${ AboutMeAppear } cubic-bezier(0,.33,.09,.99) forwards` :
    css`animation: 500ms ${ AboutMeDisappear } cubic-bezier(0,.33,.09,.99) forwards`
  }
`

const MoreAboutMeText = styled.p`
  font-size: .7em;
  color: white;
  text-align: justify;

  ${ props => props.visible ?
    css`animation: 500ms ${ AboutMeTextAppear } cubic-bezier(0,.33,.09,.99) forwards` :
    css`animation: 500ms ${ AboutMeTextDisappear } cubic-bezier(0,.33,.09,.99) forwards`
  }
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