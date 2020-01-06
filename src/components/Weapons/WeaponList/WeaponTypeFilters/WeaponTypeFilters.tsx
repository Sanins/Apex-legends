/* eslint-disable no-magic-numbers */
import React from "react";
import "./WeaponTypeFilters.scss";
import useComponentVisible from "./../../../Common/Utils/Utils";
import clsx from "clsx";

interface WeaponTypeFiltersProps {
	activeWeapon: number;
	assaultRifles: (e: React.MouseEvent<HTMLButtonElement>) => void;
	subMachineGuns: (e: React.MouseEvent<HTMLButtonElement>) => void;
	lightMachineGuns: (e: React.MouseEvent<HTMLButtonElement>) => void;
	shotguns: (e: React.MouseEvent<HTMLButtonElement>) => void;
	sniperRifles: (e: React.MouseEvent<HTMLButtonElement>) => void;
	pistols: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function WeaponTypeFilters(props: WeaponTypeFiltersProps) {
	const {
		ref,
		isComponentVisible,
		setIsComponentVisible
	} = useComponentVisible(false);

	const listItemClass = "weapon-type-filters__list-item";
	const listItemActiveClass = "weapon-type-filters__list-item__active";

	return (
		<>
			<div className="weapon-type-filters__mobile-btn-wrapper">
				<label>Weapon Type</label>
				<button
					ref={ref}
					onClick={() => setIsComponentVisible(true)}
					className="mobile-dropdown-btn"
				>
					Select...
				</button>
			</div>
			<div className={clsx("weapon-type-filters__list", isComponentVisible && "weapon-type-filters__show")}>
				<button
					onClick={props.assaultRifles}
					className={clsx(listItemClass, props.activeWeapon === 0 && listItemActiveClass)}
				>
					Assault Rifles
				</button>
				<button
					onClick={props.subMachineGuns}
					className={clsx(listItemClass, props.activeWeapon === 1 && listItemActiveClass)}
				>
					Sub Machine Guns
				</button>
				<button
					onClick={props.lightMachineGuns}
					className={clsx(listItemClass, props.activeWeapon === 2 && listItemActiveClass)}
				>
					Light Machine Guns
				</button>
				<button
					onClick={props.shotguns}
					className={clsx(listItemClass, props.activeWeapon === 3 && listItemActiveClass)}
				>
					Shotguns
				</button>
				<button
					onClick={props.sniperRifles}
					className={clsx(listItemClass, props.activeWeapon === 4 && listItemActiveClass)}
				>
					Sniper Rifles
				</button>
				<button
					onClick={props.pistols}
					className={clsx(listItemClass, props.activeWeapon === 5 && listItemActiveClass)}
				>
					Pistols
				</button>
			</div>
		</>
	);
}
