import React from 'react';
import styled, { css } from 'styled-components';


const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  z-index: 10;
  background-color: black;

  ${ props => props.visible && css`
    display: block;
    opacity: .8;

    @media screen and (min-width: 1200px) {
      display: none;
    }
  `}
`

const ModalBackground = ({ visible, setVisible }) => {
	const handleClick = () => setVisible( false );

	return <Modal visible={ visible } onClick={ handleClick } />
}

export default ModalBackground;