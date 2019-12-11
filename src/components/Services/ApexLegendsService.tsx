import { useEffect, useState } from 'react';
import { Service } from '../Types/Service';
import { LegendListProps } from '../Types/Types';

const ApexLegendsService = (serviceOption:'legends') => {
  const [result, setResult] = useState<Service<LegendListProps>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(`https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/${serviceOption}.json`)
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  console.log(result);

  return result;
};

export default ApexLegendsService;
