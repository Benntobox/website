import React from 'react';
import { HeaderTitle, Tab, TabActive, TabContainer } from './styles.js';

export const Header = (props) => {
  return (
  <div className='header'>
    <HeaderTitle>Benny's Webpage</HeaderTitle>
    <TabContainer className='tab container'>
      {props.tab === 'HOME' ? 
      <TabActive>HOME</TabActive> : 
      <Tab onClick={() => props.set('HOME')}>HOME</Tab>}

      {props.tab === 'ABOUT' ? 
      <TabActive>ABOUT</TabActive> : 
      <Tab onClick={() => props.set('ABOUT')}>ABOUT</Tab>}
      
      {props.tab === 'PROJECTS' ? 
      <TabActive>PROJECTS</TabActive> : 
      <Tab onClick={() => props.set('PROJECTS')}>PROJECTS</Tab>}
    </TabContainer>
  </div>
  )
}