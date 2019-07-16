import { useEffect, useState } from 'react';
import { Service } from '../types/Service';

export interface Starship {
  name: string;
}

const useStarshipsService = () => {
  const [result, setResult] = useState<Service<Starship>>({
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

export default useStarshipsService;
