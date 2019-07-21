import styled from 'styled-components';

import { colors } from './variables';

export const BioDescriptionText = styled.p`
  color: ${ colors.yellow };
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: .5em;
`

export const Brackets = styled.span`
  color: ${ colors.blue };
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: .3em;
`

export const ProjectItem = styled.div`
  margin-bottom: 3em;
  width: 90%;
  max-width: 50em;
  border-radius: .5em;
  box-shadow: 
    inset 0 0 3px #FFF,
    0 0 3px #fff,           
    
    inset 3px 0 3px ${ props => props.color },  
    inset -3px 0 3px ${ props => props.color }, 
    inset 0 3px 3px ${ props => props.color },
    inset 0 -3px 3px ${ props => props.color },
    
    inset 3px 0 5px ${ props => props.color },  
    inset -3px 0 5px ${ props => props.color }, 
    inset 0 3px 5px ${ props => props.color }, 
    inset 0 -3px 5px ${ props => props.color }, 
    
    -5px 0 8px ${ props => props.color },  
    5px 0 8px ${ props => props.color },
    0 5px 8px ${ props => props.color },
    0 -5px 8px ${ props => props.color };
`

export const ProjectItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
`

export const ProjectItemTitle = styled.h3`
  color: ${ props => props.color };
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`

export const ProjectItemTechs = styled.p`
  color: ${ props => props.color };
  font-size: .8em;
  font-style: italic;
  margin-bottom: 1rem;
  text-align: center;
`

export const ProjectItemDesc = styled.p`
  color: ${ props => props.color };
  font-size: .8em;
  margin-bottom: 1rem;

`

export const ProjectLinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
  flex-wrap: wrap;
`

export const ProjectLink = styled.a.attrs( props => ({
  href: props.link,
}))`
  color: ${ props => props.color };
  font-size: .8em,
  font-weight: bold;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`