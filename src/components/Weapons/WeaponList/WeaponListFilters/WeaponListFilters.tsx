import React from "react";
import './WeaponListFilters.scss';
import clsx from "clsx";

interface WeaponListFiltersProps {
    keyValue: any;
    name: string;
    activeWeaponValue: any;
    handleWeaponChange: any;
}

export default function WeaponListFilters(props: WeaponListFiltersProps, index:any) {

    return (
        <div key={index} className='weapon-list-filters__list-item-container' onClick={props.handleWeaponChange} >
            <div className='weapon-list-filters__list-item-container__inside'>
                <button
                    key={props.keyValue}
                    onClick={props.handleWeaponChange}
                    className={
                            clsx('weapon-list-filters__list-item',
                            props.activeWeaponValue === props.keyValue && 'weapon-list-filters__list-item__active'
                        )
                    }
                >
                    {props.name}
                </button>
                <img 
                    alt={props.name}
                    className='weapon-list-filters__list-image' 
                    src={require(`./../Large-icons/${props.name}.png`)} 
                />
            </div>
        </div>
    )
 };