import React, { useState } from 'react';
import styled from 'styled-components';

import content from '../content';
import { colors } from '../styles/variables';
import { ProjectItem, ProjectItemTextContainer, ProjectItemTitle, ProjectItemTechs, ProjectItemDesc, ProjectLinkContainer, ProjectLink, ProjectPreview, ProjectVideoPreview } from '../styles/general';

const ThirdSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 6em;
  margin-bottom: 2em;
`

const ProjectSectionTitle = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Nixie+One&display=swap');

  color: white;
  font-family: "Nixie One", sans-serif;
  font-size: 2em;
  letter-spacing: .05em;
  margin-bottom: 2em;
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

const ProjectSection = () => {
  const [ preview, setPreview ] = useState( null );

  const handleClick = subject => {
    preview === subject ?
    setPreview( null ) :
    setPreview( subject );
  }

  return(
    <ThirdSection id="projects">
      <ProjectSectionTitle>Projects</ProjectSectionTitle>
      { content.projects.map( subject =>
        <ProjectItem 
          key={ subject.short }
          color={ subject.color  }
        >
          <ProjectItemTextContainer>
            <ProjectItemTitle color={ subject.color }>
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
            {/* <ProjectPreview
              src={ subject.gif }
              visible={ preview && preview === subject.short }
            /> */}
            <ProjectVideoPreview 
              src={ subject.vid }
              alt={subject.short + ` preview`}
              autoPlay 
              muted
              visible={ preview && preview === subject.short }
              loop
            >
              <source src={ subject.vid } type="video/webm"/>
              <source src={ subject.vidTwo } type="video/mp4"/>
            </ProjectVideoPreview>
          </ProjectItemTextContainer>
        </ProjectItem>
      )}

    </ThirdSection>
  )
}

export default ProjectSection;