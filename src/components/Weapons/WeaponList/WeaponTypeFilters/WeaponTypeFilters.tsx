import React, { useState } from "react";
import WeaponFilter from './../../WeaponFilter/WeaponFilter';
import './WeaponTypeFilters.scss';
import clsx from "clsx";

interface WeaponTypeFiltersProps {
    activeWeapon: any;
    assaultRifles: any;
    subMachineGuns: any;
    lightMachineGuns: any;
    shotguns: any;
    sniperRifles: any;
    pistols: any;
}

export default function WeaponTypeFilters(props: WeaponTypeFiltersProps) {
    const [showText, setShowText] = useState(false);

    return (
        <>
            <div className='weapon-type-filters__list-wrapper'>
                <div className='weapon-type-filters__mobile-btn-wrapper'>
                    <label>Weapon Type</label>
                    <a onClick={() => setShowText(!showText)} className='mobile-dropdown-btn'>Select...</a>
                </div>
                <div className={clsx('weapon-type-filters__list', showText && 'weapon-type-filters__show')}>
                    <a onClick={props.assaultRifles} className={clsx('weapon-type-filters__list-item', props.activeWeapon === 0 && 'weapon-type-filters__list-item__active')}>Assault Rifles</a>
                    <a onClick={props.subMachineGuns} className={clsx('weapon-type-filters__list-item', props.activeWeapon === 1 && 'weapon-type-filters__list-item__active')}>Sub Machine Guns</a>
                    <a onClick={props.lightMachineGuns} className={clsx('weapon-type-filters__list-item', props.activeWeapon === 2 && 'weapon-type-filters__list-item__active')}>Light Machine Guns</a>
                    <a onClick={props.shotguns} className={clsx('weapon-type-filters__list-item', props.activeWeapon === 3 && 'weapon-type-filters__list-item__active')}>Shotguns</a>
                    <a onClick={props.sniperRifles} className={clsx('weapon-type-filters__list-item', props.activeWeapon === 4 && 'weapon-type-filters__list-item__active')}>Sniper Rifles</a>
                    <a onClick={props.pistols} className={clsx('weapon-type-filters__list-item', props.activeWeapon === 5 && 'weapon-type-filters__list-item__active')}>Pistols</a>
                </div>
                <WeaponFilter />
            </div>
        </>
    )
 };