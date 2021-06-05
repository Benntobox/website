import React from 'react';
import { FooterContainer, FooterText } from './styles.js';

export const Footer = (props) => {
  return (<FooterContainer>
    <FooterText onClick={() => props.set('HOME')}>HOME</FooterText>
    <FooterText onClick={() => props.set('ABOUT')}>ABOUT</FooterText>
    <FooterText onClick={() => props.set('PROJECTS')}>PROJECTS</FooterText>
  </FooterContainer>)
}
