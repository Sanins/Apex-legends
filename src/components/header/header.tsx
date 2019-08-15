import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';

function Header() { 
  return (
    <>
      <div className='logo'>my logo</div>
      <ul className='header'>
        <li className='header__list-item'>
          <NavLink className='header__list-item__link' activeClassName="header__list-item__link--selected" exact to={`/`}><div className='lala'></div>Home</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className='header__list-item__link' activeClassName="header__list-item__link--selected" exact to={`/legends`}><div className='lala'></div>Legends</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className='header__list-item__link' activeClassName="header__list-item__link--selected" exact to={`/weapons`}><div className='lala'></div>Weapons</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className='header__list-item__link' activeClassName="header__list-item__link--selected" exact to={`/items`}><div className='lala'></div>items</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Header;