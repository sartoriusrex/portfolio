import React from 'react';
import styled, { css } from 'styled-components';

import { colors } from '../styles/variables';

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${ colors.gray }
  font-size: .7em;
  opacity: .5;
  margin: 0 3em 7em;
`

const FooterItem = styled.p`
  width: 100%;
  margin: 1rem;
  text-align: center;

  ${ props => props.copyright && css`
    font-size: 2em;
    opacity: 1;
  `}
`

const FooterSection = () => (
  <Footer>
    <FooterItem>Photos by Olssenh Tichoc, K8, and Geoffroy Hauwen on Unsplash</FooterItem>
    <FooterItem copyright>Copyright Dennis Mai 2019 ©</FooterItem>
  </Footer>
)

export default FooterSection;