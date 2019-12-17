import React, { useEffect } from 'react';
import classNames from 'classnames';
import './RadialChart.scss';

interface RadialChartProps {
    className?: any;
    radius?: any;
    progress?: any;
    strokeWidth?: any;
    dimension?: any;
    colorTotal?: any;
    colorProgress?: any;
    titleText: any;
    valueText: any;
}

export default function RadialChart(props: RadialChartProps) {
    const [strokeValue, setStrokeLength] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setStrokeLength(true)
        });
    });

    const {
        className,
        radius,
        progress,
        strokeWidth,
        dimension,
        colorTotal,
        colorProgress,
        titleText,
        valueText
    } = props;

    const circleRadius = Math.min(radius, 85);
    const circumference = 2 * 3.14 * circleRadius;
    const strokeLength = strokeValue ? circumference / 100 * progress : 0;
    return (
        <div
            className={classNames('radial-chart', className, {
                'no-progress': strokeLength === 0
            })}
        >
            <svg viewBox="0 0 180 180" width={dimension} height={dimension}>
                <circle
                    className="radial-chart-total"
                    stroke={colorTotal}
                    strokeWidth={strokeWidth}
                    fill="none"
                    cx="90"
                    cy="90"
                    r={circleRadius}
                />
                <text x="50%" y="40%" className="radial-chart__title" text-anchor="middle" dy=".3em">{titleText}</text>
                <text x="50%" y="60%" className="radial-chart__value"  text-anchor="middle" dy=".3em">{valueText}</text>
                <circle
                    className="radial-chart-progress"
                    stroke={colorProgress}
                    strokeWidth={strokeWidth}
                    strokeDasharray={`${strokeLength},${circumference}`}
                    strokeLinecap="round"
                    fill="none"
                    cx="90"
                    cy="90"
                    r={circleRadius}
                />
            </svg>
        </div>
    );
}
