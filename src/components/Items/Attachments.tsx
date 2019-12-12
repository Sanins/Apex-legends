import React from "react";

function WeaponDetails(props:any) {

  return (
    <>
        <div>
            <p>{props.match.params.weaponId}</p>
            <div>heyyyyyyyyyyyy</div>
        </div>
    </>
  );
};

export default WeaponDetails;
