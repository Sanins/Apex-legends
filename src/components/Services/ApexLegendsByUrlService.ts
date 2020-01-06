import { useEffect, useState } from "react";
import { Service } from "../Types/Service";

export interface ServiceProps {
	name: string;
}

const ApexLegendsByUrlService = (url: string) => {
	const [result, setResult] = useState<Service<ServiceProps>>({
		status: "loading"
	});

	useEffect(() => {
		if (url) {
			setResult({ status: "loading" });
			fetch(url)
				.then(response => response.json())
				.then(response => setResult({ status: "loaded", payload: response }))
				.catch(error => setResult({ status: "error", error }));
		}
	}, [url]);

	return result;
};

export default ApexLegendsByUrlService;
