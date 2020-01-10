/* eslint-disable max-len */
/* eslint-disable complexity */
import React from "react";
import ApexLegendsService from "../../Services/ApexLegendsService";
import { LegendListProps } from "../../Types/Types";
import "./LegendDetails.scss";

export default function LegendDetails(props: any) {
	const service = ApexLegendsService("legends");

	if (service.status === "loaded") {
		return (
			<>
				{service.payload.map((legends: LegendListProps, key: number) => (
					<>
						{legends.name === props.match.params.legendId &&
							<div key={key}>
								<div className="legend-details__headings">
									<div className="legend-details__headings__legend-name">
										<h2>{legends.name}</h2>
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
}
