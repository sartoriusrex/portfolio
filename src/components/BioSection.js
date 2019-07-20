import React from 'react';
import styled from 'styled-components';

import BioImg from '../images/bio.jpeg';
import { colors } from '../styles/variables';

const BioSection = styled.div`
  width: 90%;
  max-width: 25em;
  height: 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BioPicContainer = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 
    inset 0 0 10px #FFF,
    0 0 10px #fff,           
    
    inset 5px 0 5px ${ colors.purple },  
    inset -5px 0 5px ${ colors.purple }, 
    inset 0 5px 5px ${ colors.purple },
    inset 0 -5px 5px ${ colors.purple },
    
    inset 5px 0 7px ${ colors.purple },  
    inset -5px 0 7px ${ colors.purple }, 
    inset 0 5px 7px ${ colors.purple }, 
    inset 0 -5px 7px ${ colors.purple }, 
    
    -7px 0 10px ${ colors.purple },  
    7px 0 10px ${ colors.purple },
    0 7px 10px ${ colors.purple },
    0 -7px 10px ${ colors.purple };
`

const BioPic = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`

const BioTextContainer = styled.div`
  width: 55%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`

const BioTitle = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Nixie+One&display=swap');

  color: white;
  font-family: "Nixie One", sans-serif;
  font-size: 1.4em;
  text-align: right;
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

const BioDescription = styled.p`
  text-align: right;
  color: white;
  max-width: 15em;
  width: 80%;
  font-size: .8em;
`

const BioPlace = styled.p`
  text-align: right;
  font-size: .9em;
  color: white;
  text-shadow:
    0 0 10px #fff, 
    0 0 20px ${ colors.turquoise }, 
    0 0 30px ${ colors.turquoise }, 
    0 0 40px ${ colors.turquoise }, 
    0 0 70px ${ colors.turquoise };
`

const BioContainer = () => (
  <BioSection>
    <BioPicContainer>
      <BioPic src={ BioImg }/>
    </BioPicContainer>
    <BioTextContainer>
      <BioTitle>Dennis Mai</BioTitle>
      <BioDescription>Self-taught Web Developer, Avid Learner, and Jiu Jitero living in</BioDescription>
      <BioPlace>{`{ Hawaii: Kauai }`} </BioPlace>
    </BioTextContainer>
  </BioSection>
)

export default BioContainer;