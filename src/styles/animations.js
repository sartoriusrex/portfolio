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

export const ImageGlow = keyframes`
  0%, 100% {
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
  50% {
    box-shadow: 
      inset 0 0 10px #FFF,
      0 0 10px #fff,           
      
      inset 7px 0 7px ${ colors.purple },  
      inset -7px 0 7px ${ colors.purple }, 
      inset 0 7px 7px ${ colors.purple },
      inset 0 -7px 7px ${ colors.purple },
      
      inset 7px 0 9px ${ colors.purple },  
      inset -7px 0 9px ${ colors.purple }, 
      inset 0 7px 9px ${ colors.purple }, 
      inset 0 -7px 9px ${ colors.purple }, 
      
      -9px 0 11px ${ colors.purple },  
      9px 0 11px ${ colors.purple },
      0 9px 11px ${ colors.purple },
      0 -9px 11px ${ colors.purple };
  }
`

export const FromTextGlow = keyframes`
  0%, 100% {
    text-shadow:
      0 0 10px #fff, 
      0 0 20px ${ colors.turquoise }, 
      0 0 30px ${ colors.turquoise }, 
      0 0 40px ${ colors.turquoise }, 
      0 0 70px ${ colors.turquoise };
  }
  50% {
    text-shadow:
      0 0 10px #fff, 
      0 0 25px ${ colors.turquoise }, 
      0 0 35px ${ colors.turquoise }, 
      0 0 45px ${ colors.turquoise }, 
      0 0 75px ${ colors.turquoise };
  }
`

export const TitleGlow = keyframes`
  0%, 100% {
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
  50% {
    text-shadow:
    0 0 10px #fff, 
    0 0 25px ${ colors.purple }, 
    0 0 35px ${ colors.purple }, 
    0 0 45px ${ colors.purple }, 
    0 0 75px ${ colors.purple }, 
    0 0 85px ${ colors.purple }, 
    0 0 105px ${ colors.purple }, 
    0 0 155px ${ colors.purple };
  }
`

export const AboutMeAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY( -8em );
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
    transform: translateY( -8em );
`

export const AboutMeTextAppear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const AboutMeTextDisappear = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`