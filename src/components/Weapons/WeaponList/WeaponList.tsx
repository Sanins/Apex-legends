import React from "react";
import ApexLegendsService from "../../Services/ApexLegendsService";
import { WeaponListProps } from "../../Types/Types";
import { Link } from "react-router-dom";
import './WeaponList.scss';

const WeaponList: React.FC<{}> = () => {
  const service = ApexLegendsService('weapons');
  
  return (
    <div className='general-page-wrapper'>
      {service.status === 'loading' && (
        <p>Loading</p>
      )}

      {service.status === 'loaded' &&
        <div className='weapon-list'>
          <h1>Weapons</h1>
          <div className='weapon-list__list-of-weapons'>
            {service.payload.map((weapons: WeaponListProps) => (
                <Link to={`/weapons/${weapons.name}`}>
                  {weapons.name}                    
                </Link>   
            ))}
          </div>
        </div>
      }

      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </div>
  );
};

export default WeaponList;
