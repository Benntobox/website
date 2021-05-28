import React from 'react';
import { Tab, TabActive } from './styles.js'

export const Sidebar = (props) => {
  return (
    <ol className='menu'>
      {props.tab === 'HOME' ? 
      <TabActive>HOME</TabActive> : 
      <Tab onClick={() => props.set('HOME')}>HOME</Tab>}

      {props.tab === 'ABOUT' ? 
      <TabActive>ABOUT</TabActive> : 
      <Tab onClick={() => props.set('ABOUT')}>ABOUT</Tab>}
      
      {props.tab === 'PROJECTS' ? 
      <TabActive>PROJECTS</TabActive> : 
      <Tab onClick={() => props.set('PROJECTS')}>PROJECTS</Tab>}
    </ol>
  )
}