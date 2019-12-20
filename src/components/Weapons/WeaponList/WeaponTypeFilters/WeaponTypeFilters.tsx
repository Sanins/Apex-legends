import React from "react";
import WeaponFilter from './../../WeaponFilter/WeaponFilter';
import './WeaponTypeFilters.scss';
import useComponentVisible from './../../../Common/Utils/Utils'
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
    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
    } = useComponentVisible(false);

    return (
        <>
            <div className='weapon-type-filters__list-wrapper'>
                <div className='weapon-type-filters__mobile-btn-wrapper'>
                    <label>Weapon Type</label>
                    <button ref={ref} onClick={() => setIsComponentVisible(true)} className='mobile-dropdown-btn'>Select...</button>
                </div>
                <div className={clsx('weapon-type-filters__list', isComponentVisible && 'weapon-type-filters__show')}>
                    <button onClick={props.assaultRifles} className={clsx('weapon-type-filters__list-item', props.activeWeapon === 0 && 'weapon-type-filters__list-item__active')}>Assault Rifles</button>
                    <button onClick={props.subMachineGuns} className={clsx('weapon-type-filters__list-item', props.activeWeapon === 1 && 'weapon-type-filters__list-item__active')}>Sub Machine Guns</button>
                    <button onClick={props.lightMachineGuns} className={clsx('weapon-type-filters__list-item', props.activeWeapon === 2 && 'weapon-type-filters__list-item__active')}>Light Machine Guns</button>
                    <button onClick={props.shotguns} className={clsx('weapon-type-filters__list-item', props.activeWeapon === 3 && 'weapon-type-filters__list-item__active')}>Shotguns</button>
                    <button onClick={props.sniperRifles} className={clsx('weapon-type-filters__list-item', props.activeWeapon === 4 && 'weapon-type-filters__list-item__active')}>Sniper Rifles</button>
                    <button onClick={props.pistols} className={clsx('weapon-type-filters__list-item', props.activeWeapon === 5 && 'weapon-type-filters__list-item__active')}>Pistols</button>
                </div>
                <WeaponFilter />
            </div>
        </>
    )
 };