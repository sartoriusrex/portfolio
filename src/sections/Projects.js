import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import LazyLoad from 'react-lazy-load';

import content from '../content';
import { colors, fonts } from '../styles/variables';

const ThirdSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 2rem;
`

const ProjectSectionTitle = styled.h2`
  color: white;
  font-family: ${ fonts.nixie };
  font-size: 2em;
  letter-spacing: .05em;
  margin-bottom: 2rem;
  text-shadow:
    0 0 10px #fff, 
    0 0 20px ${ colors.purple }, 
    0 0 30px ${ colors.purple }, 
    0 0 40px ${ colors.purple }, 
    0 0 70px ${ colors.purple }, 
    0 0 80px ${ colors.purple }, 
    0 0 100px ${ colors.purple }, 
    0 0 150px ${ colors.purple };
`

const ProjectItem = styled.div`
  margin-bottom: 3em;
  width: 90%;
  max-width: 35em;
  border-radius: .5em;
  box-shadow: 
    inset 0 0 2px #FFF,
    0 0 2px #fff,           
    
    inset 1px 0 4px ${ props => props.color },  
    inset -1px 0 4px ${ props => props.color }, 
    inset 0 1px 4px ${ props => props.color },
    inset 0 -1px 4px ${ props => props.color },
    
    -2px 0 4px ${ props => props.color },  
    2px 0 4px ${ props => props.color },
    0 2px 4px ${ props => props.color },
    0 -2px 4px ${ props => props.color };
`

const ProjectItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5%;
`

const ProjectItemTitle = styled.a.attrs( props => ({
  href: props.link,
  rel: "noopener noreferrer",
  target: "_blank",
  id: props.id
}))`
  color: ${ props => props.color };
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    transition: text-shadow 200ms;
    text-shadow: 
      0 0 4px ${ props => props.color };
  }
`

const ProjectItemTechs = styled.p`
  color: ${ props => props.color };
  font-size: .9em;
  font-style: italic;
  margin-bottom: 2rem;
  text-align: center;
  line-height: 1.3;
`

const ProjectItemDesc = styled.p`
  color: ${ props => props.color };
  font-size: .9em;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  text-align: center;
`

const ProjectLinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  width: 100%;
  flex-wrap: wrap;
`

const ProjectLink = styled.a.attrs( props => ({
  href: props.link,
  rel: "noopener noreferrer",
  target: "_blank",
  id: props.id
}))`
  color: ${ props => props.color };
  font-size: .9em,
  font-weight: bold;
  text-decoration: none;
  margin: 0 .2em;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const ProjectPreview = styled.img.attrs( props => ({
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

const ProjectSection = React.forwardRef( (props, ref) => {
  const [ preview, setPreview ] = useState( null );

  const handleClick = subject => {
    preview === subject ?
    setPreview( null ) :
    setPreview( subject );
  }

  return(
    <ThirdSection ref={ ref } id="projects" >
      <ProjectSectionTitle>Portfolio</ProjectSectionTitle>

      { content.projects.map( subject =>
        <ProjectItem 
          key={ subject.short }
          color={ subject.color  }
        >
          <ProjectItemTextContainer>
            <ProjectItemTitle
              color={ subject.color }
              link={ subject.live }
              id={ `${ subject.short }-title` }
            >
              { subject.title }
            </ProjectItemTitle>

            <ProjectItemDesc color={ subject.color }>
              { subject.description }
            </ProjectItemDesc>

            <ProjectItemTechs color={ subject.color }>
              Made with: { subject.technologies }
            </ProjectItemTechs>

            <ProjectLinkContainer>
              <ProjectLink 
                as="button"
                color={ subject.color }
                onClick={ () => handleClick( subject.short )}
                style={{background: "transparent", outline: "none", border: "none"}}
                id={ `${ subject.short }-preview` }
              >
                Preview
              </ProjectLink>

              <ProjectLink
                link={ subject.live }
                color={ subject.color }
                id={ `${ subject.short }-live` }
              >
                Live
              </ProjectLink>

              <ProjectLink
                link={ subject.github }
                color={ subject.color }
                id={ `${ subject.short }-github` }
              >
                Github
              </ProjectLink>

              { subject.githubServer &&
                <ProjectLink
                  link={ subject.githubServer }
                  color={ subject.color }
                  id={ `${ subject.short }-github-two` }
                >
                  Github 2
                </ProjectLink>
              }
            </ProjectLinkContainer>

            <LazyLoad 
              debounce={ true }
              offsetVertical={ 300 }
            >
              <ProjectPreview
                src={ subject.gif }
                visible={ preview && preview === subject.short }
              />
            </LazyLoad>
            
            {/* <ProjectVideoPreview 
              src={ subject.vid }
              alt={subject.short + ` preview`}
              autoPlay 
              muted
              visible={ preview && preview === subject.short }
              loop
            >
              <source src={ subject.vid } type="video/webm"/>
              <source src={ subject.vidTwo } type="video/mp4"/>
            </ProjectVideoPreview> */}
          </ProjectItemTextContainer>
        </ProjectItem>
      )}

    </ThirdSection>
  )
});

export default ProjectSection;