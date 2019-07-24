import React from "react";
import useLegendsService from "./Services/UseLegendsService";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';
import './LegendList.scss';

const LegendList: React.FC<{}> = () => {
  const service = useLegendsService();
  
  return (
    <>
      <div className="card">
        {service.status === 'loading' && (
          <p>Loading</p>
        )}
        {service.status === 'loaded' &&
        <Accordion allowZeroExpanded={true}>     
            {service.payload.map((legends: any) => (
              <>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>{legends.name}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>{legends.function}</p>
                  <p>{legends.lore}</p>
                </AccordionItemPanel>
                </AccordionItem>
              </>
            ))}
          </Accordion>
          }
      </div>
      {service.status === 'error' && (
        <div>Error, the backend moved to the dark side.</div>
      )}
    </>
  );
};

export default LegendList;
