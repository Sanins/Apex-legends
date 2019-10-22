import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';
import clsx from 'clsx';

export const useHeaderElements = () => {
  const [hamburgerToggle, setHamburgerToggle] = React.useState(false);

  const toggleHamburger = () => () => {
    if (!hamburgerToggle) {
      setHamburgerToggle(true);
    } else {
      setHamburgerToggle(false);
    }
  };
  
  const closeHamburger = () => () => {
    setHamburgerToggle(false);
  };

  return {
    btnClick: {
      toggle: toggleHamburger,
      close: closeHamburger,
      currentValue: hamburgerToggle,
    },
  };
}

export default function Header() { 
	const { btnClick } = useHeaderElements();

	return (
    <>
      <div className='logo'>
        my logo
      </div>
      <button 
        onClick={btnClick.toggle()}
        className='header__mobile-hamburger'
      >
        Show/hide
      </button>
      <ul className={clsx('header', !btnClick.currentValue && 'header__close', btnClick.currentValue && 'header__open')}>
        <NavLink 
          onClick={btnClick.close()} 
          activeClassName="header__list-item--selected"
          exact to={`/`} 
          className='header__list-item'
        >
          <div className='header__list-item__link'>
            Home
          </div>
        </NavLink>
        <NavLink 
          onClick={btnClick.close()}
          activeClassName="header__list-item--selected"
          exact to={`/legends`}
          className='header__list-item'
        >
          <div className='header__list-item__link'>
            Legends
          </div>
        </NavLink>
        <NavLink 
          onClick={btnClick.close()}
          activeClassName="header__list-item--selected"
          exact to={`/weapons`} 
          className='header__list-item'
        >
          <div className='header__list-item__link'>
            Weapons
          </div>
        </NavLink>
        <NavLink 
          onClick={btnClick.close()} 
          activeClassName="header__list-item--selected" 
          exact to={`/items`} 
          className='header__list-item'
        >
          <div className='header__list-item__link'>
            items
          </div>
        </NavLink>
      </ul>
		</>
  );
}
