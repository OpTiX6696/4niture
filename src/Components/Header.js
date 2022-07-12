import React from 'react';
import Logo from './Logo';
import Search from './Search';
import '../Styles/Header.scss'

function Header() {



  return (
    <div>
      <div className='header'>
        <Logo />
        <Search />
      </div>
    </div>
  )
}

export default Header