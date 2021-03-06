import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "./Logo/Logo";
import clsx from "clsx";
import useComponentVisible from "../Common/Utils/Utils";

export default function Header() {
	const {
		ref,
		isComponentVisible,
		setIsComponentVisible
	} = useComponentVisible(false);

	const handleMobileHamburgerChange = () => {
		if (!isComponentVisible) {
			setIsComponentVisible(true);
		} else {
			setIsComponentVisible(false);
		}
	};

	return (
		<div className="header">
			<div className="header__top">
				<div className="wrapper">
					<NavLink
						onClick={() => setIsComponentVisible(false)}
						activeClassName=""
						exact to={"/"}
						className=""
					>
						<Logo />
					</NavLink>
				</div>
			</div>
			<button
				ref={ref}
				onClick={handleMobileHamburgerChange}
				className={clsx("header__mobile-hamburger", isComponentVisible && "header__mobile-hamburger__close")}
			>
				<div></div>
			</button>
			<div className="header__bottom">
				<div className="wrapper">
					<ul className={clsx(!isComponentVisible && "header__close", isComponentVisible && "header__open")}>
						<NavLink
							onClick={() => setIsComponentVisible(false)}
							activeClassName="header__list-item--selected"
							exact to={"/weapons"}
							className="header__list-item"
						>
							Weapons
						</NavLink>
						<NavLink
							onClick={() => setIsComponentVisible(false)}
							activeClassName="header__list-item--selected"
							exact to={"/legends"}
							className="header__list-item"
						>
							Legends
						</NavLink>
						<NavLink
							onClick={() => setIsComponentVisible(false)}
							activeClassName="header__list-item--selected"
							exact to={"/items/grenades"}
							className="header__list-item"
						>
							Grenades
						</NavLink>
						<NavLink
							onClick={() => setIsComponentVisible(false)}
							activeClassName="header__list-item--selected"
							exact to={"/items/consumables"}
							className="header__list-item"
						>
							Consumables
						</NavLink>
						<NavLink
							onClick={() => setIsComponentVisible(false)}
							activeClassName="header__list-item--selected"
							exact to={"/items/equipment"}
							className="header__list-item"
						>
							Equipment
						</NavLink>
						<NavLink
							onClick={() => setIsComponentVisible(false)}
							activeClassName="header__list-item--selected"
							exact to={"/items/attachments"}
							className="header__list-item"
						>
							Attachments
						</NavLink>
					</ul>
				</div>
			</div>
		</div>
	);
}
