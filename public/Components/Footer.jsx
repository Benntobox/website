import React from 'react';
import { FooterContainer, FooterText, FooterTextActive } from './styles.js';

export const Footer = (props) => {
  return (<FooterContainer>
    {props.tab === 'HOME' ? 
    <FooterTextActive>HOME</FooterTextActive> : 
    <FooterText onClick={() => props.set('HOME')}>HOME</FooterText>}
    {props.tab === 'ABOUT' ? 
    <FooterTextActive>ABOUT</FooterTextActive> : 
    <FooterText onClick={() => props.set('ABOUT')}>ABOUT</FooterText>}
    {props.tab === 'PROJECTS' ? 
    <FooterTextActive>PROJECTS</FooterTextActive> : 
    <FooterText onClick={() => props.set('PROJECTS')}>PROJECTS</FooterText>}
  </FooterContainer>)
}
