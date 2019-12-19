import React, { useState, useEffect } from 'react';
import './BarChart.scss';

interface BarChartProps {
    dataTitle: any;
    dataValue: any;
}

export default function BarChart(props: BarChartProps) {
    const [highestValue, setHighestValue] = React.useState(0);

    useEffect(() => {
        switch (props.dataTitle) {
            case 'Damage per second':
                return setHighestValue(255);
        };

    });

    return (
        <div className='bar-chart'>
            <svg width='80%' height='20px'>
                <g>
                    <rect className='bar-chart__svg__background' width='100%' ></rect>
                    <rect className='bar-chart__svg__live-data' width={(props.dataValue / highestValue) * 100}></rect>
                </g>
            </svg>
        </div>
    );
}
