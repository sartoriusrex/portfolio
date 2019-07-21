import React, { useState } from 'react';
import styled from 'styled-components';

import content from '../content';
import { colors } from '../styles/variables';
import { ProjectItem, ProjectItemTextContainer, ProjectItemTitle, ProjectItemTechs, ProjectItemDesc, ProjectLinkContainer, ProjectLink } from '../styles/general';

const ThirdSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`

const ProjectSection = () => {
  const [ project, setProject ] = useState( null );

  const handleClick = subject => {
    setProject( subject );
  }

  const SectionHeader = styled.h2`
    color: ${ colors.purple };
    font-size: 1.6em;
    margin: 2em auto;
  `

  return(
    <ThirdSection>
      <SectionHeader>Projects</SectionHeader>
      {content.projects.map( subject =>
        <ProjectItem 
          key={ subject.short }
          color={ subject.color  }
          className={ project === subject ? "selected" : null }
          onClick={ () => handleClick( subject.short )} 
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
          </ProjectItemTextContainer>
        </ProjectItem>
      )}
    </ThirdSection>
  )
}

export default ProjectSection;