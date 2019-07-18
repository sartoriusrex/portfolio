import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { colors } from '../styles/variables';

const Navbar = styled.nav`
  display: flex;
  background-color: black;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  max-width: 25rem;
`

const flicker = keyframes`
  0%, .6%, 1.2% {
    box-shadow: none;
  }
  .3%, .9%, 3%, 100% {
    box-shadow: 
      inset 0 0 1px #FFF,
      0 0 1px #fff,           
      
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
  background-color: transparent;
  font-size: .8em;
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
      15s 1s infinite ${ flicker };
  `}
`

const Nav = () => {
  const [ selected, setSelected ] = useState( null );

  return(
    <Navbar>
      <Button 
        onClick={ () => setSelected('about') } 
        selected={ selected === 'about' ? selected : null }
      >
        About
      </Button>
      <Button 
        onClick={ () => setSelected('projects') } 
        selected={ selected === 'projects' ? selected : null } 
      >
        Projects
      </Button>
      <Button 
        onClick={ () => setSelected('contact') } 
        selected={ selected === 'contact' ? selected : null } 
      >
        Contact
      </Button>
    </Navbar>
  );
}

export default Nav;