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
  font-size: .8em;
  z-index: 1000;

  &:hover {
    cursor: pointer;
  }

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
    transition: 'transform 100ms'
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