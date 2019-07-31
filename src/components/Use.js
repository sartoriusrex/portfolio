import React from 'react';
import styled from 'styled-components';

import { BioDescriptionText, Brackets } from '../styles/general';

const UseContainer = styled.div`
  width: 90%;
  max-width: 25em;
  padding-left: .5em;

  @media screen and (min-width: 1200px) {
    grid-area: use;
    margin-bottom: 2em;
  }
`

const UseTextContainer = styled.div`
  margin-bottom: .1rem;
  display: flex;
`

const ListContainer = styled.div`
  margin-left: .75em;
`

const ListHeader = styled.p`
  color: white;
  font-size: 1em;
  font-weight: bold;
  margin-bottom: .4em;
`

const List = styled.ul`
  margin-left: .75rem;
  list-style: none
`

const ListItem = styled.li`
  list-style: none;
  color: white;
  font-size: .9em;
  margin-bottom: .4em;
`

const Use = () => (
  <UseContainer>
    <BioDescriptionText>
      I Use: <Brackets>{ `{` }</Brackets>
    </BioDescriptionText>
    <UseTextContainer>
      <ListContainer>
        <ListHeader>Backend:</ListHeader>
        <List>
          <ListItem>ES5 & ES6</ListItem>
          <ListItem>Node</ListItem>
          <ListItem>Mongo + Mongoose</ListItem>
          <ListItem>MySql</ListItem>
          <ListItem>Git & Github</ListItem>
          <ListItem>Heroku</ListItem>
          <ListItem>Netlify</ListItem>
        </List>
      </ListContainer>
      <ListContainer>
        <ListHeader>Frontend:</ListHeader>
        <List>
          <ListItem>HTML5, CSS3</ListItem>
          <ListItem>Javascript, ejs</ListItem>
          <ListItem>BEM + scss, gulp</ListItem>
          <ListItem>Bootstrap</ListItem>
          <ListItem>SemanticUI</ListItem>
          <ListItem>React + JSX</ListItem>
          <ListItem>Redux, Redux-Form</ListItem>
          <ListItem>Styled-components</ListItem>
          <ListItem>jQuery</ListItem>
          <ListItem>Node</ListItem>
        </List>
      </ListContainer>
    </UseTextContainer>
    <Brackets>{ `}` }</Brackets>
  </UseContainer>
)

export default Use;