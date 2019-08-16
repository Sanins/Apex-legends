import React from "react";
import useLegendsService from "./Services/UseLegendsService";
import { LegendListProps } from "../Types/Types";
import './LegendDetails.scss';

interface LegendDetailProps {
    legendKey: number;
}

export default function LegendDetail(props: LegendDetailProps) {
    const service = useLegendsService();

    if (service.status === 'loaded') {
        return (
            <>
                {service.payload.map((legends: LegendListProps, key:any) => (
                <>
                    {key === props.legendKey &&
                        <div key={key}>
                            <div className='legend-details__headings'>
                                <div className='legend-details__headings__legend-name'>
                                    <h2>{legends.name}</h2>
                                </div>
                                <div className='legend-details__headings__function'>
                                    <h3>{legends.function}</h3>
                                </div>
                                <div className='legend-details__features'>
                                    <div className='legend-details__character-image'>
                                        <img 
                                            src={require(`./Images/${legends.name}.png`)}
                                        />
                                    </div>
                                    <div className='legend-details__description'>
                                        <div>
                                            <h4>Real name: {legends.about.real_name}</h4>
                                            <h4>Age: {legends.about.age}</h4>
                                        </div>
                                        <h4>Description:</h4>
                                        <span className='description--span' dangerouslySetInnerHTML={{__html: legends.lore}} />
                                    </div>
                                </div>
                                <div className='legend-details__abilities'>
                                    <div className='legend-details__abilities__container'>
                                        <ul>
                                            <li className='ability__list-item ability__list-item__1'><span className='ability__list-item--span'>{legends.abilities.ability_1.type}</span></li>
                                            <li className='ability__list-item ability__list-item__2'><span className='ability__list-item--span'>{legends.abilities.ability_1.name}</span></li>
                                            <li className='ability__list-item ability__list-item__3'><span className='ability__list-item--span'>{legends.abilities.ability_1.description}</span></li>
                                            {/* <li className='ability__list-item'>Damage: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.damage || 'N/A' : 'N/A')}}/></li> 
                                            <li className='ability__list-item'>Duration: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.duration || 'N/A' : 'N/A')}}/></li> 
                                            <li className='ability__list-item'>Radius: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.radius || 'N/A' : 'N/A')}}/></li>
                                            <li className='ability__list-item'>Cooldown: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.cooldown || 'N/A' : 'N/A')}}/></li> */}
                                        </ul>                              
                                    </div>
                                    <div className='legend-details__abilities__container'>
                                        <ul>
                                            <li className='ability__list-item ability__list-item__1'><span className='ability__list-item--span'>{legends.abilities.ability_2.type}</span></li>
                                            <li className='ability__list-item ability__list-item__2'><span className='ability__list-item--span'>{legends.abilities.ability_2.name}</span></li>
                                            <li className='ability__list-item ability__list-item__3'><span className='ability__list-item--span'>{legends.abilities.ability_2.description}</span></li>
                                            {/* <li className='ability__list-item'>Movement: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_2.secondary_data ? legends.abilities.ability_2.secondary_data.movement || 'N/A' : 'N/A')}}/></li>
                                            <li className='ability__list-item'>Duration: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_2.secondary_data ? legends.abilities.ability_2.secondary_data.duration || 'N/A' : 'N/A')}}/></li> */}
                                        </ul>
                                    </div>
                                    <div className='legend-details__abilities__container'>
                                        <ul>
                                            <li className='ability__list-item ability__list-item__1'><span className='ability__list-item--span'>{legends.abilities.ability_3.type}</span></li>
                                            <li className='ability__list-item ability__list-item__2'><span className='ability__list-item--span'>{legends.abilities.ability_3.name}</span></li>
                                            <li className='ability__list-item ability__list-item__3'><span className='ability__list-item--span'>{legends.abilities.ability_3.description}</span></li>
                                            {/* <li className='ability__list-item'>Damage: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.damage || 'N/A' : 'N/A')}} /></li>
                                            <li className='ability__list-item'>Charge time: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.charge_time || 'N/A' : 'N/A')}}/></li>
                                            <li className='ability__list-item'>Radius: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.radius || 'N/A' : 'N/A')}}/></li>
                                            <li className='ability__list-item'>Slow: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.slow || 'N/A' : 'N/A')}}/></li>
                                            <li className='ability__list-item'>Detonation time: <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.detonation_time || 'N/A' : 'N/A')}}/></li>
                                            <li className='ability__list-item'>Duration: 
                                                <span className='ability__list-item--span' dangerouslySetInnerHTML={{__html: (legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.duration || 'N/A' : 'N/A')}}/>
                                            </li> */}
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