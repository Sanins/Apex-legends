import React, { useState } from "react";
import './WeaponListExtraInfo.scss';
import BarChart from "../../../Common/BarChart/BarChart";

interface WeaponListExtraInfoProps {
    averageDps: number;
    headshotDps: number;
    legshotDps: number;
}

export default function WeaponListExtraInfo(props: WeaponListExtraInfoProps) {
    const [showText, setShowText] = useState(false);

    return (
        <div className='weapon-list-extra-info'>
            <button className='weapon-list-extra-info__link' onClick={() => setShowText(!showText)}>How is 'damage per second' calculated?</button>
            {showText &&
            <>
                <div className='weapon-list-extra-info__paragraph'>
                    <p>Damage per second is not the average damage dealt with body shots in 1 second. It's a realistic amount of damage you can deal in a 1 second slice. If a weapon can fire 1.5 shots a second, we only count 1 shot. That .5 of a shot can not be realistically dealt.</p>
                </div>
                <div className='weapon-list-extra-info__paragraph'>
                    <p>Here are additional values that might interest you:</p>
                </div>
                <div className='weapon-list-data__bar-charts'>
                <div>Average dps/sec</div>
                <BarChart
                    dataValue={props.averageDps}
                    dataTitle='Average dps/sec'
                />
                <div className='weapon-list-data__bar-charts__value-container'>
                    <span className='weapon-list-data__bar-charts__value'>{props.averageDps}</span>
                </div>
                </div>
                <div className='weapon-list-data__bar-charts'>
                <div>Headshot dps</div>
                <BarChart
                    dataValue={props.headshotDps}
                    dataTitle='Headshot dps'
                />
                <div className='weapon-list-data__bar-charts__value-container'>
                    <span className='weapon-list-data__bar-charts__value'>{props.headshotDps}</span>
                </div>
                </div>
                <div className='weapon-list-data__bar-charts'>
                <div>Legshot dps</div>
                <BarChart
                    dataValue={props.legshotDps}
                    dataTitle='Legshot dps'
                />
                <div className='weapon-list-data__bar-charts__value-container'>
                    <span className='weapon-list-data__bar-charts__value'>{props.legshotDps}</span>
                </div>
                </div>
            </> 
            }   
        </div>
    )
 };