import React from "react";
import ApexLegendsByUrlService from './../../Services/ApexLegendsByUrlService';
import { WeaponListProps } from "../../Types/Types";
import './WeaponList.scss';


const WeaponList: React.FC<{}> = () => {

  const [serviceValue, setServiceValue] = React.useState('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/assault-rifles.json');

  const handleChange = (param:number) => (e:any) => {
    switch (param) {
      case 0:
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/assault-rifles.json');
      case 1:
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/sub-machine-guns.json');
      case 2:
          return setServiceValue('weapons/light-machine-guns');
      case 3:
          return setServiceValue('weapons/shotguns');
      case 4:
          return setServiceValue('weapons/sniper-rifles');
      case 5:
          return setServiceValue('weapons/pistols');
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
                <ul>
                  <li onClick={handleChange(0)} className='weapon-list-filters__list-item weapon-list-filters__list-item--active'>Assault Rifles</li>
                  <li onClick={handleChange(1)} className='weapon-list-filters__list-item'>Sub Machine Guns</li>
                  <li onClick={handleChange(2)} className='weapon-list-filters__list-item'>Light Machine Guns</li>
                  <li onClick={handleChange(3)} className='weapon-list-filters__list-item'>Shotguns</li>
                  <li onClick={handleChange(4)} className='weapon-list-filters__list-item'>Sniper Rifles</li>
                  <li onClick={handleChange(5)} className='weapon-list-filters__list-item'>Pistols</li>
                </ul>
              </div>
              <div className='weapon-list-filters__dropdown'>
                <div className='weapon-list-filters__dropdown__title'>
                  <h3>Filter</h3>
                </div>
                <div className='weapon-list-filters__dropdown__item'>
                  <label>Weapon Type</label>
                  <select>
                    <option>All</option>
                    <option>Assault Rifles</option>
                    <option>Sub Machine Guns</option>
                    <option>Light Machine Guns</option>
                    <option>Shotguns</option>
                    <option>Sniper Rifles</option>
                    <option>Pistols</option>
                  </select>
                </div>
                <div className='weapon-list-filters__dropdown__item'>
                  <label>Sort by</label>
                  <select>
                    <option>Select...</option>
                    <option>Damage</option>
                    <option>Rate of fire</option>
                    <option>Damage per second</option>
                    <option>Damage per magazine</option>
                    <option>Headshot damage</option>
                    <option>Legshot damage</option>
                    <option>Ammo capacity</option>
                    <option>Projectile speed</option>
                  </select>
                </div>
                <button>Filter</button>
              </div>
          </div>
            <div className='weapon-list-of-weapons'>
              {service.payload.map((weaponCategories: WeaponListProps) => (
                <>
                  <p>{weaponCategories.name}</p>
                </>
              ))}
            </div>
            <div className='weapon-list-data'>
              <p>Dummy data</p>
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
