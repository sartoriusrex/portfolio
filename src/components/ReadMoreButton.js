import React from 'react';
import styled from 'styled-components';

import { ReactComponent as DownArrow } from '../images/down-arrow.svg';

const Button = styled.button`
  width: 10em;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #808080;
  font-size: .7em;
  z-index: 100;

  &:active,
  &:focus {
    outline: none;
  }
`

const ReadMoreButton = ({ toggleVisible, visible }) => {

  const styleVisibleFalse = {
    fill: '#808080', 
    width: '1em',
    height: '1em',
    marginLeft: '1em',
  }

  const styleVisibleTrue = {
    ...styleVisibleFalse, transform: "rotate( .5turn )"
  }

  return(
    <Button onClick={ toggleVisible }>
      { visible ? "Read Less" : "Read More" }
      <DownArrow 
        style={ visible ? styleVisibleTrue : styleVisibleFalse }
      />
    </Button>
  )
}

export default ReadMoreButton;