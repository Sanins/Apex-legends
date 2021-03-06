import React from "react";
import "./WeaponFilter.scss";
import clsx from "clsx";
import useComponentVisible from "../../Common/Utils/Utils";

interface WeaponFilterProps {
	submit: (e: React.FormEvent<HTMLFormElement>) => void;
	sortByChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	weaponTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	weaponType: string;
	sortByValue: string;
	error: boolean;
}

export default function WeaponFilter(props: WeaponFilterProps, index: any) {

	const {
		ref,
		isComponentVisible,
		setIsComponentVisible
	} = useComponentVisible(false);

	return (
		<>
			<button
				onClick={() => setIsComponentVisible(true)}
				className="weapon-filter__mobile-btn"
			>
				Filter by category
			</button>
			<div ref={ref} className={clsx("weapon-filter", isComponentVisible && "weapon-filter--show")}>
				<div className="weapon-filter__title">
					<h3 className="weapon-filter__title__text">Filter</h3>
				</div>
				<form onSubmit={props.submit}>
					<div className="weapon-filter__item">
						<label className="weapon-filter__item__label">Weapon Type</label>
						<select
							onChange={props.weaponTypeChange}
							value={props.weaponType}
							className="weapon-filter__item__select"
						>
							<option value="">Select...</option>
							<option value="assault-rifles">Assault Rifles</option>
							<option value="sub-machine-guns">Sub Machine Guns</option>
							<option value="light-machine-guns">Light Machine Guns</option>
							<option value="shotguns">Shotguns</option>
							<option value="sniper-rifles">Sniper Rifles</option>
							<option value="pistols">Pistols</option>
						</select>
					</div>
					<div className="weapon-filter__item">
						<label className="weapon-filter__item__label">Sort by</label>
						<select
							onChange={props.sortByChange}
							value={props.sortByValue}
							className="weapon-filter__item__select"
						>
							<option value="">Select...</option>
							<option value="damage">Damage</option>
							<option value="rate-of-fire">Rate of fire</option>
							<option value="damage-per-second">Damage per second</option>
							<option value="damage-per-magazine">Damage per magazine</option>
							<option value="headshot-damage">Headshot damage</option>
							<option value="legshot-damage">Legshot damage</option>
							<option value="ammo-capacity">Ammo capacity</option>
							<option value="projectile-speed">Projectile speed</option>
						</select>
					</div>
					{props.error &&
						<p>Both values need to be selected</p>
					}
					<button className="button weapon-filter__item__btn">Filter</button>
				</form>
			</div>
		</>
	);
}
