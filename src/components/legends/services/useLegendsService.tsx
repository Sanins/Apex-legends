import { useEffect, useState } from 'react';
import { Service } from '../../Types/Service';
import { Legends } from '../../Types/Types';

const useLegendsService = () => {
  const [result, setResult] = useState<Service<Legends>>({
    status: 'loading'
  });

  useEffect(() => {
    fetch('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/legends.json')
      .then(response => response.json())
      .then(response => setResult({ status: 'loaded', payload: response }))
      .catch(error => setResult({ status: 'error', error }));
  }, []);

  return result;
};

export default useLegendsService;
