import { useEffect, useState } from "react";
import { Service } from "../Types/Service";
import { LegendListProps, ApexData } from "../Types/Types";

const ApexLegendsService = (serviceOption: ApexData) => {
	const [result, setResult] = useState<Service<LegendListProps>>({
		status: "loading"
	});

	useEffect(() => {
		// eslint-disable-next-line no-undef
		fetch(`https://www.apexdata.gg/api/${process.env.REACT_APP_API_KEY}/${serviceOption}.json`)
			.then(response => response.json())
			.then(response => setResult({ status: "loaded", payload: response }))
			.catch(error => setResult({ status: "error", error }));
	}, [serviceOption]);

	return result;
};

export default ApexLegendsService;
