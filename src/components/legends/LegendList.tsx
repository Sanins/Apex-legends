import React from "react";
import Legend from './Legend';
import useLegendsService from "./services/UseLegendsService";

const LegendList: React.FC<{}> = () => {
  const service = useLegendsService();
  
  return (
    <>
      <div className="card">
        {service.status === 'loading' && (
          <p>Loading</p>
        )}
        {service.status === 'loaded' &&
          service.payload.map((legends: any) => (
            <Legend 
              title={legends.name} 
              function={legends.function} 
            />
          ))
          }
      </div>
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default LegendList;
