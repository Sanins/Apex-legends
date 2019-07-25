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
import { LegendListProps } from '../Types/Types';

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
            {service.payload.map((legends: LegendListProps) => (
              <>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>{legends.name}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <h2>{legends.name}</h2>
                  <p>{legends.function}</p>
                  <div dangerouslySetInnerHTML={{__html: legends.lore}} />
                  <p>{legends.about.real_name}</p>
                  <p>{legends.about.age}</p>
                  <p>{legends.abilities.ability_1.description}</p>
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
