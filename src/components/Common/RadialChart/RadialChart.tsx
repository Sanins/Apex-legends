/* eslint-disable no-magic-numbers */
import React, { useEffect } from "react";
import clsx from "clsx";
import "./RadialChart.scss";

interface RadialChartProps {
	className?: string;
	radius?: any;
	progress?: any;
	strokeWidth?: number;
	dimension?: number;
	colorTotal?: string;
	colorProgress?: string;
	titleText: string;
	valueText: number;
}

export default function RadialChart(props: RadialChartProps) {
	const [strokeValue, setStrokeValue] = React.useState(false);

	useEffect(() => {
		setTimeout(() => {
			setStrokeValue(true);
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
			className={clsx("radial-chart", className, {
				"no-progress": strokeLength === 0
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
				<text x="50%" y="40%" className="radial-chart__title" textAnchor="middle" dy=".3em">{titleText}</text>
				<text x="50%" y="60%" className="radial-chart__value" textAnchor="middle" dy=".3em">{valueText}</text>
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
