import { useEffect, useState } from 'react';
import { Service } from '../Types/Service';
import { LegendListProps, ApexData } from '../Types/Types';

const ApexLegendsService = (serviceOption: ApexData) => {
  const [result, setResult] = useState<Service<LegendListProps>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch(`https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/${serviceOption}.json`)
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, [serviceOption]);

  return result;
};

export default ApexLegendsService;
