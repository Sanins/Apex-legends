import React from 'react';
import useLegendsService from './services/UseLegendsService';

const Legends: React.FC<{}> = () => {
  const service = useLegendsService();

  return (
    <>
      <div className="card">
        {service.status === 'loading' && (
          <p>hi</p>
        )}
        {service.status === 'loaded' &&
          service.payload.map((starship: any) => (
            <div
              className="starship-item"
            >
              {starship.name}
            </div>
          ))
          }
      </div>
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default Legends;
