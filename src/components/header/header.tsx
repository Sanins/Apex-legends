import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

function Header() { 
  return (
    <>
      <div className='logo'>My logo</div>
      <ul className='header'>
        <li className='header__list-item'>
          <Link className='header__list-item__link' to={`/`}><div className='lala'></div>Home</Link>
        </li>
        <li className='header__list-item'>
          <Link className='header__list-item__link' to={`/legends`}><div className='lala'></div>Legends</Link>
        </li>
        <li className='header__list-item'>
          <Link className='header__list-item__link' to={`/weapons`}><div className='lala'></div>Weapons</Link>
        </li>
        <li className='header__list-item'>
          <Link className='header__list-item__link' to={`/items`}><div className='lala'></div>items</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;