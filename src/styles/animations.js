import { keyframes } from 'styled-components';

import { colors } from '../styles/variables';


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