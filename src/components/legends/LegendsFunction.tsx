import React from "react";
import useLegendsService from "./Services/UseLegendsService";
import { LegendListProps } from "../Types/Types";

interface LegendsFunctionProps {
    legendKey: number;
}

export default function LegendsFunction(props: LegendsFunctionProps) {
    const service = useLegendsService();

    if (service.status === 'loaded') {
        return (
            <>
                {/* {service.payload.map((legends: LegendListProps, key:any) => key == props.legendKey)} */}
                {service.payload.map((legends: LegendListProps, key:any) => (
                <>
                    {key == props.legendKey &&
                        <div key={key}>
                            {legends.name}
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