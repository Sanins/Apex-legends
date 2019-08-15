import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';

function Header() { 
  return (
    <>
      <div className='logo'>my logo</div>
      <ul className='header'>
      <NavLink activeClassName="header__list-item--selected" exact to={`/`} className='header__list-item'>
          <a className='header__list-item__link' ><div className='lala'></div>Home</a>
        </NavLink>
        <NavLink activeClassName="header__list-item--selected" exact to={`/legends`} className='header__list-item'>
          <a className='header__list-item__link' ><div className='lala'></div>legends</a>
        </NavLink>
        <NavLink activeClassName="header__list-item--selected" exact to={`/weapons`} className='header__list-item'>
          <a className='header__list-item__link' ><div className='lala'></div>Weapons</a>
        </NavLink>
        <NavLink activeClassName="header__list-item--selected" exact to={`/items`} className='header__list-item'>
          <a className='header__list-item__link' ><div className='lala'></div>items</a>
        </NavLink>
      </ul>
    </>
  );
}

export default Header;