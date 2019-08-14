import React from "react";
import useLegendsService from "./Services/UseLegendsService";
import { LegendListProps } from "../Types/Types";

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
                            <h3>{legends.name}</h3>
                            <p>{legends.function}</p>
                            <p dangerouslySetInnerHTML={{__html: legends.lore}} />
                            <p>{legends.about.age}</p>
                            <p>{legends.about.real_name}</p>
                            <div>
                                <h3>Ability 1</h3>
                                <p>{legends.abilities.ability_1.type}</p>
                                <p>{legends.abilities.ability_1.name}</p>
                                <p>{legends.abilities.ability_1.description}</p>
                                <p>{legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.damage : ''}</p>
                                <p>{legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.duration : ''}</p>
                                <p>{legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.radius : ''}</p>
                                <p>{legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.cooldown : ''}</p>
                                <p>{legends.abilities.ability_1.secondary_data ? legends.abilities.ability_1.secondary_data.charges : ''}</p>
                            </div>
                            <div>
                                <h3>Ability 2</h3>
                                <p>{legends.abilities.ability_2.type}</p>
                                <p>{legends.abilities.ability_2.name}</p>
                                <p>{legends.abilities.ability_2.description}</p>
                                <p>{legends.abilities.ability_2.secondary_data ? legends.abilities.ability_2.secondary_data.movement : ''}</p>
                                <p>{legends.abilities.ability_2.secondary_data ? legends.abilities.ability_2.secondary_data.duration : ''}</p>
                            </div>
                            <div>
                                <h3>Ability 3</h3>
                                <p>{legends.abilities.ability_3.type}</p>
                                <p>{legends.abilities.ability_3.name}</p>
                                <p>{legends.abilities.ability_3.description}</p>
                                <p>{legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.damage : ''}</p>
                                <p>{legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.charge_time : ''}</p>
                                <p>{legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.radius : ''}</p>
                                <p>{legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.slow : ''}</p>
                                <p>{legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.detonation_time : ''}</p>
                                <p>{legends.abilities.ability_3.secondary_data ? legends.abilities.ability_3.secondary_data.duration : ''}</p>
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