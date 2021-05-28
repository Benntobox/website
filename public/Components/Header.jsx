import React from 'react';
import { HeaderTitle, SectionTitle } from './styles.js';

export const Header = (props) => {
  return (
  <div className='header'>
    <HeaderTitle>Main Title</HeaderTitle>
    <SectionTitle>{props.tab}</SectionTitle>
  </div>
  )
}