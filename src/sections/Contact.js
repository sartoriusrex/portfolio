import React from 'react';
import styled from 'styled-components';

import PDF from '../mai_resume.pdf';
import { colors } from '../styles/variables';
import content from '../content';
import { ReactComponent as Email } from '../images/email.svg';
import { ReactComponent as Github } from '../images/github.svg';
import { ReactComponent as Skype } from '../images/skype.svg';
import { ReactComponent as Stackoverflow } from '../images/stackoverflow.svg';
import { ReactComponent as Linkedin } from '../images/linkedin.svg';

const FourthSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding-top: 4em;
`

const ViewPDF = styled.a.attrs( props => ({
  href: props.pdf,
  target: "_blank"
}))`
  color: ${ colors.gray };
  margin-bottom: 2em;
`

const ContactContainer = styled.div`
  width: 90%;
  max-width: 25em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: .5em;
  border .3em dashed ${ colors.yellow };
  padding: 1em 0;
`

const ContactItem = styled.div`
  margin: 5% 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: transform 100ms ease-in-out;

  &:hover {
    transform: translateX( .5em );
  }
`

const style = {
  icon: {
    width: "13%",
    height: "13%",
    margin: "auto",
    fill: colors.yellow,
  }
}

const renderIcon = label => {
  switch( label ){
    case "Email":
      return <Email style={ style.icon }/>;
    case "Github":
      return <Github style={ style.icon }/>;
    case "Skype":
      return <Skype style={ style.icon }/>;
    case "Linkedin":
      return <Linkedin style={ style.icon }/>;
    case "Stackoverflow":
      return <Stackoverflow style={ style.icon }/>;
    default:
      return <Email style={ style.icon }/>;
  }
}

const ContactTextContainer = styled.a.attrs( props => ({
  href: props.link,
  rel: "noopener noreferrer",
  target: "_blank"
}))`
  min-width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
`

const ContactLabel = styled.p`
  color: ${ colors.gray };
  font-size: .8em;
  margin-bottom: .5em;
`

const ContactText = styled.p`
  color: ${ colors.yellow };
  font-size: .9em;
`


const ContactSection = () => (
  <FourthSection id="contact">
    <ViewPDF pdf={ PDF }>View Resume</ViewPDF>
    <ContactContainer>
      { content.contact.map( contact => 
        <ContactItem key={ contact.label }>
          { renderIcon( contact.label ) }
          <ContactTextContainer link={ contact.link }>
            <ContactLabel>{ contact.label }</ContactLabel>
            <ContactText >{ contact.text }</ContactText>
          </ContactTextContainer>
        </ContactItem>  
      )}
    </ContactContainer>
  </FourthSection>
)

export default ContactSection;