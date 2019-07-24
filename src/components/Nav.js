import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from "react-scroll";

import { colors } from '../styles/variables';
import { FlickerButton } from '../styles/animations';

const Navbar = styled.nav`
  display: flex;
  background-color: transparent;
  width: 95%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  max-width: 25rem;

  @media screen and (min-width: 900px) {
    width: auto;
    height: 30%;
    left: 5%;
    flex-direction: column;
    align-self: start;
    bottom: 38%;
  }
`

const Button = styled.button`
  color: white;
  margin: .2em auto 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3em;
  width: 7em;
  border-radius: .5em;
  border: .5px solid white;
  padding: 1em;
  background-color: black;
  font-size: .9em;
  box-shadow: 
    inset 0 0 1px #FFF,
    0 0 1px #fff,

    inset 2px 0 2px ${ colors.yellow },  
    inset -2px 0 2px ${ colors.yellow }, 
    inset 0 2px 2px ${ colors.yellow },
    inset 0 -2px 2px ${ colors.yellow },
    
    inset 2px 0 5px ${ colors.yellow },  
    inset -2px 0 5px ${ colors.yellow }, 
    inset 0 2px 7px ${ colors.yellow }, 
    inset 0 -2px 5px ${ colors.yellow }, 
    
    -3px 0 6px ${ colors.yellow },  
    3px 0 6px ${ colors.yellow },
    0 3px 6px ${ colors.yellow },
    0 -3px 6px ${ colors.yellow };

  &:hover {
    filter: ${ props => props.selected === null &&
      `drop-shadow( 0 0 .5em ${ colors.yellow } )`
    }
  }

  transition: filter 200ms;

  &:active,
  &:focus {
    outline: none;
  }

  ${ props => props.selected !== null && css`
    box-shadow: 
      inset 2px 0 2px ${ colors.blue },  
      inset -2px 0 2px ${ colors.blue }, 
      inset 0 2px 2px ${ colors.blue },
      inset 0 -2px 2px ${ colors.blue },
      
      inset 2px 0 5px ${ colors.blue },  
      inset -2px 0 5px ${ colors.blue }, 
      inset 0 2px 7px ${ colors.blue }, 
      inset 0 -2px 5px ${ colors.blue }, 
      
      -3px 0 6px ${ colors.blue },  
      3px 0 6px ${ colors.blue },
      0 3px 6px ${ colors.blue },
      0 -3px 6px ${ colors.blue };

    animation:
      10s 1s ${ FlickerButton };
  `}
`

const Nav = ({ selected, setSelected }) => (
  <Navbar>
    <Link
      to="about"
      smooth={ true }
      duration={ 100 }
      offset={ 40 }
      onSetActive={ () => setSelected( 'about' ) }
      spy={ true }
    >
      <Button 
        onClick={ () => setSelected( 'about' ) } 
        selected={ selected === 'about' ? selected : null }
      >
        About
      </Button>
    </Link>
    <Link
      to="projects"
      smooth={ true }
      duration={ 100 }
      offset={ 40 }
      onSetActive={ () => setSelected( 'projects' ) }
      spy={ true }
    >
      <Button 
        onClick={ () => setSelected( 'projects' ) } 
        selected={ selected === 'projects' ? selected : null } 
      >
        Projects
      </Button>
    </Link>
    <Link
      to="contact"
      smooth={ true }
      duration={ 100 }
      onSetActive={ () => setSelected( 'contact' ) }
      spy={ true }
    >
      <Button 
        onClick={ () => setSelected( 'contact' ) } 
        selected={ selected === 'contact' ? selected : null } 
      >
        Contact
      </Button>
    </Link>
  </Navbar>
)

export default Nav;