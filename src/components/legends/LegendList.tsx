import React, { useRef, useEffect } from "react";
import useLegendsService from "./Services/UseLegendsService";
import { LegendListProps } from '../Types/Types';
import LegendDetail from './LegendDetails';
import './LegendList.scss';
import clsx from "clsx";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)   
const useMountEffect = (fun: any) => useEffect(fun, [])

const LegendList: React.FC<{}> = () => {
  const service = useLegendsService();

  const [activeKey, setActiveKey] = React.useState(0);

  const myRef = useRef(null)

  useMountEffect(() => scrollToRef(myRef)) // Scroll on mount
  
  const toggleSelected = (key:any) => () => {
    setActiveKey(key);
    scrollToRef(myRef);
    document.body.style.backgroundColor = 'green'
  };
  
  return (
    <>
      <div ref={myRef} className='href-event-location'></div>
      <div>   
        {service.status === 'loading' && (
          <p>Loading</p>
        )}
      </div>
      <div>
        {service.status === 'loaded' &&
          <div>
            <div className='legend-list'>
              {service.payload.map((legends: LegendListProps, key:any) => (
                <button 
                  className={clsx(key === activeKey && 'legend-list--button__' + legends.name + '--active', 'legend-list--button legend-list--button__' + legends.name)} 
                  key={key} 
                  onClick={toggleSelected(key)}
                >
                  <img 
                    style={{width: '60px'}} 
                    src={require(`./Images/${legends.name}.png`)}
                  />
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
