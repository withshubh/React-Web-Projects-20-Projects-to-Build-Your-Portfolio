import { useState, useEffect } from 'react';

import './HamburgerMenu.scss';

function HamburgerMenu({ isOpen, setIsOpen }) {
  const initialClass = 'navigation-nation-hamburger-menu';
  const hamburgerClass = isOpen ? `${initialClass} change` : initialClass;

  return (
    <div className={hamburgerClass} onClick={() => setIsOpen(!isOpen)}>
      <div className='bar1'></div>
      <div className='bar2'></div>
      <div className='bar3'></div>
    </div>
  );
}

export default HamburgerMenu;
