import React from 'react';
import useStarshipsService from '../services/useStarshipsService';

const Starships: React.FC<{}> = () => {
  const service = useStarshipsService();

  return (
    <>
      <div className="card">
        {service.status === 'loading' && (
          <p>hi</p>
        )}
        {service.status === 'loaded' &&
          service.payload.results.map(starship => (
            <div
              className="starship-item"
            >
              {starship.name}
            </div>
          ))}
      </div>
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default Starships;
