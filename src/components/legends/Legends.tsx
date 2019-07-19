import React from 'react';
import useLegendsService from './services/UseLegendsService';
import Button from './../Button/Button'

const Legends: React.FC<{}> = () => {
  const service = useLegendsService();

	const showLegends = () => {
    console.log('lol');
	};


  return (
    <>
      <div className="card">
        {service.status === 'loading' && (
          <p>Loading</p>
        )}
        {service.status === 'loaded' &&
          service.payload.map((legends: any) => (
            <>
              <div className="legends__name">
                <Button onClick={showLegends}>{legends.name}</Button>
              </div>
              <div className="legends__function">
                {legends.function}
              </div>
            </>
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
