import styled, { css } from 'styled-components';

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
  margin-bottom: .5em;
`

export const ProjectItem = styled.div`
  margin-bottom: 3em;
  width: 90%;
  max-width: 35em;
  border-radius: .5em;
  box-shadow: 
    inset 0 0 2px #FFF,
    0 0 2px #fff,           
    
    inset 2px 0 2px ${ props => props.color },  
    inset -2px 0 2px ${ props => props.color }, 
    inset 0 2px 2px ${ props => props.color },
    inset 0 -2px 2px ${ props => props.color },
    
    inset 2px 0 4px ${ props => props.color },  
    inset -2px 0 4px ${ props => props.color }, 
    inset 0 2px 4px ${ props => props.color }, 
    inset 0 -2px 4px ${ props => props.color }, 
    
    -4px 0 7px ${ props => props.color },  
    4px 0 7px ${ props => props.color },
    0 4px 7px ${ props => props.color },
    0 -4px 7px ${ props => props.color };
`

export const ProjectItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
`

export const ProjectItemTitle = styled.h3`
  color: ${ props => props.color };
  font-size: 1.4em;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  text-decoration: underline;
`

export const ProjectItemTechs = styled.p`
  color: ${ props => props.color };
  font-size: .9em;
  font-style: italic;
  margin-bottom: 1.5rem;
  text-align: center;
  line-height: 1.3;
`

export const ProjectItemDesc = styled.p`
  color: ${ props => props.color };
  font-size: .9em;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  text-align: center;
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
  rel: "noopener noreferrer",
  target: "_blank"
}))`
  color: ${ props => props.color };
  font-size: .9em,
  font-weight: bold;
  text-decoration: none;
  margin: 0 .2em;
  &:hover {
    text-decoration: underline;
  }
`

export const ProjectPreview = styled.img.attrs( props => ({
  src: props.src,
  alt: "preview gif"
}))`
  width: 100%;
  height: auto;
  margin-top: 1rem;
  opacity: 0;
  transform: scale( 0 );
  transition: opacity 150ms ease-in, transform 150ms ease-in;
  will-change: opacity, transform;
  display: none;

  ${ props => props.visible && css`
    display: inline-block;
    opacity: 1;
    transform: scale( 1 );
  `}
`

// export const ProjectVideoPreview = styled.video`
//   width: 100%;
//   height: auto;
//   margin-top: 1rem;
//   opacity: 0;
//   transform: scale( 0 );
//   transition: opacity 150ms ease-in, transform 150ms ease-in;
//   will-change: opacity, transform;
//   display: none;

//   ${ props => props.visible && css`
//     display: inline-block;
//     opacity: 1;
//     transform: scale( 1 );
//   `}
// `