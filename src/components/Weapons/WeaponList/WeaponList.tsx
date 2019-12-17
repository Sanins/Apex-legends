import React from "react";
import ApexLegendsByUrlService from './../../Services/ApexLegendsByUrlService';
import WeaponFilter from './../WeaponFilter/WeaponFilter';
import { WeaponListProps } from "../../Types/Types";
import Heading from "../../Common/Heading/Heading"
import RadialChart from '../../Common/RadialChart/RadialChart'
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
            <Heading 
              headingType={1}
            >
              Weapons
            </Heading>
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
            <div className='weapon-list-filters__list--2'>
              {service.payload.map((weaponCategories: WeaponListProps, key: number) => (
                <div className='weapon-list-filters__weapons'>
                  <a key={key} onClick={handleWeaponChange(key)} className={clsx('weapon-list-filters__list-item', activeWeaponValue === key && 'weapon-list-filters__list-item__active')}>{weaponCategories.name}</a>
                  <img className='weapon-list-data__weapon-image' src={require(`./Icons/${weaponCategories.name}.png`)} />
                </div>
              ))}
            </div>
            <div className='weapon-list-data'>
              {service.payload.map((weaponCategories: WeaponListProps, key: number) => (
                  <>
                  {key === activeWeaponValue &&
                  <>
                    <div className='weapon-list-data__title-container'>
                      <Heading headingType={3}>{weaponCategories.name}</Heading>
                      <img className='weapon-list-data__weapon-image' src={require(`./Icons/${weaponCategories.name}.png`)} />
                    </div>
                    <div className='weapon-list-data__radial-graphs'>
                      <div>
                        <RadialChart
                          progress={weaponCategories.damage}
                          colorTotal="#000"
                          colorProgress="#bdc0cf"
                          radius={80}
                          strokeWidth={14}
                          dimension={140}
                          titleText={'DMG'}
                          valueText={weaponCategories.damage}
                        />
                      </div>
                      <div>
                        <RadialChart
                          progress={weaponCategories.rate_of_fire / 12}
                          colorTotal="#000"
                          colorProgress="#bdc0cf"
                          radius={80}
                          strokeWidth={14}
                          dimension={140}
                          titleText={'RPM'}
                          valueText={weaponCategories.rate_of_fire}
                        />
                      </div>
                    </div>
                    <div className='weapon-list-data__bar-charts-container'>
                      <div className='weapon-list-data__bar-charts'>
                        <div>Damage per second</div> 
                        <div><span className='weapon-list-data__bar-charts__value'>{weaponCategories.damage_per_second}</span></div>
                      </div>
                      <div className='weapon-list-data__bar-charts'>
                        <div>Headshot damage</div>
                        <div><span className='weapon-list-data__bar-charts__value'>{weaponCategories.headshot_damage}</span></div>
                      </div>
                      <div className='weapon-list-data__bar-charts'>
                        <div>Legshot damage</div>
                        <div><span className='weapon-list-data__bar-charts__value'>{weaponCategories.legshot_damage}</span></div>
                      </div>
                      <div className='weapon-list-data__bar-charts'>
                        <div>Damage per mag</div>
                        <div><span className='weapon-list-data__bar-charts__value'>{weaponCategories.damage_per_magazine}</span></div>
                      </div>
                      <div className='weapon-list-data__extra-info'>
                        <a>How is 'damage per second' calculated?</a>
                        {/* <p>Damage per second is not the average damage dealt with body shots in 1 second. It's a realistic amount of damage you can deal in a 1 second slice. If a weapon can fire 1.5 shots a second, we only count 1 shot. That .5 of a shot can not be realistically dealt.</p>
                        <p>Here are additional values that might interest you:</p>
                        <div className='weapon-list-data__bar-charts'>
                          <div>Average dps/sec</div>
                          <div>{weaponCategories.average_dps}</div>
                        </div>
                        <div className='weapon-list-data__bar-charts'>
                          <div>Headshot dps</div>
                          <div>{weaponCategories.headshot_dps}</div>
                        </div>
                        <div className='weapon-list-data__bar-charts'>
                          <div>Legshot dps</div>
                          <div>{weaponCategories.legshot_dps}</div>
                        </div> */}
                      </div>
                      <hr></hr>
                    </div>
                    <div className='weapon-list-data__bar-charts-container'>
                      <div className='weapon-list-data__bar-charts'>
                        <div>Ammo capacity</div>
                        <div><span className='weapon-list-data__bar-charts__value'>{weaponCategories.ammo_capacity}</span></div>
                      </div>
                      <div className='weapon-list-data__bar-charts'>
                        <div>Projectile speed</div>
                        <div><span className='weapon-list-data__bar-charts__value'>{weaponCategories.projectile_speed}</span> m/s</div>
                      </div>
                      <div className='weapon-list-data__bar-charts'>
                        <div>Tactical reload</div>
                        <div><span className='weapon-list-data__bar-charts__value'>{weaponCategories.tactical_reload}</span> s</div>
                      </div>
                      <div className='weapon-list-data__bar-charts'>
                        <div>Empty reload</div>
                        <div><span className='weapon-list-data__bar-charts__value'>{weaponCategories.empty_reload}</span> s</div>
                      </div>
                      <div className='weapon-list-data__bar-charts'>
                        <div>Draw time</div>
                        <div><span className='weapon-list-data__bar-charts__value'>{weaponCategories.draw_time}</span> s</div>
                      </div>
                      <div className='weapon-list-data__bar-charts'>
                        <div>Holster time</div>
                        <div><span className='weapon-list-data__bar-charts__value'>{weaponCategories.holster_time}</span> s</div>
                      </div>
                    </div>
                  </>
                  }
                </>
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
