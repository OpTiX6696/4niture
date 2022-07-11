import React from 'react';
import Logo from './Logo';
import Search from './Search';

function Header() {



  return (
    <div>
      <div className='logo'>
        <Logo />
        <Search />
      </div>
    </div>
  )
}

export default Header