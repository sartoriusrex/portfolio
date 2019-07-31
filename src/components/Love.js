import React from 'react';
import styled from 'styled-components';

import { BioDescriptionText, Brackets } from '../styles/general';

const LoveContainer = styled.div`
  width: 90%;
  max-width: 25em;
  margin-bottom: 1.5em;
  padding-left: .5em;

  @media screen and (min-width: 1200px) {
    grid-area: love;
    place-self: center start;
    margin-top: 2em;
  }
`

const List = styled.ul`
  margin-left: 1rem;
  margin-bottom: .1rem;
  list-style: none;
`

const ListItem = styled.li`
  list-style: none;
  color: white;
  font-size: .9em;
  margin-bottom: .5rem;
`

const Love = () => (
  <LoveContainer>
    <BioDescriptionText>
      I love: <Brackets>[</Brackets>
    </BioDescriptionText>
    <List>
      <ListItem>“Building fast, responsive websites”,</ListItem>
      <ListItem>“Learning new tech and languages”,</ListItem>
      <ListItem>“Making ideas come to life“,</ListItem>
      <ListItem>“Brazilian Jiu Jitsu”,</ListItem>
      <ListItem>“The 80s”</ListItem>
    </List>
    <Brackets>]</Brackets>
  </LoveContainer>
)

export default Love;