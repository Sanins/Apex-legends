import React from "react";
import ApexLegendsByUrlService from './../../Services/ApexLegendsByUrlService';
import WeaponFilter from './../WeaponFilter/WeaponFilter';
import { WeaponListProps } from "../../Types/Types";
import './WeaponList.scss';
import clsx from "clsx";

const WeaponList: React.FC<{}> = () => {

  const [serviceValue, setServiceValue] = React.useState('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/assault-rifles.json');
  const [activeWeaponTypeValue, setActiveWeaponTypeValue] = React.useState(0);
  const [activeWeaponValue, setActiveWeaponValue] = React.useState(0);

  const handleWeaponChange = (param: number) => (e: any) => {
    switch (param) {
      case 0:
        return setActiveWeaponValue(0);
      case 1:
        return setActiveWeaponValue(1);
      case 2:
        return setActiveWeaponValue(2);
      case 3:
        return setActiveWeaponValue(3);
      case 4:
        return setActiveWeaponValue(4);
      case 5:
        return setActiveWeaponValue(5);
    };
  };

  const handleWeaponTypeChange = (param: number) => (e: any) => {
    switch (param) {
      case 0:
        setActiveWeaponTypeValue(0);
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/assault-rifles.json');
      case 1:
        setActiveWeaponTypeValue(1);
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/sub-machine-guns.json');
      case 2:
        setActiveWeaponTypeValue(2);
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/light-machine-guns');
      case 3:
        setActiveWeaponTypeValue(3);
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/shotguns');
      case 4:
        setActiveWeaponTypeValue(4);
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/sniper-rifles');
      case 5:
        setActiveWeaponTypeValue(5);
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/pistols');
    };
  };

  const service = ApexLegendsByUrlService(serviceValue);

  return (
    <div className='general-page-wrapper'>
      {/* {service.status === 'loading' && (
        <p>Loading</p>
      )} */}

      {service.status === 'loaded' &&
        <div className='weapon-list'>
          <div className='weapon-list__title'>
            <h1 className='weapon-list__title--h1'>Weapons</h1>
          </div>
          <div className='weapon-list__information'>
            <div className='weapon-list-filters'>
              <div className='weapon-list-filters__list'>
                <a onClick={handleWeaponTypeChange(0)} className={clsx('weapon-list-filters__list-item', activeWeaponTypeValue === 0 && 'weapon-list-filters__list-item__active')}>Assault Rifles</a>
                <a onClick={handleWeaponTypeChange(1)} className={clsx('weapon-list-filters__list-item', activeWeaponTypeValue === 1 && 'weapon-list-filters__list-item__active')}>Sub Machine Guns</a>
                <a onClick={handleWeaponTypeChange(2)} className={clsx('weapon-list-filters__list-item', activeWeaponTypeValue === 2 && 'weapon-list-filters__list-item__active')}>Light Machine Guns</a>
                <a onClick={handleWeaponTypeChange(3)} className={clsx('weapon-list-filters__list-item', activeWeaponTypeValue === 3 && 'weapon-list-filters__list-item__active')}>Shotguns</a>
                <a onClick={handleWeaponTypeChange(4)} className={clsx('weapon-list-filters__list-item', activeWeaponTypeValue === 4 && 'weapon-list-filters__list-item__active')}>Sniper Rifles</a>
                <a onClick={handleWeaponTypeChange(5)} className={clsx('weapon-list-filters__list-item', activeWeaponTypeValue === 5 && 'weapon-list-filters__list-item__active')}>Pistols</a>
              </div>
              <div className='weapon-list-filters__dropdown'>
                <WeaponFilter />
              </div>
            </div>
            <div className='weapon-list-filters__list'>
              {service.payload.map((weaponCategories: WeaponListProps, key: number) => (
                <>
                  <a key={key} onClick={handleWeaponChange(key)} className={clsx('weapon-list-filters__list-item', activeWeaponValue === key && 'weapon-list-filters__list-item__active')}>{weaponCategories.name}</a>
                </>
              ))}
            </div>
            <div>
              {service.payload.map((weaponCategories: WeaponListProps, key: number) => (
                <div className='weapon-list-data'>
                  {key === activeWeaponValue &&
                    <div>
                      {weaponCategories.damage}
                    </div>
                  }
                </div>
              ))}
            </div>
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
