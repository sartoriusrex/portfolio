import React, { useState } from 'react';
import styled from 'styled-components';

import content from '../content';
import { ProjectItem, ProjectItemTextContainer, ProjectItemTitle, ProjectItemTechs, ProjectItemDesc, ProjectLinkContainer, ProjectLink, ProjectPreview } from '../styles/general';

const ThirdSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 6em;
`

const ProjectSection = () => {
  const [ preview, setPreview ] = useState( null );

  const handleClick = subject => {
    preview === subject ?
    setPreview( null ) :
    setPreview( subject );
  }

  return(
    <ThirdSection id="projects">
      {content.projects.map( subject =>
        <ProjectItem 
          key={ subject.short }
          color={ subject.color  }
        >
          <ProjectItemTextContainer>
            <ProjectItemTitle color={ subject.color }>
              { subject.title }
            </ProjectItemTitle>
            <ProjectItemTechs color={ subject.color }>
              Made with: { subject.technologies }
            </ProjectItemTechs>
            <ProjectItemDesc color={ subject.color }>
              { subject.description }
            </ProjectItemDesc>
            <ProjectLinkContainer>
              <ProjectLink 
                as="button"
                color={ subject.color }
                onClick={ () => handleClick( subject.short )}
                style={{background: "transparent", outline: "none", border: "none"}}
              >
                Preview
              </ProjectLink>
              <ProjectLink
                link={ subject.live }
                color={ subject.color }
              >
                Live
              </ProjectLink>
              <ProjectLink
                link={ subject.github }
                color={ subject.color }
              >
                Github
              </ProjectLink>
              { subject.githubServer &&
                <ProjectLink
                  link={ subject.githubServer }
                  color={ subject.color }
                >
                  Github 2
                </ProjectLink>
              }
            </ProjectLinkContainer>
            { preview && preview === subject.short &&
              <ProjectPreview src={ subject.gif } />
            }
          </ProjectItemTextContainer>
        </ProjectItem>
      )}

    </ThirdSection>
  )
}

export default ProjectSection;