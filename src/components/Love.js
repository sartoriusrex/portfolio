import React from 'react';
import styled from 'styled-components';

import { BioDescriptionText, Brackets } from '../styles/general';

const LoveContainer = styled.div`
  width: 90%;
  max-width: 25em;
  margin-bottom: 2em;
  padding-left: 2em;
`

const List = styled.ul`
  margin-left: 2rem;
  margin-bottom: .1rem;
  list-style: none;
`

const ListItem = styled.li`
  list-style: none;
  color: white;
  font-size: .8em;
  margin-bottom: .5rem;
`

const Love = () => (
  <LoveContainer>
    <BioDescriptionText>
      I love:
    </BioDescriptionText>
    <Brackets>[</Brackets>
    <List>
      <ListItem>“Building fast, responsive websites”,</ListItem>
      <ListItem>“Learning new technologies”,</ListItem>
      <ListItem>“Making ideas come to life“,</ListItem>
      <ListItem>“Brazilian Jiu Jitsu”,</ListItem>
      <ListItem>“The 80s”</ListItem>
    </List>
    <Brackets>];</Brackets>
  </LoveContainer>
)

export default Love;