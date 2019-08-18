import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from "react-scroll";

import { colors } from '../styles/variables';

const Navbar = styled.nav`
  display: flex;
  background-color: ${ colors.blackOverlay };
  width: 95%;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 37rem;
  border-radius: .5rem;

  @media screen and (min-width: 900px) {
    width: auto;
    height: 30%;
    left: 5%;
    flex-direction: column;
    align-self: start;
    bottom: 38%;
    background-color: transparent;
    box-shadow: none;
  }
`

const Button = styled.button`
  color: white;
  margin: 1rem .5rem;
  padding: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
  width: 7em;
  border-radius: .5em;
  border: .4px solid white;
  background-color: black;
  font-size: .8em;
  box-shadow: 
    inset 0 0 1px #FFF,
    0 0 1px #fff,

    inset 1px 0 1px ${ colors.turquoise },  
    inset -1px 0 1px ${ colors.turquoise }, 
    inset 0 1px 1px ${ colors.turquoise },
    inset 0 -1px 1px ${ colors.turquoise },
    
    inset 1px 0 3px ${ colors.turquoise },  
    inset -1px 0 3px ${ colors.turquoise }, 
    inset 0 1px 3px ${ colors.turquoise }, 
    inset 0 -1px 3px ${ colors.turquoise }, 
    
    -2px 0 4px ${ colors.turquoise },  
    2px 0 4px ${ colors.turquoise },
    0 2px 4px ${ colors.turquoise },
    0 -2px 4px ${ colors.turquoise };

  &:hover {
    filter: ${ props => props.selected === null &&
      `drop-shadow( 0 0 .5em ${ colors.turquoise } )`
    }
  }

  transition: filter 200ms;

  &:active,
  &:focus {
    outline: none;
  }

  ${ props => props.selected !== null && css`
    box-shadow: 
      inset 1px 0 1px ${ colors.purple },  
      inset -1px 0 1px ${ colors.purple }, 
      inset 0 1px 1px ${ colors.purple },
      inset 0 -1px 1px ${ colors.purple },
      
      inset 1px 0 3px ${ colors.purple },  
      inset -1px 0 3px ${ colors.purple }, 
      inset 0 1px 3px ${ colors.purple }, 
      inset 0 -1px 3px ${ colors.purple }, 
      
      -2px 0 4px ${ colors.purple },  
      2px 0 4px ${ colors.purple },
      0 2px 4px ${ colors.purple },
      0 -2px 4px ${ colors.purple };
  `}
`

const Nav = ({ selected, setSelected }) => (
  <Navbar>
    <Link
      to="about"
      smooth={ true }
      duration={ 100 }
      offset={ 100 }
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
      offset={ 50 }
      onSetActive={ () => setSelected( 'projects' ) }
      spy={ true }
    >
      <Button 
        onClick={ () => setSelected( 'projects' ) } 
        selected={ selected === 'projects' ? selected : null } 
      >
        Portfolio
      </Button>
    </Link>
    <Link
      to="contact"
      smooth={ true }
      duration={ 100 }
      offset={ 100 }
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