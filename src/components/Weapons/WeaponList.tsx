import React from "react";
import ApexLegendsService from "../Services/ApexLegendsService";
import { WeaponListProps } from "../Types/Types";
import { Link } from "react-router-dom";

const WeaponList: React.FC<{}> = () => {

  const service = ApexLegendsService('weapons');
  
  return (
    <>
      {service.status === 'loading' && (
        <p>Loading</p>
      )}

      {service.status === 'loaded' &&
        <div className='legend-list'>
          {service.payload.map((weapons: WeaponListProps) => (
              <Link to={`/weapons/${weapons.name}`}>
                {weapons.name}                    
              </Link>   
          ))}
        </div>
      }

      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default WeaponList;
