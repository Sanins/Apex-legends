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
                {/* {service.payload.map((legends: LegendListProps, key:any) => key == props.legendKey)} */}
                {service.payload.map((legends: LegendListProps, key:any) => (
                <>
                    {key == props.legendKey &&
                        <div key={key}>
                            <h3>{legends.name}</h3>
                            <p>{legends.function}</p>
                            <p>{legends.lore}</p>
                            <p>{legends.about.age}</p>
                            <p>{legends.about.real_name}</p>
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