import React, { useEffect, useState } from "react";
import ApexLegendsByUrlService from "../../Services/ApexLegendsByUrlService";

export type Weapons = Weapon[];
export interface Weapon {
	name: string;
}

export default function Attachments() {

	const [weapons, setOrders] = useState<Weapons>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState();

	const service = ApexLegendsByUrlService(
		`https://www.apexdata.gg/api/${process.env.REACT_APP_API_KEY}/weapons/assault-rifles.json`
	);

	useEffect(() => {
		const getWeaponList = async() => {
			setIsLoading(true);
			setIsError(false);

			try {
				if (service.status === "loaded") {
					setOrders(service.payload);
				}
			} catch (err) {
				setIsError(err.message);
			}
			setIsLoading(false);
		};


		getWeaponList();
	});

	return (
		isError ? <div></div>
			:
			isLoading ? <div></div>
				: (
					<tbody>
						{weapons.map(weapon => {
							return (
								<tr key={weapon.name}>
									<td>{weapon.name}</td>
								</tr>
							);
						}
						)}
					</tbody>
				)
	);
}
