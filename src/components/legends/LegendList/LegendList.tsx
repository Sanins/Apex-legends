import React from "react";
import ApexLegendsService from "../../Services/ApexLegendsService";
import { LegendListProps } from '../../Types/Types';
import './LegendList.scss';
import { Link } from "react-router-dom";

const LegendList: React.FC<{}> = () => {

  const service = ApexLegendsService('legends');
  
  return (
    <div className='general-page-wrapper'>
      {service.status === 'loading' && (
        <p>Loading</p>
      )}
      
      {service.status === 'loaded' &&
          <div className='legend-list'>
            <h1>Legends</h1>
            <div className='legend-list__list-of-legends'>
              {service.payload.map((legends: LegendListProps, key:any) => (
                  <Link to={`/legends/${legends.name}`}>
                    {legends.name}     
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

export default LegendList;
