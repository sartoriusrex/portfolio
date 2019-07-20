import { keyframes } from 'styled-components';

import { colors } from '../styles/variables';

export const FlickerButton = keyframes`
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

export const TurnOnBorder = keyframes`
  0%, 9%, 11%, 19%, 26%, 29% {
    box-shadow: none;
  }
  
  10%, 12%, 23%, 28%, 30%, 100% {
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
  }
`

export const TurnOnName = keyframes`
  0%, 4%, 10%, 17%, 20% {
    opacity: 0; 
    text-shadow: 
      0 0 10px #fff, 
      0 0 20px ${ colors.purple }, 
      0 0 30px ${ colors.purple }, 
      0 0 40px ${ colors.purple }, 
      0 0 70px ${ colors.purple }, 
      0 0 80px ${ colors.purple }, 
      0 0 100px ${ colors.purple },
      0 0 150px ${ colors.purple };
  }
  5%, 14%, 19%, 21%, 100% {
    opacity: 1;
    text-shadow: 
      0 0 10px #fff, 
      0 0 20px ${ colors.purple }, 
      0 0 30px ${ colors.purple }, 
      0 0 40px ${ colors.purple }, 
      0 0 70px ${ colors.purple }, 
      0 0 80px ${ colors.purple }, 
      0 0 100px ${ colors.purple }, 
      0 0 150px ${ colors.purple };
  }
`

export const FlickerLetter = keyframes`
  0%, 25%, 26%, 27%, 30%, 71%, 72%, 73%, 74%, 76%, 77%, 100% {
    opacity: 1; 
    text-shadow:
      0 0 10px #fff, 
      0 0 20px ${ colors.purple }, 
      0 0 30px ${ colors.purple }, 
      0 0 40px ${ colors.purple }, 
      0 0 70px ${ colors.purple }, 
      0 0 80px ${ colors.purple }, 
      0 0 100px ${ colors.purple }, 
      0 0 150px ${ colors.purple };
  }
  25.5%, 26.5%, 71.5%, 72.5%, 73.5%, 74.5%, 76.5% {
    opacity: .5;
    text-shadow: 
      0 0 10px #fff, 
      0 0 20px ${ colors.purple }, 
      0 0 30px ${ colors.purple }, 
      0 0 40px ${ colors.purple }, 
      0 0 70px ${ colors.purple }, 
      0 0 80px ${ colors.purple }, 
      0 0 100px ${ colors.purple }, 
      0 0 150px ${ colors.purple };        
  }
`

export const AboutMeAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY( -2em );
  }
  to {
    opacity: 1;
  }
`

export const AboutMeDisappear = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY( -2em );
`

export const AboutMeTextAppear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    background-color: rgba(0,0,0,.8);
  }
`

export const AboutMeTextDisappear = keyframes`
  from {
    opacity: 1;
    background-color: rgba(0,0,0,.8);
  }
  to {
    opacity: 0;
  }
`