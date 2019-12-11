import React from "react";

function WeaponDetails(props:any) {

  return (
    <>
        <div className="gay">
            <p>{props.match.params.id}</p>
            <div>heyyyyyyyyyyyy</div>
        </div>
    </>
  );
};

export default WeaponDetails;
