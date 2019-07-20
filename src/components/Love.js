import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/variables';

const LoveContainer = styled.div`
  width: 90%;
  max-width: 25em;
`

const Brackets = styled.p`
  color: ${ colors.blue }
  font-size: .9em;
`

const List = styled.ul`
  margin-left: 2em;
  list-style: none;
`

const ListItem = styled.li`
  list-style: none;
  color: white;
  font-size: .7em;
`

const Love = () => (
  <LoveContainer>

  </LoveContainer>
)

export default Love;