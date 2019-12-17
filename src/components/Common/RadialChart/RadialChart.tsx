import React, { useEffect } from 'react';
import classNames from 'classnames';

interface lolprops {
    className?: any;
    radius?: any;
    progress?: any;
    strokeWidth?: any;
    dimension?: any;
    colorTotal?: any;
    colorProgress?: any;
}

export default function RadialChart(props: lolprops) {
    const [poopLength, setStrokeLength] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setStrokeLength(true);
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
    } = props;

    const circleRadius = Math.min(radius, 85);
    const circumference = 2 * 3.14 * circleRadius;
    const strokeLength = setStrokeLength ? circumference / 100 * progress : 0;
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
