import React, { useState } from "react";
import ApexLegendsByUrlService from './../../Services/ApexLegendsByUrlService';
import WeaponListData from './WeaponListData/WeaponListData'
import WeaponTypeFilters from './WeaponTypeFilters/WeaponTypeFilters'
import WeaponListFilters from './WeaponListFilters/WeaponListFilters'
import { WeaponListProps } from "../../Types/Types";
import Heading from "../../Common/Heading/Heading"
import './WeaponList.scss';
import clsx from "clsx";
import useComponentVisible from "../../Common/Utils/Utils";

const WeaponList: React.FC<{}> = () => {

  const [serviceValue, setServiceValue] = useState('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/assault-rifles.json');
  const [activeWeaponTypeValue, setActiveWeaponTypeValue] = useState(0);
  const [activeWeaponValue, setActiveWeaponValue] = useState(0);

  const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false);

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
        setActiveWeaponValue(0);
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/assault-rifles.json');
      case 1:
        setActiveWeaponTypeValue(1);
        setActiveWeaponValue(0);
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/sub-machine-guns.json');
      case 2:
        setActiveWeaponTypeValue(2);
        setActiveWeaponValue(0);
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/light-machine-guns');
      case 3:
        setActiveWeaponTypeValue(3);
        setActiveWeaponValue(0);
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/shotguns');
      case 4:
        setActiveWeaponTypeValue(4);
        setActiveWeaponValue(0);
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/sniper-rifles');
      case 5:
        setActiveWeaponTypeValue(5);
        setActiveWeaponValue(0);
        return setServiceValue('https://www.apexdata.gg/api/OA1rrltgyhMHfknCo2dbFQtt/weapons/pistols');
    };
  };

  const service = ApexLegendsByUrlService(serviceValue);

  return (
    <>
      {/* {service.status === 'loading' && (
        <p>Loading</p>
      )} */}

      {service.status === 'loaded' &&
        <div className='weapon-list'>
          <div className='heading'>
            <Heading
              headingType={2}
            >
              Weapons
            </Heading>
          </div>
          <div className='weapon-list__information'>
            <div className='weapon-type-filters'>
              <WeaponTypeFilters
                assaultRifles={handleWeaponTypeChange(0)}
                subMachineGuns={handleWeaponTypeChange(1)}
                lightMachineGuns={handleWeaponTypeChange(2)}
                shotguns={handleWeaponTypeChange(3)}
                sniperRifles={handleWeaponTypeChange(4)}
                pistols={handleWeaponTypeChange(5)}
                activeWeapon={activeWeaponTypeValue}
              />
            </div>
            <div className='weapon-list-filters'>
              <div className='weapon-list-filters__mobile-btn-wrapper'>
                <label>Weapon Selection</label>
                  <button ref={ref} onClick={() => setIsComponentVisible(true)} className='mobile-dropdown-btn'>Select...</button>
              </div>
              <div className={clsx('weapon-list-filters__list', isComponentVisible && 'weapon-list-filters__show')}>
                {service.payload.map((weaponCategories: WeaponListProps, key: number) => (
                  <WeaponListFilters
                    keyValue={key}
                    name={weaponCategories.name}
                    activeWeaponValue={activeWeaponValue}
                    handleWeaponChange={handleWeaponChange(key)}
                  />
                ))}
              </div>
            </div>
            <div className='weapon-list-data'>
              {service.payload.map((weaponCategories: WeaponListProps, key: number) => (
                <>
                  {key === activeWeaponValue &&
                    <>
                      <WeaponListData
                        ammoCapacity={weaponCategories.ammo_capacity}
                        averageDps={weaponCategories.average_dps}
                        name={weaponCategories.name}
                        projectileSpeed={weaponCategories.projectile_speed}
                        damage={weaponCategories.damage}
                        damagePerSecond={weaponCategories.damage_per_second}
                        damagePerMagazine={weaponCategories.damage_per_magazine}
                        headshotDamage={weaponCategories.headshot_damage}
                        headshotDps={weaponCategories.headshot_dps}
                        legshotDamage={weaponCategories.legshot_damage}
                        rateOfFire={weaponCategories.rate_of_fire}
                        legshotDps={weaponCategories.legshot_dps}
                        tacticalReload={weaponCategories.tactical_reload}
                        emptyReload={weaponCategories.empty_reload}
                        drawTime={weaponCategories.draw_time}
                        holsterTime={weaponCategories.holster_time}
                      />
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
    </>
  );
};

export default WeaponList;
