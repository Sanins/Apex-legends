import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';
import clsx from 'clsx';

function Header() { 
  const [hamburgerOpenClose, setHamburgerOpenClose] = React.useState(false);

  const toggleHamburger = () => () => {
    if (!hamburgerOpenClose) {
      setHamburgerOpenClose(true);
    } else {
      setHamburgerOpenClose(false);
    }
  };

  const closeHamburger = () => () => {
    setHamburgerOpenClose(false);
  };

  return (
    <>
      <div className='logo'>my logo</div>
      <button onClick={toggleHamburger()} className='header__mobile-hamburger'>Show/hide</button>
        <ul className={clsx('header', !hamburgerOpenClose && 'header__close', hamburgerOpenClose && 'header__open')}>
          <NavLink onClick={closeHamburger()} activeClassName="header__list-item--selected" exact to={`/`} className='header__list-item'>
            <div className='header__list-item__link' >Home</div>
          </NavLink>
          <NavLink onClick={closeHamburger()} activeClassName="header__list-item--selected" exact to={`/legends`} className='header__list-item'>
            <div className='header__list-item__link' >Legends</div>
          </NavLink>
          <NavLink onClick={closeHamburger()} activeClassName="header__list-item--selected" exact to={`/weapons`} className='header__list-item'>
            <div className='header__list-item__link' >Weapons</div>
          </NavLink>
          <NavLink onClick={closeHamburger()} activeClassName="header__list-item--selected" exact to={`/items`} className='header__list-item'>
            <div className='header__list-item__link' >items</div>
          </NavLink>
        </ul>
    </>
  );
}

export default Header;