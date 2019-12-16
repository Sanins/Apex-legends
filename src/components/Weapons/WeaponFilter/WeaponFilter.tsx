import React from "react";
import './WeaponFilter.scss';

const WeaponFilter: React.FC<{}> = () => {
    return (
        <>
            <div className='weapon-filter__title'>
                <h3 className='weapon-filter__title__text'>Filter</h3>
            </div>
            <div className='weapon-filter__item'>
                <label>Weapon Type</label>
                <select className='weapon-filter__item__select'>
                    <option>All</option>
                    <option>Assault Rifles</option>
                    <option>Sub Machine Guns</option>
                    <option>Light Machine Guns</option>
                    <option>Shotguns</option>
                    <option>Sniper Rifles</option>
                    <option>Pistols</option>
                </select>
            </div>
            <div className='weapon-filter__item'>
                <label>Sort by</label>
                <select className='weapon-filter__item__select'>
                    <option>Select...</option>
                    <option>Damage</option>
                    <option>Rate of fire</option>
                    <option>Damage per second</option>
                    <option>Damage per magazine</option>
                    <option>Headshot damage</option>
                    <option>Legshot damage</option>
                    <option>Ammo capacity</option>
                    <option>Projectile speed</option>
                </select>
            </div>
            <button>Filter</button>
        </>
    )
}

export default WeaponFilter;