import { useEffect, useState } from 'react';
import { Service } from '../../Types/Service';
import { LegendListProps } from '../../Types/Types';

const useLegendsService = () => {
  const [result, setResult] = useState<Service<LegendListProps>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/legends.json')
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  console.log(result);

  return result;
};

export default useLegendsService;
