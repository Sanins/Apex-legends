/* eslint-disable no-magic-numbers */
import "./BarChart.scss";
import React, { useEffect } from "react";
import clsx from "clsx";

interface BarChartProps {
	dataTitle: string;
	dataValue: number;
	dataName?: string;
}

export default function BarChart(props: BarChartProps) {
	const [highestValue, setHighestValue] = React.useState(0);
	const [barChartValue, setBarChartValue] = React.useState(false);

	useEffect(() => {
		setTimeout(() => {
			setBarChartValue(true);
		});
	});

	useEffect(() => {
		switch (props.dataTitle) {
			case "Damage per second":
				return setHighestValue(255);
			case "Headshot damage":
				return setHighestValue(110);
			case "Legshot damage":
				return setHighestValue(44);
			case "Damage per mag":
				return setHighestValue(660);
			case "Average dps/sec":
				return setHighestValue(255);
			case "Headshot dps":
				return setHighestValue(400);
			case "Legshot dps":
				return setHighestValue(200);
			default:
				return setHighestValue(255);
		}
	}, [props.dataTitle]);

	const trueValue = barChartValue ? `${((props.dataValue / highestValue) * 100).toFixed(2)  }%` : 0;

	return (
		<div
			className={clsx("bar-chart", {
				"no-progress": trueValue === 0
			})}
		>
			<svg className="bar-chart__svg">
				<g>
					<rect className="bar-chart__svg__background" width="100%" ></rect>
					<rect className="bar-chart__svg__live-data" width={trueValue}></rect>
				</g>
			</svg>
		</div>
	);
}
