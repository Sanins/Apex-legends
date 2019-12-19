import React, { useState, useEffect } from 'react';
import './BarChart.scss';

interface BarChartProps {
    dataTitle: any;
    dataValue: any;
    dataName?: any;
}

export default function BarChart(props: BarChartProps) {
    const [highestValue, setHighestValue] = React.useState(0);

    useEffect(() => {
        switch (props.dataTitle) {
            case 'Damage per second':
                return setHighestValue(255);
            case 'Headshot damage':
                return setHighestValue(110);
            case 'Legshot damage':
                return setHighestValue(44);
            case 'Damage per mag':
                return setHighestValue(660);  
            case 'Average dps/sec':
                return setHighestValue(255);  
            case 'Headshot dps':
                return setHighestValue(400);  
            case 'Legshot dps':
                return setHighestValue(200);       
        };
    });

    const trueValue = ((props.dataValue / highestValue) * 100).toFixed(2); 

    return (
        <div className='bar-chart'>
            <svg className='bar-chart__svg'>
                <g>
                    <rect className='bar-chart__svg__background' width='100%' ></rect>
                    <rect className='bar-chart__svg__live-data' width={trueValue + '%'}></rect>
                </g>
            </svg>
        </div>
    );
}
