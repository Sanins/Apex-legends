import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

function Header() { 
  return (
    <div className='header'>
      <div className='header__logo'>
        <h1>My Logo</h1>
      </div>
      <div className='header__links'>
        <Link to={`/`}>Home</Link>
        <Link to={`/legends`}>Legends</Link>
      </div>
    </div>
  );
}

export default Header;