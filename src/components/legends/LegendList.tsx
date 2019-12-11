import React, { useRef, useEffect } from "react";
import ApexLegendsService from "../Services/ApexLegendsService";
import { LegendListProps } from '../Types/Types';
import LegendDetail from './LegendDetails';
import './LegendList.scss';
import clsx from "clsx";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)   
const useMountEffect = (fun: any) => useEffect(fun, [])

const LegendList: React.FC<{}> = () => {

  const service = ApexLegendsService('legends');

  const [activeKey, setActiveKey] = React.useState(-1);

  const [legendsName, setLegendsName] = React.useState('');

  const myRef = useRef(null)

  useMountEffect(() => scrollToRef(myRef)) // Scroll on mount
  
  const toggleSelected = (key:any, legends:any) => () => {
    setActiveKey(key);
    scrollToRef(myRef);

    setLegendsName(legends)
  };
  
  return (
    <>
      <div ref={myRef} className='href-event-location'></div>
      <div>   
        {service.status === 'loading' && (
          <p>Loading</p>
        )}
      </div>
      <div className={clsx(legendsName, 'legend-list-container')}>
        {service.status === 'loaded' &&
          <div>
            <div className='legend-list'>
              {service.payload.map((legends: LegendListProps, key:any) => (
                <button 
                  className={clsx(key === activeKey && 'legend-list--button__' + legends.name + '--active', 'legend-list--button legend-list--button__' + legends.name)} 
                  key={key} 
                  onClick={toggleSelected(key, legends.name)}
                >
                  <div className='legend-list__name'>
                    {legends.name}                    
                  </div>
                </button>        
              ))}
            </div>
            <div>
              <LegendDetail
                legendKey={activeKey}
              />
            </div>
          </div>
        }
      </div>
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default LegendList;
