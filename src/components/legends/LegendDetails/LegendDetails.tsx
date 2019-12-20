import React from "react";
import ApexLegendsService from "../../Services/ApexLegendsService";
import { LegendListProps } from "../../Types/Types";
import './LegendDetails.scss';

export default function LegendDetails(props: any) {
    const service = ApexLegendsService('legends');

    if (service.status === 'loaded') {
        return (
            <>
                {service.payload.map((legends: LegendListProps, key:any) => (
                <>
                    {legends.name === props.match.params.legendId &&
                        <div key={key}>
                            <div className='legend-details__headings'>
                                <div className='legend-details__headings__legend-name'>
                                    <h2>{legends.name}</h2>
                                </div>
                                <div className='legend-details__character-image'>
                                    <img 
                                        alt={legends.name}
                                        src={require(`./../Images/${legends.name}.png`)}
                                    />
                                </div>
                                <div className='legend-details__abilities'>
                                    <div className='legend-details__abilities__container'>
                                        <ul>
                                            <li className='ability__list-item ability__list-item__1'>
                                                <span className='ability__list-item--span'>{legends.abilities.ability_1.type}</span>
                                            </li>
                                            <li className='ability__list-item ability__list-item__2'>
                                                <span className='ability__list-item--span'>{legends.abilities.ability_1.name}</span>
                                            </li>
                                            <li className='ability__list-item ability__list-item__3'><span className='ability__list-item--span'>{legends.abilities.ability_1.description  }</span></li>
                                            <li className='ability__list-item'>Damage: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.damage || 'N/A' : 'N/A')}}/></li> 
                                            <li className='ability__list-item'>Duration: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.duration || 'N/A' : 'N/A')}}/></li> 
                                            <li className='ability__list-item'>Radius: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.radius || 'N/A' : 'N/A')}}/></li>
                                            <li className='ability__list-item'>Cooldown: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.cooldown || 'N/A' : 'N/A')}}/></li>
                                        </ul>                              
                                    </div>
                                    <div className='legend-details__abilities__container'>
                                        <ul>
                                            <li className='ability__list-item ability__list-item__1'><span className='ability__list-item--span'>{legends.abilities.ability_2.type}</span></li>
                                            <li className='ability__list-item ability__list-item__2'><span className='ability__list-item--span'>{legends.abilities.ability_2.name}</span></li>
                                            <li className='ability__list-item ability__list-item__3'><span className='ability__list-item--span'>{legends.abilities.ability_2.description}</span></li>
                                            <li className='ability__list-item'>Movement: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_2.secondary_data ? legends.abilities.ability_2.secondary_data.movement || 'N/A' : 'N/A')}}/></li>
                                            <li className='ability__list-item'>Duration: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_2.secondary_data ? legends.abilities.ability_2.secondary_data.duration || 'N/A' : 'N/A')}}/></li>
                                        </ul>
                                    </div> 
                                    <div className='legend-details__abilities__container'>
                                        <ul>
                                            <li className='ability__list-item ability__list-item__1'><span className='ability__list-item--span'>{legends.abilities.ability_3.type}</span></li>
                                            <li className='ability__list-item ability__list-item__2'><span className='ability__list-item--span'>{legends.abilities.ability_3.name}</span></li>
                                            <li className='ability__list-item ability__list-item__3'><span className='ability__list-item--span'>{legends.abilities.ability_3.description}</span></li>
                                            <li className='ability__list-item'>Damage: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.damage || 'N/A' : 'N/A')}} /></li>
                                            <li className='ability__list-item'>Charge time: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.charge_time || 'N/A' : 'N/A')}}/></li>
                                            <li className='ability__list-item'>Radius: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.radius || 'N/A' : 'N/A')}}/></li>
                                            <li className='ability__list-item'>Slow: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.slow || 'N/A' : 'N/A')}}/></li>
                                            <li className='ability__list-item'>Detonation time: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.detonation_time || 'N/A' : 'N/A')}}/></li>
                                            <li className='ability__list-item'>Duration: 
                                                <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.duration || 'N/A' : 'N/A')}}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </>
            ))}

            </>
        );
    } else {
        return (<></>);
    }
};