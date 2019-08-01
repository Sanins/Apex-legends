import React, { useRef, useEffect } from "react";
import useLegendsService from "./Services/UseLegendsService";
import { LegendListProps } from '../Types/Types';
import LegendsFunction from './LegendsFunction';
import { Button } from "@material-ui/core";

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)   
const useMountEffect = (fun: any) => useEffect(fun, [])

const LegendList: React.FC<{}> = () => {
  const service = useLegendsService();

  const [activeKey, setActiveKey] = React.useState(0);

  const myRef = useRef(null)

  useMountEffect(() => scrollToRef(myRef)) // Scroll on mount

  const lala = (key:any) => () => {
    setActiveKey(key)
	};
  
  return (
    <>
      <div ref={myRef} className='main'></div> 

      <div>
        {service.status === 'loading' && (
          <p>Loading</p>
        )}
        
        {service.status === 'loaded' &&

        <div>
          <div>
            {service.payload.map((legends: LegendListProps, key:any) => (
                <button className='' style={{background: 'blue'}} key={key} onClick={lala(key)}>
                  {legends.name}
                </button>
            ))}
          </div>
          <div>
            <LegendsFunction
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
