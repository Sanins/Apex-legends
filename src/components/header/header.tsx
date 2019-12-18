import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';
import Logo from './Logo/Logo'
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
    <div className='header'>
      <div className='header__top'>
        <div className='wrapper'>
          <NavLink 
            onClick={btnClick.close()} 
            activeClassName=''
            exact to={`/`} 
            className=''
          >
          <Logo/>
          </NavLink>
        </div>
      </div>
      <button 
        onClick={btnClick.toggle()}
        className='header__mobile-hamburger'
      >
        Show/hide
      </button>
      <div className='header__bottom'>
        <div className='wrapper'>
          <ul className={clsx(!btnClick.currentValue && 'header__close', btnClick.currentValue && 'header__open')}>
            <NavLink 
              onClick={btnClick.close()}
              activeClassName="header__list-item--selected"
              exact to={`/weapons`} 
              className='header__list-item'
            >
              Weapons
            </NavLink>
            <NavLink 
              onClick={btnClick.close()}
              activeClassName="header__list-item--selected"
              exact to={`/legends`}
              className='header__list-item'
            >
              Legends
            </NavLink>   
            <NavLink 
              onClick={btnClick.close()}
              activeClassName="header__list-item--selected"
              exact to={`/items`}
              className='header__list-item'
            >
              Items
            </NavLink> 
          </ul>
        </div>
      </div>
    </div>
  );
}
