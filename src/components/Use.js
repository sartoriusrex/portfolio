import React from 'react';
import styled from 'styled-components';

import { BioDescriptionText, Brackets } from '../styles/general';

const UseContainer = styled.div`
  width: 90%;
  max-width: 25em;
  padding-left: 2em;
`

const UseTextContainer = styled.div`
  margin-left: 2rem;
  margin-bottom: .1rem;
  display: flex;

`

const ListContainer = styled.div`
  margin: 0 1em;
`

const ListHeader = styled.p`
  color: white;
  font-size: .9em;
  font-weight: bold;
  margin-bottom: .3em;
`

const List = styled.ul`
  margin-left: 1rem;
  list-style: none
`

const ListItem = styled.li`
  list-style: none;
  color: white;
  font-size: .8em;
  margin-bottom: .3em;
`

const Use = () => (
  <UseContainer>
    <BioDescriptionText>
      I Use:
    </BioDescriptionText>
    <Brackets>[</Brackets>
    <UseTextContainer>
      <ListContainer>
        <ListHeader>Backend:</ListHeader>
        <List>
          <ListItem>ES5 & ES6</ListItem>
          <ListItem>Node</ListItem>
          <ListItem>MongoDB</ListItem>
          <ListItem>Mysql</ListItem>
          <ListItem>Git & Github</ListItem>
          <ListItem>Heroku</ListItem>
          <ListItem>Gatsby.js</ListItem>
        </List>
      </ListContainer>
      <ListContainer>
        <ListHeader>Frontend:</ListHeader>
        <List>
          <ListItem>HTML5, ejs, JSX</ListItem>
          <ListItem>CSS3, scss, gulp</ListItem>
          <ListItem>bootstrap</ListItem>
          <ListItem>semanticUI</ListItem>
          <ListItem>React + ES6</ListItem>
          <ListItem>styled-components</ListItem>
          <ListItem>jQuery</ListItem>
          <ListItem>Node</ListItem>
        </List>
      </ListContainer>
    </UseTextContainer>
    <Brackets>];</Brackets>
  </UseContainer>
)

export default Use;