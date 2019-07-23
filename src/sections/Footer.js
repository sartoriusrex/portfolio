import React from 'react';
import styled from 'styled-components';

import { colors } from '../styles/variables';

const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${ colors.gray }
  font-size: .5em;
  opacity: .5;
  margin: 0 3em;
`

const FooterItem = styled.p`
  width: 100%;
  margin: 1em;
`

const FooterSection = () => (
  <Footer>
    <FooterItem>Photo by Olssenh Tichoc, K8, and Geoffroy Hauwen on Unsplash</FooterItem>
    <FooterItem>Copyright Dennis Mai 2019 ©</FooterItem>
  </Footer>
)

export default FooterSection;