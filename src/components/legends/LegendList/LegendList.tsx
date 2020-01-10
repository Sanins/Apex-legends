import React from "react";
import ApexLegendsService from "../../Services/ApexLegendsService";
import { LegendListProps } from "../../Types/Types";
import "./LegendList.scss";
import { Link } from "react-router-dom";

const LegendList: React.FC<{}> = () => {

	const service = ApexLegendsService("legends");

	return (
		<>
			{service.status === "loading" && (
				<p>Loading</p>
			)}

			{service.status === "loaded" &&
				<div className="legend-list">
					<h1>Legends</h1>
					<div className="legend-list__list-of-legends">
						<div className="legends-banner">
							{service.payload.map((legends: LegendListProps, key: any) => (
								<Link key={key} className="legends-banner__item" to={`/legends/${legends.name}`}>
									<img
										alt={legends.name}
										className="legends-banner__image"
										// eslint-disable-next-line no-undef
										src={require(`./../LegendImages/${legends.name}.jpg`)}
									/>
									<div className="legends-banner__content">
										{legends.name}
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			}
			{service.status === "error" && (
				<div>Error, the backend moved to the dark side.</div>
			)}
		</>
	);
};

export default LegendList;
