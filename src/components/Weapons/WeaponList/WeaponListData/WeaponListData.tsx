import React from "react";
import Heading from "../../../Common/Heading/Heading"
import RadialChart from '../../../Common/RadialChart/RadialChart'
import BarChart from '../../../Common/BarChart/BarChart'
import WeaponListExtraInfo from './../WeaponListExtraInfo/WeaponListExtraInfo'
import './WeaponListData.scss';

interface WeaponListDataProps {
    ammoCapacity: number;
    averageDps: number;
    name: string;
    projectileSpeed: number;
    damage: number;
    damagePerSecond: number;
    damagePerMagazine: number;
    headshotDamage: number;
    headshotDps: number;
    legshotDamage: number;
    rateOfFire: number;
    legshotDps: number;
    tacticalReload: number;
    emptyReload: number;
    drawTime: number;
    holsterTime: number;
}

export default function WeaponListData(props: WeaponListDataProps) {
    return (
        <>
            <div className='weapon-list-data__title-container'>
                <Heading headingType={3}>{props.name}</Heading>
                <img alt={props.name} className='weapon-list-data__weapon-image' src={require(`./../Icons/${props.name}.png`)} />
            </div>
            <div className='weapon-list-data__radial-graphs'>
                <div>
                    <RadialChart
                        progress={props.damage}
                        colorTotal="#000"
                        colorProgress="#43655A"
                        radius={80}
                        strokeWidth={14}
                        dimension={140}
                        titleText={'DMG'}
                        valueText={props.damage}
                    />
                </div>
                <div>
                    <RadialChart
                        progress={props.rateOfFire / 12}
                        colorTotal="#000"
                        colorProgress="#43655A"
                        radius={80}
                        strokeWidth={14}
                        dimension={140}
                        titleText={'RPM'}
                        valueText={props.rateOfFire}
                    />
                </div>
            </div>
            <div className='weapon-list-data__bar-charts-container'>
                <div className='weapon-list-data__bar-charts'>
                    <div>Damage per second</div>
                    <BarChart
                        dataValue={props.damagePerSecond}
                        dataTitle='Damage per second'
                        dataName={props.name}
                    />
                    <div className='weapon-list-data__bar-charts__value-container'>
                        <span className='weapon-list-data__bar-charts__value'>{props.damagePerSecond}</span>
                    </div>
                </div>
                <div className='weapon-list-data__bar-charts'>
                    <div>Headshot damage</div>
                    <BarChart
                        dataValue={props.headshotDamage}
                        dataTitle='Headshot damage'
                    />
                    <div className='weapon-list-data__bar-charts__value-container'>
                        <span className='weapon-list-data__bar-charts__value'>{props.headshotDamage}</span>
                    </div>
                </div>
                <div className='weapon-list-data__bar-charts'>
                    <div>Legshot damage</div>
                    <BarChart
                        dataValue={props.legshotDamage}
                        dataTitle='Legshot damage'
                    />
                    <div className='weapon-list-data__bar-charts__value-container'>
                        <span className='weapon-list-data__bar-charts__value'>{props.legshotDamage}</span>
                    </div>
                </div>
                <div className='weapon-list-data__bar-charts'>
                    <div>Damage per mag</div>
                    <BarChart
                        dataValue={props.damagePerMagazine}
                        dataTitle='Damage per mag'
                    />
                    <div className='weapon-list-data__bar-charts__value-container'>
                        <span className='weapon-list-data__bar-charts__value'>{props.damagePerMagazine}</span>
                    </div>
                </div>
                <WeaponListExtraInfo
                    averageDps={props.averageDps}
                    headshotDps={props.headshotDps}
                    legshotDps={props.legshotDps}
                />
                <hr></hr>
            </div>
            <div className='weapon-list-data__bar-charts-container'>
                <div className='weapon-list-data__extra-bar-charts'>
                    <div>Ammo capacity</div>
                    <div className='weapon-list-data__bar-charts__value-container'>
                        <span className='weapon-list-data__bar-charts__value'>{props.ammoCapacity}</span>
                    </div>
                </div>
                <div className='weapon-list-data__extra-bar-charts'>
                    <div>Projectile speed</div>
                    <div className='weapon-list-data__bar-charts__value-container'>
                        <span className='weapon-list-data__bar-charts__value'>{props.projectileSpeed}</span> m/s
                    </div>
                </div>
                <div className='weapon-list-data__extra-bar-charts'>
                    <div>Tactical reload</div>
                    <div className='weapon-list-data__bar-charts__value-container'>
                        <span className='weapon-list-data__bar-charts__value'>{props.tacticalReload}</span> s
                    </div>
                </div>
                <div className='weapon-list-data__extra-bar-charts'>
                    <div>Empty reload</div>
                    <div className='weapon-list-data__bar-charts__value-container'>
                        <span className='weapon-list-data__bar-charts__value'>{props.emptyReload}</span> s
                    </div>
                </div>
                <div className='weapon-list-data__extra-bar-charts'>
                    <div>Draw time</div>
                    <div className='weapon-list-data__bar-charts__value-container'>
                        <span className='weapon-list-data__bar-charts__value'>{props.drawTime}</span> s
                    </div>
                </div>
                <div className='weapon-list-data__extra-bar-charts'>
                    <div>Holster time</div>
                    <div className='weapon-list-data__bar-charts__value-container'>
                        <span className='weapon-list-data__bar-charts__value'>{props.holsterTime}</span> s
                    </div>
                </div>
            </div>
        </>
    )
};